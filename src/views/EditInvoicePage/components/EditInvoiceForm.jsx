import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { InvoiceForm } from '../../../components/invoiceForm'
import { Button } from '../../../lib/components/Buttons'

import '../style.css'

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
      <div className="buttons-edit">
        <Button className="back-btn" onClick={history.goBack}>
          Back
        </Button>
        <Button
          className="delete-btn"
          onClick={() => {
            deleteInvoice(invoice, history)
          }}
        >
          Delete
        </Button>
        <Button
          className="save-btn"
          onClick={() =>
            updateAndSaveInvoice(editInvoiceForm, history)
          }
        >
          Save
        </Button>
      </div>
    </>
  )
}
