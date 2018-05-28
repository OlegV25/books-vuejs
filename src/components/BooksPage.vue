<template>
  <div class="books-page">
    <h1>Book List</h1>
    <router-link :to="{ name: 'book-editor', params: { bookId: 0 }}">
      <b-button size='lg' variant='success'>Add book</b-button>
    </router-link>
    <SearchInput/>
    <BookList />
    <Pagination />
  </div>
</template>

<script>
import BookList from './BookList.vue'
import SearchInput from './SearchInput.vue'
import Pagination from './Pagination.vue'
import { mapActions } from 'vuex'
export default {
  components: {BookList, SearchInput, Pagination},
  name: 'BooksPage',
  methods: mapActions(['addBook'])
}
</script>
