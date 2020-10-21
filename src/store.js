import { read, save } from './vendor/storage'

/**
  Store: Keep a current page and data state in forms when user reloads the page. (Optional)
*/

const STORE_PAGE = 'StorePage'
const STORE_ADDING = 'StoreAdding'
const STORE_PAYMENT_DATA = 'StorePaymentData'
const STORE_ACTIVE_DATA = 'StoreActiveData'
const StorePaymentData = read(STORE_PAYMENT_DATA, null)
const StoreActiveData = read(STORE_ACTIVE_DATA, null)

const LastActivePage = {
  page: read(STORE_PAGE, 'main'),
  adding: read(STORE_ADDING, false),
  paymentForm: StorePaymentData ? JSON.parse(StorePaymentData) : null,
  activeForm: StoreActiveData ? JSON.parse(StoreActiveData) : null,
  save (data) {
    save(STORE_PAGE, this.page)
    save(STORE_ADDING, this.adding)
    if (this.paymentForm) {
      save(STORE_PAYMENT_DATA, JSON.stringify(this.paymentForm))
    }
    if (data) {
      save(STORE_ACTIVE_DATA, JSON.stringify(data))
    }
  }
}

export default LastActivePage
