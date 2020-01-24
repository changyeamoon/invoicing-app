import React from 'react'
import {
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'

import { wrappedRender } from '../../utils/helpers'

import InvoicesPage from './index'

const setup = (props = {}) =>
  wrappedRender(<InvoicesPage {...props} />)

describe('<InvoicesPage/>', () => {
  it('renders spinner on initial page load', () => {
    const { getByText } = setup()

    getByText('sick loading icon')
  })

  describe('page finished loading', () => {
    let getByText, getAllByTestId, queryByText

    beforeEach(async () => {
      ;({ getByText, getAllByTestId, queryByText } = setup())

      await waitForElementToBeRemoved(() =>
        queryByText('sick loading icon')
      )
    })

    describe('Create Invoice Button', () => {
      it('should display correct button', () => {
        getByText('Create Invoice')
      })
    })

    describe('InvoicesList', () => {
      it('should show invoices with correct details', async () => {
        const allInvoices = getAllByTestId('invoice-overview')

        expect(allInvoices).toHaveLength(100)
        ;[
          'Name: Redhold',
          'Email: jmckie0@examiner.com',
          'Due Date: 2019-10-27',
          'Total: $245',
          'EDIT',
        ].forEach(invoiceValue =>
          within(allInvoices[0]).getByText(invoiceValue)
        )
        ;[
          'Name: Prodder',
          'Email: esercombe1@usnews.com',
          'Due Date: 2019-04-05',
          'Total: $356',
          'EDIT',
        ].forEach(invoiceValue =>
          within(allInvoices[1]).getByText(invoiceValue)
        )
      })
    })
  })
})
