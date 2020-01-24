import React from 'react'
import styled from 'styled-components'

import { calculateTotal } from '../../../utils/helpers'

const Details = styled.div`
  display: grid;
  grid-row-gap: 0.7rem;
  justify-items: start;
`

export function InvoiceDetails({ invoice }) {
  const amounts = invoice.invoiceItems.map(item => item.amount)

  return (
    <Details>
      <span>{`Name: ${invoice.name}`}</span>
      <span>{`Email: ${invoice.email}`}</span>
      <span>{`Due Date: ${invoice.dueDate}`}</span>
      <span>{`Total: $${calculateTotal(amounts)}`}</span>
    </Details>
  )
}
