<template>
    <b-pagination
      align="center"
      size="lg"
      :total-rows="getRowsCount()"
      v-model="$store.state.currentPage"
      @change="changePage"
      :per-page="$store.state.bookOnOnePage">
    </b-pagination>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Pagination',
  methods: {
    ...mapActions(['changePage']),
    getRowsCount () {
      let {books, searchString} = this.$store.state
      return books.filter(book =>
        book.title.toLowerCase().includes(searchString.toLowerCase())).length
    }
  }
}
</script>
