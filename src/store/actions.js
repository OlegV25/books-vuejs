export const actions = {
  addBook: ({commit}, bookData) => commit('add', bookData),
  editBook: ({commit}, bookData) => commit('edit', bookData),
  deleteBook: ({commit}, bookId) => commit('delete', bookId),
  searchBooks: ({commit}, searchString) => commit('search', searchString),
  changePage: ({commit}, pageNumber) => commit('goToPage', pageNumber)
}
