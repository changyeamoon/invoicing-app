import mockInvoices from '../../utils/mockInvoices.json'

// types
import { Dispatch } from 'react'
import { Action, InvoiceDTO } from '../../utils/types'

// constants
import { INVOICE_ACTION } from '../../utils/constants'

export async function getAndStoreInvoices(
  dispatch: Dispatch<Action>
): Promise<void> {
  dispatch({
    type: INVOICE_ACTION.SET_IS_LOADING_INVOICES,
    payload: { isLoadingInvoices: true },
  })

  // mimic fetching time
  await new Promise(resolve => setTimeout(resolve, 1000))
  // do GET api stuff
  const invoices: InvoiceDTO[] = mockInvoices.slice()

  dispatch({
    type: INVOICE_ACTION.ADD_INVOICES,
    payload: { invoices },
  })
}
