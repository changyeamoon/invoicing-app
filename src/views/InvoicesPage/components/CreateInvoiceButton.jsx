import React from 'react'
import { useHistory } from 'react-router-dom'

import { ROUTER_PATH } from '../../../constants'

export function CreateInvoiceButton() {
  const history = useHistory()

  return (
    <div>
      <button
        onClick={() => history.push(ROUTER_PATH.CREATE_INVOICE)}
      >
        Create Invoice
      </button>
    </div>
  )
}
