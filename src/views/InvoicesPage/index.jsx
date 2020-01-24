import React, { useEffect, useMemo } from 'react'

import { connect } from '../../utils/helpers'

import { getAndStoreInvoices } from './invoicesPageActions'

import { CreateInvoiceButton } from './components/CreateInvoiceButton'
import { InvoicesList } from './components/InvoicesList'

const mapStateToProps = state => ({
  invoices: state.invoices,
  isLoadingInvoices: state.isLoadingInvoices,
})

const mapDispatchToProps = dispatch => ({
  getAndStoreInvoices: () => getAndStoreInvoices(dispatch),
})

function InvoicesPage({
  //mapStateToProps
  invoices,
  isLoadingInvoices,
  // mapDispatchToProps
  getAndStoreInvoices,
}) {
  useEffect(() => {
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

  return useMemo(
    () => (
      <div>
        <CreateInvoiceButton />
        {isLoadingInvoices ? (
          <div>sick loading icon</div>
        ) : (
          <InvoicesList invoices={invoices} />
        )}
      </div>
    ),
    [invoices, isLoadingInvoices]
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoicesPage)
