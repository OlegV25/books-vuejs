import Vue from 'vue'
import Router from 'vue-router'
import BooksPage from '@/components/BooksPage'
import AddOrEditBook from '@/components/book-editor/BookEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/books',
      name: 'books',
      component: BooksPage
    },
    {
      path: '/book-editor/:bookId',
      name: 'book-editor',
      component: AddOrEditBook
    },
    {
      path: '/',
      redirect: '/books'
    },
    {
      path: '*',
      redirect: '/books'
    }
  ]
})
