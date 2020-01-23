import React, { useState } from 'react'

import { calculateTotal } from '../utils/helpers'

import { InputGroup } from './InputGroup'

export function InvoiceItemsForm({ invoiceItems }) {
  const [invoiceItemsList, setInvoiceItemsList] = useState(invoiceItems || [])

  let amounts = []

  if (invoiceItems) {
    amounts = invoiceItems.map(invoiceItem => invoiceItem.amount)
  }

  const renderInvoiceItemList = () => {
    if (invoiceItems) {
      return invoiceItems.map(invoiceItem => (
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
      ))
    }

  }

  return (
    <div>
      {invoiceItems &&
        invoiceItems.map(invoiceItem => {
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
  )
}
