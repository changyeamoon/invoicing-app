import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { InputGroup } from '../../../components/InputGroup'
import { EditInvoiceItemsForm } from './EditInvoiceItemsForm'

export function EditInvoiceForm({
  invoice,
  deleteInvoice,
  isDeletingInvoice,
}) {
  const [editInvoiceForm, setEditInvoiceForm] = useState(invoice)

  const history = useHistory()

  if (isDeletingInvoice) {
    return <div>another dank loading thing</div>
  }

  return (
    <>
      <InputGroup
        htmlFor="name"
        labelText="Name"
        inputType="text"
        inputName="name"
        inputId="name"
        value={invoice.name}
        onChange={e =>
          setEditInvoiceForm({
            ...editInvoiceForm,
            name: e.target.value,
          })
        }
      />
      <InputGroup
        htmlFor="email"
        labelText="Email"
        inputType="text"
        inputName="email"
        inputId="email"
        value={invoice.email}
        onChange={e =>
          setEditInvoiceForm({
            ...editInvoiceForm,
            email: e.target.value,
          })
        }
      />
      <InputGroup
        htmlFor="dueDate"
        labelText="Due Date"
        inputType="date"
        inputName="dueDate"
        inputId="dueDate"
        value={invoice.dueDate}
        onChange={e =>
          setEditInvoiceForm({
            ...editInvoiceForm,
            dueDate: e.target.value,
          })
        }
      />
      <EditInvoiceItemsForm />
      <div>
        <button onClick={history.goBack}>Back</button>
        <button
          onClick={() => {
            deleteInvoice(invoice, history)
          }}
        >
          Delete
        </button>
        <button>Save</button>
      </div>
    </>
  )
}
