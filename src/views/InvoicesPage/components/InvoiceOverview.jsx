import React from 'react'

import { InvoiceDetails } from './InvoiceDetails'
import { EditInvoiceButton } from './EditInvoiceButton'

export function InvoiceOverview({ invoice }) {
  return (
    <div>
      <InvoiceDetails invoice={invoice} />
      <EditInvoiceButton invoice={invoice} />
    </div>
  )
}
