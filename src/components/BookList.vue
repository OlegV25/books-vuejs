<template>
  <b-card-group deck class="book-list">
    <b-card v-for="book in getVisibleList()"
            v-bind:key="book.id"
            class="book"
            v-bind:header="'ISBN:'+book.isbn"
            header-tag="header"
            v-bind:footer="'Record Creation Date: '+book.rct"
            footer-tag="footer"
            v-bind:title="book.title">
        <p class="card-text">{{book.description}}</p>
        <router-link :to="{ name: 'book-editor', params: { bookId: book.id }}">
          <button type="button" class="btn btn-outline-primary">Edit</button>
        </router-link>
        <button @click="deleteBook(book.id)" type="button" class="btn btn-outline-danger">Delete</button>
    </b-card>
  </b-card-group>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'BookList',
  methods: {
    ...mapActions(['deleteBook']),
    getVisibleList () {
      const { books, searchString, currentPage, bookOnOnePage } = this.$store.state
      const startIndex = (currentPage - 1) * bookOnOnePage
      let visibleBookList = books.filter(book =>
        book.title.toLowerCase().includes(searchString.toLowerCase()))
      return this.getCurrentPageBooks(visibleBookList, startIndex)
    },
    getCurrentPageBooks (bookList, startIndex) {
      const booksDiff = bookList.length - startIndex
      const coutOfBooks = booksDiff >= 3 ? 3 : booksDiff
      let finalArray = []
      let i = 0
      while (i !== coutOfBooks) {
        finalArray.push(bookList[ startIndex + i ])
        i++
      }
      return finalArray
    }
  }
}
</script>
