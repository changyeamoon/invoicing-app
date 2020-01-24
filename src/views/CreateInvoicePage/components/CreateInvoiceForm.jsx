import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { InvoiceForm } from '../../../components/invoiceForm'
import { Button } from '../../../lib/components/Buttons'

import '../style.css'

export function CreateInvoiceForm({
  isCreatingInvoice,
  createAndSaveInvoice,
}) {
  const [createInvoiceForm, setCreateInvoiceForm] = useState({
    name: '',
    email: '',
    dueDate: '',
    invoiceItems: [{ description: '', amount: 0 }],
  })
  const history = useHistory()

  if (isCreatingInvoice) {
    return <div>amazing loading thing</div>
  }

  return (
    <>
      <InvoiceForm
        invoiceForm={createInvoiceForm}
        setInvoiceForm={setCreateInvoiceForm}
      />
      <div className="buttons-create">
        <Button className="back-btn" onClick={history.goBack}>
          Back
        </Button>
        <Button
          className="save-btn"
          onClick={() =>
            createAndSaveInvoice(createInvoiceForm, history)
          }
        >
          Save
        </Button>
      </div>
    </>
  )
}
