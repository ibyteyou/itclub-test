<template lang="pug">
screen-page(transition-name="slide-left-right")
  header
    button-back(@click="close")
    span New Contact
  input-label First name
  input.mb-10(v-model="form.firstName")
  input-label Last name
  input.mb-10(v-model="form.lastName")
  input-label Email
  input.mb-10(v-model="form.email")
  button-submit(:disabled="!newContact" @submit="save") Save
</template>

<script>
  import Store from '../store.js'

  function defaultForm () {
    return {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  export default {
    name: 'PageAddContact',
    data: () => ({
      form: Store.page === 'contact' && Store.adding ? Store.activeForm : defaultForm()
    }),
    computed: {
      newContact () {
        const { firstName, lastName, email } = this.form
        let result = ''
        if (firstName) result += `${firstName} `
        if (lastName) result += `${lastName} `
        if (email) result += email

        return result.trim()
      }
    },
    methods: {
      close () {
        this.$emit('close')
      },
      reset () {
        this.form.firstName = ''
        this.form.lastName = ''
        this.form.email = ''
      },
      save () {
        this.$emit('save', this.newContact)
      }
    }
  }
</script>
