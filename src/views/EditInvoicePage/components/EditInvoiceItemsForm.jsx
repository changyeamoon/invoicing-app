import React, { useState } from 'react'

import { calculateTotal } from '../../../utils/helpers'

import { InputGroup } from '../../../components/InputGroup'

export function EditInvoiceItemsForm({ invoiceItems }) {
  const [invoiceItemsToCreate, setInvoiceItemsToCreate] = useState([
    { descriptionValue: '', amountValue: 0 },
  ])

  let amounts = []

  if (invoiceItems) {
    amounts = invoiceItems.map(invoiceItem => invoiceItem.amount)
  } else {
    amounts = invoiceItemsToCreate.map(
      invoiceItem => invoiceItem.amountValue
    )
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

    return invoiceItemsToCreate.map(invoiceItem => (
      <>
        <InputGroup
          htmlFor="description"
          labelText="Description"
          inputType="text"
          inputName="description"
          inputId="description"
          value={invoiceItem.descriptionValue}
        />
        <InputGroup
          htmlFor="amount"
          labelText="Amount"
          inputType="number"
          inputName="amount"
          inputId="amount"
          value={invoiceItem.amountValue}
        />
      </>
    ))
  }

  return (
    <div>
      {renderInvoiceItemList()}
      <button>+</button>
      <span>{`Total: $${calculateTotal(amounts)}`}</span>
    </div>
  )
}
