import React from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import { ROUTER_PATH } from './constants'

import { InvoicesList } from './views/InvoicesList'
import { CreateInvoice } from './views/CreateInvoice'
import { EditInvoice } from './views/EditInvoice'

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={ROUTER_PATH.INVOICES_LIST}
            component={InvoicesList}
          />
          <Route
            exact
            path={ROUTER_PATH.CREATE_INVOICE}
            component={CreateInvoice}
          />
          <Route
            exact
            path={ROUTER_PATH.EDIT_INVOICE}
            component={EditInvoice}
          />
          <Redirect exact from="/" to={ROUTER_PATH.INVOICES_LIST} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
