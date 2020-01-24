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
    [invoices]
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoicesPage)
