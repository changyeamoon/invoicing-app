import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { InputGroup } from '../../../components/InputGroup'
import { CreateInvoiceItemsForm } from './CreateInvoiceItemsForm'

export function CreateInvoiceForm({ invoice }) {
  const [createInvoiceForm, setCreateInvoiceForm] = useState({
    name: '',
    email: '',
    dueDate: '',
    invoiceItems: [],
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
      />
      <InputGroup
        htmlFor="email"
        labelText="Email"
        inputType="text"
        inputName="email"
        inputId="email"
        value={createInvoiceForm.email}
      />
      <InputGroup
        htmlFor="dueDate"
        labelText="Due Date"
        inputType="date"
        inputName="dueDate"
        inputId="dueDate"
        value={createInvoiceForm.dueDate}
      />
      <CreateInvoiceItemsForm
        setCreateInvoiceForm={setCreateInvoiceForm}
      />
      <div>
        <button onClick={history.goBack}>Back</button>
        <button>Save</button>
      </div>
    </>
  )
}
