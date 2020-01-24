import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { ROUTER_PATH } from '../../../utils/constants'

import { InvoiceDetails } from './InvoiceDetails'
import { Button } from '../../../lib/components/Buttons'

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

export function InvoiceOverview({ invoice }) {
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
