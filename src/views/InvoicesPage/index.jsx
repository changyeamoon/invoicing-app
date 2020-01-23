import React, { useEffect, useState } from 'react'

import { CreateInvoiceButton } from './components/CreateInvoiceButton'
import { InvoicesList } from './components/InvoicesList'
import { getInvoices } from './actions'

export function InvoicesPage() {
  const [isInvoicesLoading, setIsInvoicesLoading] = useState(false)
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    setInvoices(getInvoices())
  }, [])

  return (
    <div>
      <CreateInvoiceButton />
      {isInvoicesLoading ? (
        <div>sick loading icon</div>
      ) : (
        <InvoicesList invoices={invoices} />
      )}
    </div>
  )
}
