import React, { useMemo, useReducer } from 'react'
import './App.css'

import { InvoiceContext } from './InvoiceContext'

import { Routes } from './Routes.jsx'
import { INVOICE_ACTION } from './constants'

function App() {
  const initialState = {
    invoices: [],
    isLoadingInvoices: false,
    isDeletingInvoice: false,
  }

  const [state, dispatch] = useReducer((state, action) => {
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

        const invoiceIndex = state.invoices.findIndex(
          invoice => invoice.id === deletedInvoice.id
        )

        const newInvoicesList = state.invoices.splice(invoiceIndex, 1)

        return {
          ...state,
          invoices: newInvoicesList,
          isDeletingInvoice: false,
        }

      default:
        return state
    }
  }, initialState)

  return (
    <div className="App">
      <header className="App-header">waddup</header>
      <InvoiceContext.Provider value={{ state, dispatch }}>
        <Routes />
      </InvoiceContext.Provider>
    </div>
  )
}

export default App
