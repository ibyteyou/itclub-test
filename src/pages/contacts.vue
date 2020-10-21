<template lang="pug">
screen-page#page-contacts(transition-name="slide-left-right")
  header
    button-back(@click="close")
    span Select contact
    button-add(@click="openAdd")
  div.contact.border.border-black(v-for="c in contacts", :data-value="c") {{ c }}
</template>

<script>
  export default {
    name: 'PageContacts',
    data: () => ({
      contacts: Array.from(Array(4).keys()).map(i => `contact #${i + 1}`)
    }),
    methods: {
      add (value) {
        this.contacts.push(value)
      },
      anyClickHandler (event) {
        if (!event.target.classList.contains('contact')) return

        const value = event.target.getAttribute('data-value')
        if (value === null) return

        this.$emit('select', value)
      },
      close () {
        this.$emit('close')
      },
      openAdd () {
        this.$emit('open-add')
      }
    },
    mounted () {
      this.$el.addEventListener('click', this.anyClickHandler)
    },
    beforeUnmount () {
      this.$el.removeEventListener('click', this.anyClickHandler)
    }
  }
</script>

<style lang="sass">
  .contact
    width: 80vw
    height: 48px
    line-height: 48px
    margin: auto
    margin-bottom: 1.5rem
    cursor: pointer
</style>
