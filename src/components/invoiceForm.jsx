import React from 'react'

import { InputGroup } from './InputGroup'
import { InvoiceItemsForm } from './InvoiceItemsForm'

export function InvoiceForm({ invoiceForm, setInvoiceForm }) {
  return (
    <div>
      <InputGroup
        htmlFor="name"
        labelText="Name"
        inputType="text"
        inputName="name"
        inputId="name"
        value={invoiceForm.name}
        onChange={e => {
          setInvoiceForm({
            ...invoiceForm,
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
        value={invoiceForm.email}
        onChange={e =>
          setInvoiceForm({
            ...invoiceForm,
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
        value={invoiceForm.dueDate}
        onChange={e =>
          setInvoiceForm({
            ...invoiceForm,
            dueDate: e.target.value,
          })
        }
      />
      <InvoiceItemsForm
        invoiceForm={invoiceForm}
        setInvoiceForm={setInvoiceForm}
      />
    </div>
  )
}
