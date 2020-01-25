import * as React from 'react'
import { useHistory } from 'react-router-dom'

// types
import { Dispatch } from 'react'
import { Action } from '../../utils/types'
/*
 usually there is a rootReducer that will combine all the reducers,
 since this is a poor man's redux, and YAGNI there's just invoice reducer
 */
import { InvoiceState as ReduxState } from '../../invoiceReducer'

// constants
import { ROUTER_PATH } from '../../utils/constants'

// helpers
import { connect } from '../../utils/helpers'

// actions (aka business logic)
import { getAndStoreInvoices } from './invoicesPageActions'

// components
import { InvoicesList } from './components/InvoicesList'
import { Button } from '../../lib/components/Buttons'

// styles
import './style.css'

const mapStateToProps = (state: ReduxState) => ({
  invoices: state.invoices,
  isLoadingInvoices: state.isLoadingInvoices,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getAndStoreInvoices: () => getAndStoreInvoices(dispatch),
})

type PassedProps = {}
type InvoicesPageProps = PassedProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

function InvoicesPage({
  //mapStateToProps
  invoices,
  isLoadingInvoices,
  // mapDispatchToProps
  getAndStoreInvoices,
}: InvoicesPageProps) {
  const history = useHistory()

  React.useEffect(() => {
    getAndStoreInvoices()
    /*
     normally we need to hoist the getAndStoreInvoices function inside of the useEffect,
     and insert the prop its using into the dependency array.
     OR use a useCallback on the function in the parent component. This poor mans redux needs more
     improvements to make this possible (times not worth!). Won't hurt the demo,
     but stating we should never ignore react-hooks exhaustive deps (https://overreacted.io/a-complete-guide-to-useeffect/)
     */
    // eslint-disable-next-line
  }, [])

  return React.useMemo(
    () => (
      <div className="grid-container">
        <Button
          className="create-button"
          onClick={() => history.push(ROUTER_PATH.CREATE_INVOICE)}
        >
          Create Invoice
        </Button>
        {isLoadingInvoices ? (
          <div>sick loading icon</div>
        ) : (
          <InvoicesList invoices={invoices} />
        )}
      </div>
    ),
    [invoices, isLoadingInvoices, history]
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoicesPage)
