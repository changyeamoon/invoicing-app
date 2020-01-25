import React, { useReducer } from 'react'

// misc
import { InvoiceContext } from './InvoiceContext'
import { invoiceReducer, initialState } from './invoiceReducer'

// components
import { Routes } from './Routes'

// styles
import './App.css'

function App() {
  const [state, dispatch] = useReducer(invoiceReducer, initialState)

  return (
    <div className="App">
      <header className="App-header">
        <span role="img" aria-label="SteelHouse">
          ⛓🏠
        </span>
      </header>
      <InvoiceContext.Provider value={{ state, dispatch }}>
        <Routes />
      </InvoiceContext.Provider>
    </div>
  )
}

export default App
