import React from 'react'

import { calculateTotal } from '../utils/helpers'

import { InputGroup } from './InputGroup'

export function InvoiceItemsForm({ invoiceForm, setInvoiceForm }) {
  let amounts = invoiceForm.invoiceItems.map(item => item.amount)

  const updateInvoiceItem = (event, index) => {
    setInvoiceForm({
      ...invoiceForm,
      invoiceItems: invoiceForm.invoiceItems.map((item, idx) => {
        if (index === idx) {
          return {
            ...item,
            [event.target.name]: event.target.value,
          }
        }
        return item
      }),
    })
  }

  return (
    <div>
      {invoiceForm.invoiceItems.map((invoiceItem, index) => (
        // don't use index as key, bad
        <div key={invoiceItem.id || index}>
          <InputGroup
            htmlFor="description"
            labelText="Description"
            inputType="text"
            inputName="description"
            inputId={`description ${index}`}
            value={invoiceItem.description}
            onChange={e => updateInvoiceItem(e, index)}
          />
          <InputGroup
            htmlFor="amount"
            labelText="Amount"
            inputType="number"
            inputName="amount"
            inputId={`description ${index}`}
            value={invoiceItem.amount}
            onChange={e => updateInvoiceItem(e, index)}
          />
        </div>
      ))}
      <button
        onClick={() =>
          setInvoiceForm({
            ...invoiceForm,
            invoiceItems: [
              ...invoiceForm.invoiceItems,
              { description: '', amount: 0 },
            ],
          })
        }
      >
        +
      </button>
      <span>{`Total: $${calculateTotal(amounts)}`}</span>
    </div>
  )
}
