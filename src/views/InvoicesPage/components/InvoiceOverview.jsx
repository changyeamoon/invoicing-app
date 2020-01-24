import React from 'react'

import { InvoiceDetails } from './InvoiceDetails'
import { EditInvoiceButton } from './EditInvoiceButton'

export function InvoiceOverview({ invoice }) {
  return (
    <div data-testid="invoice-overview">
      <InvoiceDetails invoice={invoice} />
      <EditInvoiceButton invoice={invoice} />
    </div>
  )
}
