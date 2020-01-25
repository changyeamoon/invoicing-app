import React from 'react'
import styled from 'styled-components'

// types
import { InvoiceDTO } from '../utils/types'

// components
import { InputGroup } from '../lib/components/InputGroup'
import { InvoiceItemsForm } from './InvoiceItemsForm'

const Form = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  padding: 1.5rem;
`

type InvoiceFormProps = {
  invoiceForm: InvoiceDTO
  setInvoiceForm: Function
}

export function InvoiceForm({
  invoiceForm,
  setInvoiceForm,
}: InvoiceFormProps) {
  return (
    <Form>
      <InputGroup
        textarea={false}
        htmlFor="name"
        labelText="Name"
        inputType="text"
        inputName="name"
        inputId="name"
        value={invoiceForm.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInvoiceForm({
            ...invoiceForm,
            name: e.target.value,
          })
        }}
      />
      <InputGroup
        textarea={false}
        htmlFor="email"
        labelText="Email"
        inputType="text"
        inputName="email"
        inputId="email"
        value={invoiceForm.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInvoiceForm({
            ...invoiceForm,
            email: e.target.value,
          })
        }
      />
      <InputGroup
        textarea={false}
        htmlFor="dueDate"
        labelText="Due Date"
        inputType="date"
        inputName="dueDate"
        inputId="dueDate"
        value={invoiceForm.dueDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
