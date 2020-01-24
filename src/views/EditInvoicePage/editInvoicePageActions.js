import mockInvoices from '../../utils/mockInvoices.json'

import { INVOICE_ACTION, ROUTER_PATH } from '../../utils/constants'

export async function deleteInvoice(
  dispatch,
  deletedInvoice,
  history
) {
  dispatch({
    type: INVOICE_ACTION.SET_IS_DELETING_INVOICE,
    payload: { isDeletingInvoice: true },
  })

  // mimic fetching time
  await new Promise(resolve => setTimeout(resolve, 1000))
  // do DELETE api stuff
  const invoiceIndex = mockInvoices.findIndex(
    mockInvoice => mockInvoice.id === deletedInvoice.id
  )
  mockInvoices.splice(invoiceIndex, 1)

  history.push(ROUTER_PATH.INVOICES_LIST)

  dispatch({
    type: INVOICE_ACTION.DELETE_INVOICE,
    payload: { deletedInvoice },
  })
}