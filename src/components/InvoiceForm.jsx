import React from 'react'
import { useHistory } from 'react-router-dom'

import { calculateTotal } from '../utils/helpers'

import { InputGroup } from './InputGroup'

// In most cases I would not make this into a re-usable component. In this case it's similar enough, but in reality these Edit Invoice and Create Invoice would likely be very different
export function InvoiceForm({ invoice }) {
  const history = useHistory()
  let amounts = []

  if (invoice && invoice.invoiceItems) {
    amounts = invoice.invoiceItems.map(item => item.amount)
  }

  return (
    <>
      <InputGroup
        htmlFor="name"
        labelText="Name"
        inputType="text"
        inputName="name"
        inputId="name"
        value={invoice && invoice.name}
      />
      <InputGroup
        htmlFor="email"
        labelText="Email"
        inputType="text"
        inputName="email"
        inputId="email"
        value={invoice && invoice.email}
      />
      <InputGroup
        htmlFor="dueDate"
        labelText="Due Date"
        inputType="date"
        inputName="dueDate"
        inputId="dueDate"
        value={invoice && invoice.dueDate}
      />
      <div>
        {invoice &&
          invoice.invoiceItems &&
          invoice.invoiceItems.map(invoiceItem => {
            return (
              <>
                <InputGroup
                  htmlFor="description"
                  labelText="Description"
                  inputType="text"
                  inputName="description"
                  inputId="description"
                  value={invoiceItem.description}
                />
                <InputGroup
                  htmlFor="amount"
                  labelText="Amount"
                  inputType="number"
                  inputName="amount"
                  inputId="amount"
                  value={invoiceItem.amount}
                />
              </>
            )
          })}
        <button>+</button>
        <span>{`Total: $${calculateTotal(amounts)}`}</span>
      </div>
      <div>
        <button onClick={history.goBack}>Back</button>
        {invoice && <button>Delete</button>}
        <button>Save</button>
      </div>
    </>
  )
}
