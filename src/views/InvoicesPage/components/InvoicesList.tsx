import React from 'react'

// types
import { InvoiceDTO } from '../../../utils/types'

// components
import { InvoiceOverview } from './InvoiceOverview'

type InvoicesListProps = {
  invoices: InvoiceDTO[]
}

export function InvoicesList({ invoices }: InvoicesListProps) {
  return (
    <>
      {invoices.map(invoice => (
        <InvoiceOverview key={invoice.id} invoice={invoice} />
      ))}
    </>
  )
}
