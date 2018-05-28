<template>
  <div class="editor-page">
    <b-form>
      <b-form-group label="Title"
                    label-for="title_input">
        <b-form-input id="title_input"
                      type="text"
                      v-model="form.title"
                      placeholder="Enter book title">
        </b-form-input>
      </b-form-group>
      <b-form-group label="ISBN"
                    label-for="ISBN_input">
        <b-form-input id="ISBN_input"
                      type="text"
                      v-model="form.isbn"
                      placeholder="Enter book ISBN">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Authors"
                    label-for="author_input">
        <b-form-select id="author_input"
                      :options="authors"
                      v-model="form.author">
        </b-form-select>
      </b-form-group>
      <b-form-group label="Description"
                    label-for="descrotion_input">
        <b-form-textarea id="descrotion_input"
                         v-model="form.description"
                         placeholder="Enter book description"
                         :rows="12">
        </b-form-textarea>
      </b-form-group>
      <b-button
        @click="submit()"
        variant="primary">{{isAdding ? 'Add': 'Edit'}}
      </b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DefaultAuthors from './default-authors'
export default {
  name: 'BooksPage',
  data () {
    return {
      isAdding: true,
      form: {
        id: '',
        title: '',
        isbn: '',
        author: DefaultAuthors[0],
        description: ''
      },
      authors: DefaultAuthors
    }
  },
  created () {
    this.form = { ...this.$store.getters.getBookById(this.$route.params.bookId) }
    this.isAdding = !this.form.id
    this.form.author = this.form.author || DefaultAuthors[0]
  },
  methods: {
    ...mapActions(['addBook', 'editBook']),
    submit () {
      this.isAdding ? this.addBook(this.form) : this.editBook(this.form)
      this.$router.push({name: 'books'})
    }
  }
}
</script>
