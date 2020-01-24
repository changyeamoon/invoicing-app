import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { InputGroup } from '../../../components/InputGroup'
import { CreateInvoiceItemsForm } from './CreateInvoiceItemsForm'

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

  return (
    <>
      <InputGroup
        htmlFor="name"
        labelText="Name"
        inputType="text"
        inputName="name"
        inputId="name"
        value={createInvoiceForm.name}
        onChange={e => {
          setCreateInvoiceForm({
            ...createInvoiceForm,
            name: e.target.value,
          })
        }}
      />
      <InputGroup
        htmlFor="email"
        labelText="Email"
        inputType="text"
        inputName="email"
        inputId="email"
        value={createInvoiceForm.email}
        onChange={e =>
          setCreateInvoiceForm({
            ...createInvoiceForm,
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
        value={createInvoiceForm.dueDate}
        onChange={e =>
          setCreateInvoiceForm({
            ...createInvoiceForm,
            dueDate: e.target.value,
          })
        }
      />
      <CreateInvoiceItemsForm
        createInvoiceForm={createInvoiceForm}
        setCreateInvoiceForm={setCreateInvoiceForm}
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
