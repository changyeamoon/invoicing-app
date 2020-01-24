import React from 'react'

import { connect } from '../../utils/helpers'

import {
  deleteInvoice,
  updateAndSaveInvoice,
} from './editInvoicePageActions'

import { EditInvoiceForm } from './components/EditInvoiceForm'

const mapStateToProps = state => ({
  isDeletingInvoice: state.isDeletingInvoice,
  isUpdatingInvoice: state.isUpdatingInvoice,
})

const mapDispatchToProps = dispatch => ({
  deleteInvoice: (deletedInvoice, history) =>
    deleteInvoice(dispatch, deletedInvoice, history),
  updateAndSaveInvoice: (updatedInvoice, history) =>
    updateAndSaveInvoice(dispatch, updatedInvoice, history),
})

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
}) {
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
