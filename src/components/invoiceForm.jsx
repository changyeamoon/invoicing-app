import React from 'react'
import styled from 'styled-components'

import { InputGroup } from '../lib/components/InputGroup'
import { InvoiceItemsForm } from './InvoiceItemsForm'

const Form = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  padding: 1.5rem;
`

export function InvoiceForm({ invoiceForm, setInvoiceForm }) {
  return (
    <Form>
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
    </Form>
  )
}
