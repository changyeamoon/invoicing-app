import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { InvoiceForm } from '../../../components/invoiceForm'

export function EditInvoiceForm({
  invoice,
  deleteInvoice,
  isDeletingInvoice,
  updateAndSaveInvoice,
  isUpdatingInvoice,
}) {
  const [editInvoiceForm, setEditInvoiceForm] = useState(invoice)

  const history = useHistory()

  if (isDeletingInvoice || isUpdatingInvoice) {
    return <div>another dank loading thing</div>
  }

  return (
    <>
      <InvoiceForm
        invoiceForm={editInvoiceForm}
        setInvoiceForm={setEditInvoiceForm}
      />
      <div>
        <button onClick={history.goBack}>Back</button>
        <button
          onClick={() => {
            deleteInvoice(invoice, history)
          }}
        >
          Delete
        </button>
        <button
          onClick={() =>
            updateAndSaveInvoice(editInvoiceForm, history)
          }
        >
          Save
        </button>
      </div>
    </>
  )
}
