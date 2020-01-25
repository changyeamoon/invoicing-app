import { INVOICE_ACTION } from './utils/constants'
import { Action, InvoiceDTO } from './utils/types'

export type InvoiceState = Readonly<{
  invoices: InvoiceDTO[]
  isLoadingInvoices: boolean
  isDeletingInvoice: boolean
  isCreatingInvoice: boolean
  isUpdatingInvoice: boolean
}>

export const initialState: InvoiceState = {
  invoices: [],
  isLoadingInvoices: false,
  isDeletingInvoice: false,
  isCreatingInvoice: false,
  isUpdatingInvoice: false,
}

export const invoiceReducer = (
  state: InvoiceState = initialState,
  action: Action
): InvoiceState => {
  switch (action.type) {
    case INVOICE_ACTION.SET_IS_LOADING_INVOICES:
      const { isLoadingInvoices } = action.payload

      return { ...state, isLoadingInvoices }

    case INVOICE_ACTION.ADD_INVOICES:
      const { invoices } = action.payload

      return { ...state, invoices, isLoadingInvoices: false }

    case INVOICE_ACTION.SET_IS_DELETING_INVOICE:
      const { isDeletingInvoice } = action.payload

      return { ...state, isDeletingInvoice }

    case INVOICE_ACTION.DELETE_INVOICE:
      const { deletedInvoice } = action.payload

      const deletedInvoiceIndex = state.invoices.findIndex(
        invoice => invoice.id === deletedInvoice.id
      )

      const newInvoicesList = state.invoices.splice(
        deletedInvoiceIndex,
        1
      )

      return {
        ...state,
        invoices: newInvoicesList,
        isDeletingInvoice: false,
      }

    case INVOICE_ACTION.SET_IS_CREATING_INVOICE:
      const { isCreatingInvoice } = action.payload

      return { ...state, isCreatingInvoice }

    case INVOICE_ACTION.CREATE_INVOICE:
      const { createdInvoice } = action.payload

      return {
        ...state,
        invoices: [createdInvoice, ...state.invoices],
        isCreatingInvoice: false,
      }

    case INVOICE_ACTION.SET_IS_UPDATING_INVOICE:
      const { isUpdatingInvoice } = action.payload

      return { ...state, isUpdatingInvoice }

    case INVOICE_ACTION.UPDATE_INVOICE:
      const { updatedInvoice } = action.payload

      const updatedInvoiceIndex = state.invoices.findIndex(
        invoice => invoice.id === updatedInvoice.id
      )

      return {
        ...state,
        invoices: [
          ...state.invoices.slice(0, updatedInvoiceIndex),
          updatedInvoice,
          ...state.invoices.slice(updatedInvoiceIndex + 1),
        ],
        isUpdatingInvoice: false,
      }

    default:
      return state
  }
}
