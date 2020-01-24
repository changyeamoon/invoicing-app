import React, { useContext } from 'react'

import { InvoiceContext } from '../InvoiceContext'

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
