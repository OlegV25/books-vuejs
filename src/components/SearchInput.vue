<template>
  <b-input-group prepend="Book name" class="search-input">
    <b-form-input
       v-model="searchString"></b-form-input>
  </b-input-group>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SearchInput',
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    ...mapActions(['searchBooks'])
  },
  watch: {
    searchString (val) {
      this.searchBooks(val)
    }
  }
}
</script>
