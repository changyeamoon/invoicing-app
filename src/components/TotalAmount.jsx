import React from 'react'

export function calculateTotal(invoiceItems) {
  let total = 0
  invoiceItems.forEach(invoiceItem => {
    total += invoiceItem.amount
  })

  return total
}

export function TotalAmount() {
  return (
    <span>{`Total: $${calculateTotal(
      invoice && invoice.invoiceItems
    )}`}</span>
  )
}
