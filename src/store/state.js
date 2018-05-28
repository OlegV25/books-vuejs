import DefaultBooks from './default-books'
export const state = {
  books: DefaultBooks,
  visibleBooks: DefaultBooks,
  searchString: '',
  currentPage: 1,
  bookOnOnePage: 3
}
