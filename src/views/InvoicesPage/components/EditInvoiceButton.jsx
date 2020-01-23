import React from 'react'
import { useHistory } from 'react-router-dom'

import { ROUTER_PATH } from '../../../constants'

export function EditInvoiceButton({ invoice }) {
  const history = useHistory()

  return (
    <div>
      <button
        onClick={() =>
          history.push({
            pathname: ROUTER_PATH.EDIT_INVOICE,
            state: { invoice },
          })
        }
      >
        EDIT
      </button>
    </div>
  )
}
