import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// types
import { InvoiceDTO } from '../../../utils/types'

// components
import { InvoiceForm } from '../../../components/invoiceForm'
import { Button } from '../../../lib/components/Buttons'

import '../style.css'

type EditInvoiceFormProps = {
  invoice: InvoiceDTO
  deleteInvoice: Function
  isDeletingInvoice: Boolean
  updateAndSaveInvoice: Function
  isUpdatingInvoice: Boolean
}

export function EditInvoiceForm({
  invoice,
  deleteInvoice,
  isDeletingInvoice,
  updateAndSaveInvoice,
  isUpdatingInvoice,
}: EditInvoiceFormProps) {
  const [editInvoiceForm, setEditInvoiceForm] = useState<InvoiceDTO>(
    invoice
  )

  const history = useHistory()

  if (isDeletingInvoice || isUpdatingInvoice) {
    return <div>another dank loading thing</div>
  }

  return (
    <>
      <InvoiceForm
        invoiceForm={editInvoiceForm}
        setInvoiceForm={setEditInvoiceForm}
      />
      <div className="buttons-edit">
        <Button className="back-btn" onClick={history.goBack}>
          Back
        </Button>
        <Button
          className="delete-btn"
          onClick={() => {
            deleteInvoice(invoice, history)
          }}
        >
          Delete
        </Button>
        <Button
          className="save-btn"
          onClick={() =>
            updateAndSaveInvoice(editInvoiceForm, history)
          }
        >
          Save
        </Button>
      </div>
    </>
  )
}
