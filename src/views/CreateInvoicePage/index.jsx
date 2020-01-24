import React from 'react'

import { connect } from '../../utils/helpers'

import { createAndSaveInvoice } from './createInvoicePageActions'

import { CreateInvoiceForm } from './components/CreateInvoiceForm'

const mapStateToProps = state => ({
  isCreatingInvoice: state.isCreatingInvoice,
})

const mapDispatchToProps = dispatch => ({
  createAndSaveInvoice: (createdInvoice, history) =>
    createAndSaveInvoice(dispatch, createdInvoice, history),
})

function CreateInvoicePage({
  // mapStateToProps
  isCreatingInvoice,
  //mapDispatchToProps
  createAndSaveInvoice,
}) {
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
