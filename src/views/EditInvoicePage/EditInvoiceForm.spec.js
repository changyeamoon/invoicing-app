import React from 'react'
import { within, fireEvent } from '@testing-library/react'

import { wrappedRender } from '../../utils/helpers'

import EditInvoicePage from './index'

import mockInvoices from '../../utils/mockInvoices.json'

const setup = (props = {}) =>
  wrappedRender(<EditInvoicePage {...props} />)

const mockHistoryState = {
  location: { state: { invoice: mockInvoices[0] } },
}

describe('<EditInvoicePage/>', () => {
  describe('page finished loading', () => {
    let getByText, getByLabelText, getAllByTestId, findByText

    beforeEach(() => {
      ;({
        getByText,
        getByLabelText,
        getAllByTestId,
        findByText,
      } = setup(mockHistoryState))
    })

    describe('EditInvoiceForm', () => {
      it('should display correct input fields and values', () => {
        expect(getByLabelText('Name').value).toBe('Redhold')
        expect(getByLabelText('Email').value).toBe(
          'jmckie0@examiner.com'
        )
        expect(getByLabelText('Due Date').value).toBe('2019-10-27')

        const allInvoiceItems = getAllByTestId(
          'invoice-item-overview'
        )

        expect(allInvoiceItems).toHaveLength(3)
        expect(
          within(allInvoiceItems[0]).getByLabelText('Description')
            .value
        ).toBe('Operative bandwidth-monitored success')
        expect(
          within(allInvoiceItems[0]).getByLabelText('Amount').value
        ).toBe('92')
        expect(
          within(allInvoiceItems[1]).getByLabelText('Description')
            .value
        ).toBe('Focused even-keeled productivity')
        expect(
          within(allInvoiceItems[1]).getByLabelText('Amount').value
        ).toBe('96')
        expect(
          within(allInvoiceItems[2]).getByLabelText('Description')
            .value
        ).toBe('Object-based content-based moratorium')
        expect(
          within(allInvoiceItems[2]).getByLabelText('Amount').value
        ).toBe('57')
      })

      it('should create placeholder InvoiceItem', () => {
        fireEvent.click(getByText('+'))

        const allInvoiceItems = getAllByTestId(
          'invoice-item-overview'
        )

        expect(allInvoiceItems).toHaveLength(4)
        expect(
          within(allInvoiceItems[3]).getByLabelText('Description')
            .value
        ).toBe('')
        expect(
          within(allInvoiceItems[3]).getByLabelText('Amount').value
        ).toBe('0')
      })

      it('should display the total amount', () => {
        getByText('Total: $245')
      })
    })

    describe('buttons', () => {
      it('should take you back to main page', () => {
        fireEvent.click(getByText('Back'))
      })

      it('should delete this damn sucka', async () => {
        await fireEvent.click(getByText('Delete'))

        await findByText('another dank loading thing')
      })

      it('should save the changes in mars', async () => {
        await fireEvent.click(getByText('Save'))

        await findByText('another dank loading thing')
      })
    })
  })
})
