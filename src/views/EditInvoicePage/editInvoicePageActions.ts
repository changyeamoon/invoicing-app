import mockInvoices from '../../utils/mockInvoices.json'

// types
import { Action, InvoiceDTO } from '../../utils/types'
import { Dispatch } from 'react'
import { History } from 'history'

// constants
import { INVOICE_ACTION, ROUTER_PATH } from '../../utils/constants'

export async function deleteInvoice(
  dispatch: Dispatch<Action>,
  deletedInvoice: InvoiceDTO,
  history: History
): Promise<void> {
  dispatch({
    type: INVOICE_ACTION.SET_IS_DELETING_INVOICE,
    payload: { isDeletingInvoice: true },
  })

  // mimic fetching time
  await new Promise(resolve => setTimeout(resolve, 1000))
  // do DELETE api stuff
  const invoiceIndex: number = mockInvoices.findIndex(
    mockInvoice => mockInvoice.id === deletedInvoice.id
  )
  mockInvoices.splice(invoiceIndex, 1)

  history.push(ROUTER_PATH.INVOICES_LIST)

  dispatch({
    type: INVOICE_ACTION.DELETE_INVOICE,
    payload: { deletedInvoice },
  })
}

export async function updateAndSaveInvoice(
  dispatch: Dispatch<Action>,
  updatedInvoice: InvoiceDTO,
  history: History
): Promise<void> {
  dispatch({
    type: INVOICE_ACTION.SET_IS_UPDATING_INVOICE,
    payload: { isUpdatingInvoice: true },
  })

  // mimic fetching time
  await new Promise(resolve => setTimeout(resolve, 1000))
  // do PATCH api stuff
  const updatedInvoiceIndex: number = mockInvoices.findIndex(
    mockInvoice => mockInvoice.id === updatedInvoice.id
  )
  mockInvoices.splice(updatedInvoiceIndex, 1)
  // @ts-ignore
  mockInvoices.splice(updatedInvoiceIndex, 0, updatedInvoice)

  history.push(ROUTER_PATH.INVOICES_LIST)

  dispatch({
    type: INVOICE_ACTION.UPDATE_INVOICE,
    payload: { updatedInvoice },
  })
}
