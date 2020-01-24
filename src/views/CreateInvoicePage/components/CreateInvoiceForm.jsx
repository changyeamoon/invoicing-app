import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { InvoiceForm } from '../../../components/invoiceForm'

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
      <div>
        <button onClick={history.goBack}>Back</button>
        <button
          onClick={() =>
            createAndSaveInvoice(createInvoiceForm, history)
          }
        >
          Save
        </button>
      </div>
    </>
  )
}
