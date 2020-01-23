import React from 'react'

import { InvoiceForm } from '../../components/InvoiceForm'

export function EditInvoicePage({
  location: {
    state: { invoice },
  },
}) {
  return (
    <div>
      <InvoiceForm invoice={invoice} />
    </div>
  )
}
