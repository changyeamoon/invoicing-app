import React from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import { ROUTER_PATH } from './constants'

import { InvoicesPage } from './views/InvoicesPage'
import { CreateInvoicePage } from './views/CreateInvoicePage'
import { EditInvoicePage } from './views/EditInvoicePage'

import { InvoiceLayout } from './components/InvoiceLayout'

export function Routes() {
  return (
    <InvoiceLayout>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={ROUTER_PATH.INVOICES_LIST}
            component={InvoicesPage}
          />
          <Route
            exact
            path={ROUTER_PATH.CREATE_INVOICE}
            component={CreateInvoicePage}
          />
          <Route
            exact
            path={ROUTER_PATH.EDIT_INVOICE}
            component={EditInvoicePage}
          />
          <Redirect exact from="/" to={ROUTER_PATH.INVOICES_LIST} />
        </Switch>
      </BrowserRouter>
    </InvoiceLayout>
  )
}
