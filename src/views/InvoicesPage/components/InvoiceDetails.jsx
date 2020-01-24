import React from 'react'

import { calculateTotal } from '../../../utils/helpers'

export function InvoiceDetails({ invoice }) {
  const amounts = invoice.invoiceItems.map(item => item.amount)

  return (
    <div>
      <span>{`Name: ${invoice.name}`}</span>
      <span>{`Email: ${invoice.email}`}</span>
      <span>{`Due Date: ${invoice.dueDate}`}</span>
      <span>{`Total: $${calculateTotal(amounts)}`}</span>
    </div>
  )
}
