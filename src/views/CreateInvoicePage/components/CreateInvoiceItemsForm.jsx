import React, { useState } from 'react'

import { calculateTotal } from '../../../utils/helpers'

import { InputGroup } from '../../../components/InputGroup'

export function CreateInvoiceItemsForm({ setCreateInvoiceForm }) {
  const [
    createInvoiceItemsForm,
    setCreateInvoiceItemsForm,
  ] = useState([{}])

  let amounts = createInvoiceItemsForm.map(item => item.amount)

  return (
    <div>
      <>
        <InputGroup
          htmlFor="description"
          labelText="Description"
          inputType="text"
          inputName="description"
          inputId="description"
          value={''}
        />
        <InputGroup
          htmlFor="amount"
          labelText="Amount"
          inputType="number"
          inputName="amount"
          inputId="amount"
          value={''}
        />
      </>
      <button>+</button>
      <span>{`Total: $${calculateTotal(amounts)}`}</span>
    </div>
  )
}
