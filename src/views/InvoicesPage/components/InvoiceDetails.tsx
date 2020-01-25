import React from 'react'
import styled from 'styled-components'

// types
import { InvoiceDTO } from '../../../utils/types'

// helpers
import { calculateTotal } from '../../../utils/helpers'

const Details = styled.div`
  display: grid;
  grid-row-gap: 0.7rem;
  justify-items: start;
`

type InvoiceDetailsProps = {
  invoice: InvoiceDTO
}

export function InvoiceDetails({ invoice }: InvoiceDetailsProps) {
  const amounts: Array<number | string> = invoice.invoiceItems.map(
    item => item.amount
  )

  return (
    <Details>
      <span>{`Name: ${invoice.name}`}</span>
      <span>{`Email: ${invoice.email}`}</span>
      <span>{`Due Date: ${invoice.dueDate}`}</span>
      <span>{`Total: $${calculateTotal(amounts)}`}</span>
    </Details>
  )
}
