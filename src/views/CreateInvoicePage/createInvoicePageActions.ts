import mockInvoices from '../../utils/mockInvoices.json'

// types
import { Action, InvoiceDTO } from '../../utils/types'
import { Dispatch } from 'react'
import { History } from 'history'

// constants
import { INVOICE_ACTION, ROUTER_PATH } from '../../utils/constants'

export async function createAndSaveInvoice(
  dispatch: Dispatch<Action>,
  createdInvoice: InvoiceDTO,
  history: History
) {
  dispatch({
    type: INVOICE_ACTION.SET_IS_CREATING_INVOICE,
    payload: { isCreatingInvoice: true },
  })

  // mimic fetching time
  await new Promise(resolve => setTimeout(resolve, 1000))
  // do POST api stuff
  // post will usually return newly created invoice with generated Id, lets mock that
  // @ts-ignore
  mockInvoices.push({ ...createdInvoice, id: Date.now() + '' })

  history.push(ROUTER_PATH.INVOICES_LIST)

  dispatch({
    type: INVOICE_ACTION.CREATE_INVOICE,
    payload: { createdInvoice },
  })
}
