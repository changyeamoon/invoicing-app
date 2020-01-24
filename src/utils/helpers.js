import React, { useContext } from 'react'

import { InvoiceContext } from '../InvoiceContext'

export function calculateTotal(amounts) {
  let total = 0
  amounts.forEach(amount => {
    total += amount
  })

  return total
}

export function connect(mapStateToProps, mapDispatchToProps) {
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
