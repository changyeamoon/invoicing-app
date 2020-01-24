import React from 'react'

import { calculateTotal } from '../../../utils/helpers'

import { InputGroup } from '../../../components/InputGroup'

export function CreateInvoiceItemsForm({
  createInvoiceForm,
  setCreateInvoiceForm,
}) {
  let amounts = createInvoiceForm.invoiceItems.map(
    item => item.amount
  )

  const updateInvoiceItem = (event, index) => {
    setCreateInvoiceForm({
      ...createInvoiceForm,
      invoiceItems: createInvoiceForm.invoiceItems.map(
        (item, idx) => {
          if (index === idx) {
            return {
              ...item,
              [event.target.name]: event.target.value,
            }
          }
          return item
        }
      ),
    })
  }

  return (
    <div>
      {createInvoiceForm.invoiceItems.map((invoiceItem, index) => (
        // don't use index as key, bad
        <div key={index}>
          <InputGroup
            htmlFor="description"
            labelText="Description"
            inputType="text"
            inputName="description"
            inputId="description"
            value={invoiceItem.description}
            onChange={e => updateInvoiceItem(e, index)}
          />
          <InputGroup
            htmlFor="amount"
            labelText="Amount"
            inputType="number"
            inputName="amount"
            inputId="amount"
            value={invoiceItem.amount}
            onChange={e => updateInvoiceItem(e, index)}
          />
        </div>
      ))}
      <button
        onClick={() =>
          setCreateInvoiceForm({
            ...createInvoiceForm,
            invoiceItems: [
              ...createInvoiceForm.invoiceItems,
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
