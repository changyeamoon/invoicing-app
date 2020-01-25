import * as React from 'react'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

// types
import { ComponentClass } from 'react'
import { Router, Route } from 'react-router-dom'

// misc
import { InvoiceContext } from '../InvoiceContext'
import { invoiceReducer, initialState } from '../invoiceReducer'

/**
 * @description custom connect function for our poor mans redux
 */
export const connect = (
  mapStateToProps: Function,
  mapDispatchToProps: Function
) => {
  return function(Component: any) {
    // eslint-disable-next-line react/display-name
    return function(props: Object) {
      const { state, dispatch } = React.useContext(InvoiceContext)
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
export const calculateTotal = (
  amounts: Array<number | string>
): number => {
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
  Component: any,
  routeConfig = {
    path: '/',
    route: '/',
  },
  options = {}
) => {
  const { path, route } = routeConfig
  const history = createMemoryHistory({
    initialEntries: [route],
  })

  const Providers = ({ children }: { children: ComponentClass }) => {
    const [state, dispatch] = React.useReducer(
      invoiceReducer,
      initialState
    )

    return (
      <InvoiceContext.Provider value={{ state, dispatch }}>
        <Router history={history}>
          <Route path={path} component={children} />
        </Router>
      </InvoiceContext.Provider>
    )
  }

  return {
    // @ts-ignore
    ...render(() => Component, {
      wrapper: Providers,
      ...options,
    }),
    history,
  }
}
