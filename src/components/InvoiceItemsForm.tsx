import React from 'react'
import styled from 'styled-components'

// types
import { InvoiceDTO } from '../utils/types'

// helpers
import { calculateTotal } from '../utils/helpers'

// components
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
  border-color: #190e4f;
  font-size: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 700;
  width: 2rem;
  height: 2rem;
`
const Total = styled.span`
  font-size: 3rem;
`

type InvoiceItemsFormProps = {
  invoiceForm: InvoiceDTO
  setInvoiceForm: Function
}

export function InvoiceItemsForm({
  invoiceForm,
  setInvoiceForm,
}: InvoiceItemsFormProps) {
  let amounts: Array<number | string> = invoiceForm.invoiceItems.map(
    item => item.amount
  )

  const updateInvoiceItem = (
    event: React.ChangeEvent<Element>,
    index: number
  ): void => {
    setInvoiceForm({
      ...invoiceForm,
      invoiceItems: invoiceForm.invoiceItems.map((item, idx) => {
        if (index === idx) {
          return {
            ...item,
            // @ts-ignore
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
            textarea={false}
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
