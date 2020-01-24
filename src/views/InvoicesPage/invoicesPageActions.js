import mockInvoices from '../../utils/mockInvoices.json'

import { INVOICE_ACTION } from '../../utils/constants'

export async function getAndStoreInvoices(dispatch) {
  dispatch({
    type: INVOICE_ACTION.SET_IS_LOADING_INVOICES,
    payload: { isLoadingInvoices: true },
  })

  // mimic fetching time
  await new Promise(resolve => setTimeout(resolve, 1000))
  // do GET api stuff
  const invoices = mockInvoices.slice()

  dispatch({
    type: INVOICE_ACTION.ADD_INVOICES,
    payload: { invoices },
  })
}
