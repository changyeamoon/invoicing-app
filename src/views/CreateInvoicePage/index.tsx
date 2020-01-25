import React from 'react'

// types
import { Dispatch } from 'react'
import { Action, InvoiceDTO } from '../../utils/types'
import { InvoiceState as ReduxState } from '../../invoiceReducer'
import { History } from 'history'

// helpers
import { connect } from '../../utils/helpers'

// actions
import { createAndSaveInvoice } from './createInvoicePageActions'

// components
import { CreateInvoiceForm } from './components/CreateInvoiceForm'

const mapStateToProps = (state: ReduxState) => ({
  isCreatingInvoice: state.isCreatingInvoice,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  createAndSaveInvoice: (
    createdInvoice: InvoiceDTO,
    history: History
  ) => createAndSaveInvoice(dispatch, createdInvoice, history),
})

type PassedProps = {}
type CreateInvoicePageProps = PassedProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

function CreateInvoicePage({
  // mapStateToProps
  isCreatingInvoice,
  //mapDispatchToProps
  createAndSaveInvoice,
}: CreateInvoicePageProps) {
  return (
    <div>
      <CreateInvoiceForm
        isCreatingInvoice={isCreatingInvoice}
        createAndSaveInvoice={createAndSaveInvoice}
      />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateInvoicePage)
