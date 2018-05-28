import { uuid } from 'vue-uuid'
import moment from 'moment'

export const mutations = {
  delete (state, bookId) {
    state.currentPage = 1
    state.books = state.books.filter(book => book.id !== bookId)
  },
  add (state, bookData) {
    state.books.unshift({
      ...bookData,
      id: uuid.v1(),
      rct: moment().format('MM/DD/YYYY')
    })
    state.currentPage = 1
    alert('New book is added')
  },
  edit (state, bookData) {
    for (let book in state.books) {
      if (state.books[book].id === bookData.id) {
        state.books[book] = {...bookData}
      }
    }
    alert('Book is edited')
  },
  search (state, searchString) {
    state.searchString = searchString
    state.currentPage = 1
  },
  goToPage (state, pageNumber) {
    state.currentPage = pageNumber
  }
}
