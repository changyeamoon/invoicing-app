import React, { useReducer } from 'react'

import { InvoiceContext } from './InvoiceContext'

import { appReducer, initialState } from './appReducer'

import { Routes } from './Routes.jsx'

import './App.css'

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)

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
