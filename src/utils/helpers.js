import React, { useContext, useReducer } from 'react'
import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

import { InvoiceContext } from '../InvoiceContext'
import { appReducer, initialState } from '../appReducer'

/**
 * @description custom connect function for our poor mans redux
 */
export const connect = (mapStateToProps, mapDispatchToProps) => {
  return function(Component) {
    // eslint-disable-next-line react/display-name
    return function(props) {
      const { state, dispatch } = useContext(InvoiceContext)
      const stateToProps = mapStateToProps(state)
      const dispatchToProps = mapDispatchToProps(dispatch)
      const newProps = {
        ...props,
        ...stateToProps,
        ...dispatchToProps,
      }
      return <Component {...newProps} />
    }
  }
}

/**
 * @description calculates total amount from array of number or string represented numbers
 */
export const calculateTotal = amounts => {
  let total = 0
  amounts.forEach(amount => {
    total += +amount
  })

  return total
}

/**
 * @description Will return a wrapped component that has the context and router configured
 */
export const wrappedRender = (
  Component,
  routeConfig = {
    basename: `/`,
    path: '/',
    route: '/',
  },
  options = {}
) => {
  const { basename, path, route } = routeConfig
  const history = createMemoryHistory({
    basename,
    initialEntries: [route],
  })

  const Providers = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    return (
      <InvoiceContext.Provider value={{ state, dispatch }}>
        <Router history={history}>
          <Route path={path} component={children} />
        </Router>
      </InvoiceContext.Provider>
    )
  }

  return {
    ...render(() => Component, {
      wrapper: Providers,
      ...options,
    }),
    history,
  }
}
