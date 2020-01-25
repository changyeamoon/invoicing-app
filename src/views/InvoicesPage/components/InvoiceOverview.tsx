import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

// types
import { InvoiceDTO } from '../../../utils/types'

//constants
import { ROUTER_PATH } from '../../../utils/constants'

// components
import { InvoiceDetails } from './InvoiceDetails'
import { Button } from '../../../lib/components/Buttons'

// styles
import '../style.css'

const GridDiv = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 2rem;
  border-top: 1px solid #dfdfdf;

  &:hover {
    background: #eee;
  }
`
type InvoiceOverviewProps = {
  invoice: InvoiceDTO
}

export function InvoiceOverview({ invoice }: InvoiceOverviewProps) {
  const history = useHistory()

  return (
    <GridDiv data-testid="invoice-overview">
      <InvoiceDetails invoice={invoice} />
      <Button
        className="edit-button"
        onClick={() =>
          history.push({
            pathname: ROUTER_PATH.EDIT_INVOICE,
            state: { invoice },
          })
        }
      >
        EDIT
      </Button>
    </GridDiv>
  )
}
