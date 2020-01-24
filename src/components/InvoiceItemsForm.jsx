import React from 'react'
import styled from 'styled-components'

import { calculateTotal } from '../utils/helpers'

import { InputGroup } from '../lib/components/InputGroup'

const Form = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  padding: 1.5rem;
  align-items: center;
`

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
`

const PlusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem 0.4rem;
  border-color: #190e4f;
  font-size: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 700;
  width: 2rem;
`
const Total = styled.span`
  font-size: 3rem;
`

export function InvoiceItemsForm({ invoiceForm, setInvoiceForm }) {
  let amounts = invoiceForm.invoiceItems.map(item => item.amount)

  const updateInvoiceItem = (event, index) => {
    setInvoiceForm({
      ...invoiceForm,
      invoiceItems: invoiceForm.invoiceItems.map((item, idx) => {
        if (index === idx) {
          return {
            ...item,
            [event.target.name]: event.target.value,
          }
        }
        return item
      }),
    })
  }

  return (
    <Form>
      {invoiceForm.invoiceItems.map((invoiceItem, index) => (
        // don't use index as key, bad
        <Details
          key={invoiceItem.id || index}
          data-testid="invoice-item-overview"
        >
          <InputGroup
            textarea
            htmlFor={`description ${index}`}
            labelText="Description"
            inputType="text"
            inputName="description"
            inputId={`description ${index}`}
            value={invoiceItem.description}
            onChange={e => updateInvoiceItem(e, index)}
          />
          <InputGroup
            htmlFor={`amount ${index}`}
            labelText="Amount"
            inputType="number"
            inputName="amount"
            inputId={`amount ${index}`}
            value={invoiceItem.amount}
            onChange={e => updateInvoiceItem(e, index)}
          />
        </Details>
      ))}
      <PlusButton
        onClick={() =>
          setInvoiceForm({
            ...invoiceForm,
            invoiceItems: [
              ...invoiceForm.invoiceItems,
              { description: '', amount: 0 },
            ],
          })
        }
      >
        +
      </PlusButton>
      <Total>{`Total: $${calculateTotal(amounts)}`}</Total>
    </Form>
  )
}
