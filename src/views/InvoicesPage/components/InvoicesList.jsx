import React from 'react'
import { InvoiceOverview } from './InvoiceOverview'

export function InvoicesList({ invoices }) {
  return (
    <div>
      {invoices.map(invoice => (
        <InvoiceOverview key={invoice.id} invoice={invoice} />
      ))}
    </div>
  )
}
