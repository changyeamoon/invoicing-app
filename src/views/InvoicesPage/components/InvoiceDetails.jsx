import React from 'react'

function calculateTotal(invoiceItems) {
  let total = 0
  invoiceItems.forEach(invoiceItem => {
    total += invoiceItem.amount
  })

  return total
}

export function InvoiceDetails() {
  return (
    <div>
      <span>{`Name: ${invoice.name}`}</span>
      <span>{`Email: ${invoice.email}`}: </span>
      <span>{`Due Date: ${invoice.dueDate}`}</span>
      <span>{`Total: $${calculateTotal(invoice.invoiceItems)}`}</span>
    </div>
  )
}
