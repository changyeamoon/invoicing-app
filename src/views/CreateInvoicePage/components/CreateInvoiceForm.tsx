import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// types
import { InvoiceDTO } from '../../../utils/types'

// components
import { InvoiceForm } from '../../../components/invoiceForm'
import { Button } from '../../../lib/components/Buttons'

// styles
import '../style.css'

type CreateInvoiceFormProps = {
  isCreatingInvoice: Boolean
  createAndSaveInvoice: Function
}

export function CreateInvoiceForm({
  isCreatingInvoice,
  createAndSaveInvoice,
}: CreateInvoiceFormProps) {
  const [createInvoiceForm, setCreateInvoiceForm] = useState<
    InvoiceDTO
  >({
    name: '',
    email: '',
    dueDate: '',
    invoiceItems: [{ description: '', amount: 0 }],
  })
  const history = useHistory()

  if (isCreatingInvoice) {
    return <div>amazing loading thing</div>
  }

  return (
    <>
      <InvoiceForm
        invoiceForm={createInvoiceForm}
        setInvoiceForm={setCreateInvoiceForm}
      />
      <div className="buttons-create">
        <Button className="back-btn" onClick={history.goBack}>
          Back
        </Button>
        <Button
          className="save-btn"
          onClick={() =>
            createAndSaveInvoice(createInvoiceForm, history)
          }
        >
          Save
        </Button>
      </div>
    </>
  )
}
