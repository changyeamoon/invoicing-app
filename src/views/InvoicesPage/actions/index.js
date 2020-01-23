import mockInvoices from '../mockInvoices.json'

export function getInvoices() {
  // do api stuff
  return mockInvoices.slice(0, 5)
}
