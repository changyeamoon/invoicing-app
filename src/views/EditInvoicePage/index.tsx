import React from 'react'

// types
import { Dispatch } from 'react'
import { Action, InvoiceDTO } from '../../utils/types'
import { InvoiceState as ReduxState } from '../../invoiceReducer'
import { History } from 'history'

// helpers
import { connect } from '../../utils/helpers'

// actions
import {
  deleteInvoice,
  updateAndSaveInvoice,
} from './editInvoicePageActions'

// components
import { EditInvoiceForm } from './components/EditInvoiceForm'

const mapStateToProps = (state: ReduxState) => ({
  isDeletingInvoice: state.isDeletingInvoice,
  isUpdatingInvoice: state.isUpdatingInvoice,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  deleteInvoice: (deletedInvoice: InvoiceDTO, history: History) =>
    deleteInvoice(dispatch, deletedInvoice, history),
  updateAndSaveInvoice: (
    updatedInvoice: InvoiceDTO,
    history: History
  ) => updateAndSaveInvoice(dispatch, updatedInvoice, history),
})

type PassedProps = { location: { state: { invoice: InvoiceDTO } } }
type EditInvoicePageProps = PassedProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

function EditInvoicePage({
  location: {
    state: { invoice },
  },
  // mapStateToProps
  isDeletingInvoice,
  isUpdatingInvoice,
  // mapDispatchToProps
  deleteInvoice,
  updateAndSaveInvoice,
}: EditInvoicePageProps) {
  return (
    <div>
      <EditInvoiceForm
        invoice={invoice}
        deleteInvoice={deleteInvoice}
        isDeletingInvoice={isDeletingInvoice}
        updateAndSaveInvoice={updateAndSaveInvoice}
        isUpdatingInvoice={isUpdatingInvoice}
      />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditInvoicePage)
