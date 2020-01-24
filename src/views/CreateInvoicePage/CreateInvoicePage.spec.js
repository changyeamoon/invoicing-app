import React from 'react'
import { within, fireEvent } from '@testing-library/react'

import { wrappedRender } from '../../utils/helpers'

import CreateInvoicePage from './index'

const setup = (props = {}) =>
  wrappedRender(<CreateInvoicePage {...props} />)

describe('<CreateInvoicePage/>', () => {
  describe('page finished loading', () => {
    let getByText, getByLabelText, getAllByTestId, findByText

    beforeEach(() => {
      ;({
        getByText,
        getByLabelText,
        getAllByTestId,
        findByText,
      } = setup())
    })

    describe('CreateInvoiceForm', () => {
      it('should display correct input fields and no values', () => {
        expect(getByLabelText('Name').value).toBe('')
        expect(getByLabelText('Email').value).toBe('')
        expect(getByLabelText('Due Date').value).toBe('')

        const allInvoiceItems = getAllByTestId(
          'invoice-item-overview'
        )

        expect(allInvoiceItems).toHaveLength(1)
        expect(
          within(allInvoiceItems[0]).getByLabelText('Description')
            .value
        ).toBe('')
        expect(
          within(allInvoiceItems[0]).getByLabelText('Amount').value
        ).toBe('0')
      })

      it('should create placeholder InvoiceItem', () => {
        fireEvent.click(getByText('+'))

        const allInvoiceItems = getAllByTestId(
          'invoice-item-overview'
        )

        expect(allInvoiceItems).toHaveLength(2)
        expect(
          within(allInvoiceItems[1]).getByLabelText('Description')
            .value
        ).toBe('')
        expect(
          within(allInvoiceItems[1]).getByLabelText('Amount').value
        ).toBe('0')
      })

      it('should display the total amount', () => {
        getByText('Total: $0')
      })
    })

    describe('buttons', () => {
      it('should take you back to main page', () => {
        fireEvent.click(getByText('Back'))
      })

      it('should save the changes in mars', async () => {
        await fireEvent.click(getByText('Save'))

        await findByText('amazing loading thing')
      })
    })

    describe('actually creating an invoice', () => {
      it('should change all the input values', async () => {
        const inputName = getByLabelText('Name')
        fireEvent.change(inputName, {
          target: { value: 'Chang' },
        })
        expect(inputName.value).toBe('Chang')

        const inputEmail = getByLabelText('Email')
        fireEvent.change(inputEmail, {
          target: { value: 'jordan@steelhouse.com' },
        })
        expect(inputEmail.value).toBe('jordan@steelhouse.com')

        const inputDueDate = getByLabelText('Due Date')
        fireEvent.change(inputDueDate, {
          target: { value: '2020-01-23' },
        })
        expect(inputDueDate.value).toBe('2020-01-23')

        const allInvoiceItems = getAllByTestId(
          'invoice-item-overview'
        )
        expect(allInvoiceItems).toHaveLength(1)

        const descriptionInput = within(
          allInvoiceItems[0]
        ).getByLabelText('Description')
        fireEvent.change(descriptionInput, {
          target: { value: 'the birds work for the bourgeoisie' },
        })
        expect(descriptionInput.value).toBe(
          'the birds work for the bourgeoisie'
        )

        const amountInput = within(allInvoiceItems[0]).getByLabelText(
          'Amount'
        )
        fireEvent.change(amountInput, {
          target: { value: '22' },
        })
        expect(amountInput.value).toBe('22')

        getByText('Total: $22')

        fireEvent.click(getByText('Save'))

        await findByText('amazing loading thing')
      })
    })
  })
})
