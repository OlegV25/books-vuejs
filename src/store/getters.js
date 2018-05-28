export const getters = {
  getBookById: state => bookId =>
    state.books.filter(book => book.id === bookId)[0]
}
