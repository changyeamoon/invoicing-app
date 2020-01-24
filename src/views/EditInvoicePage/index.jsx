import React from 'react'

import { connect } from '../../utils/helpers'

import { deleteInvoice } from './editInvoicePageActions'

import { EditInvoiceForm } from './components/EditInvoiceForm'

const mapStateToProps = state => ({
  isDeletingInvoice: state.isDeletingInvoice,
})

const mapDispatchToProps = dispatch => ({
  deleteInvoice: (deletedInvoice, history) =>
    deleteInvoice(dispatch, deletedInvoice, history),
})

function EditInvoicePage({
  location: {
    state: { invoice },
  },
  // mapStateToProps
  isDeletingInvoice,
  // mapDispatchToProps
  deleteInvoice,
}) {
  return (
    <div>
      <EditInvoiceForm
        invoice={invoice}
        deleteInvoice={deleteInvoice}
        isDeletingInvoice={isDeletingInvoice}
      />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditInvoicePage)
