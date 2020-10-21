<template lang="pug">
screen-page#page-methods(transition-name="slide-left-right")
  header
    button-back(@click="close")
    span Select method
    button-add(@click="openAdd")
  h1.mb-10.text-left Credit/debit cards
  commercial-account(v-for="c in cards", v-bind="c")
  h1.mb-10.text-left Bank accounts
  commercial-account(v-for="b in bankAccs", v-bind="b" type="bank")
</template>

<script>
  import CommercialAccount from '../components/commercial-account.vue'
  import parentsHasClass from '../vendor/parentsHasClass.js'

  export default {
    name: 'PageMethods',
    components: {
      CommercialAccount
    },
    data: () => ({
      cards: [{
        name: 'Full name',
        number: '*** 1234',
        date: '05/2'
      }, {
        name: 'Full name',
        number: '*** 1236',
        date: '05/22'
      }],
      bankAccs: [{
        name: 'Account name',
        number: '1234567890',
        date: '123456'
      }]
    }),
    methods: {
      add (value) {
        this[value.type === 'card' ? 'cards' : 'bankAccs'].push(value)
      },
      anyClickHandler (event) {
        const parentComponent = parentsHasClass(event.target, 'commercial-account')
        if (!parentComponent) return

        const number = parentComponent.getAttribute('data-value')
        if (number === null) return

        this.$emit('select', number)
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
