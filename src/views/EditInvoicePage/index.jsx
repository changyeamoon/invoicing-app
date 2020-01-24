import React from 'react'

import { connect } from '../../utils/helpers'

import { deleteInvoice } from './createInvoicePageActions'

import { EditInvoiceForm } from './components/EditInvoiceForm'

const mapStateToProps = state => ({
  isDeletingInvoice: state.isDeletingInvoice,
})

const mapDispatchToProps = dispatch => ({
  deleteInvoice: (invoice, history) =>
    deleteInvoice(dispatch, invoice, history),
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
