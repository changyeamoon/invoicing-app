export interface InvoiceDTO {
  id?: string
  name: string
  email: string
  dueDate: string
  invoiceItems: InvoiceItemDTO[]
}

export interface InvoiceItemDTO {
  id?: string
  description: string
  amount: number
}

// misc
export interface Action {
  type: string
  [key: string]: any
}
