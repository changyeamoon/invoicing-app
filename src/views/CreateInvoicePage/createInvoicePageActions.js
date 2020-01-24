import mockInvoices from '../../utils/mockInvoices.json'

import { INVOICE_ACTION, ROUTER_PATH } from '../../utils/constants'

export async function createAndSaveInvoice(
  dispatch,
  createdInvoice,
  history
) {
  dispatch({
    type: INVOICE_ACTION.SET_IS_CREATING_INVOICE,
    payload: { isCreatingInvoice: true },
  })

  // mimic fetching time
  await new Promise(resolve => setTimeout(resolve, 1000))
  // do POST api stuff
  // post will usually return newly created invoice with generated Id, lets mock that
  mockInvoices.push({ ...createdInvoice, id: Date.now() + '' })

  history.push(ROUTER_PATH.INVOICES_LIST)

  dispatch({
    type: INVOICE_ACTION.CREATE_INVOICE,
    payload: { createdInvoice },
  })
}
