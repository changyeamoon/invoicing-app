import React, { Dispatch } from 'react'

const defaultContext: {
  state: Object
  dispatch: Dispatch<any>
} = { state: {}, dispatch: () => {} }

export const InvoiceContext = React.createContext(defaultContext)
