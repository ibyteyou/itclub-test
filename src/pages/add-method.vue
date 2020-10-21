<template lang="pug">
screen-page(transition-name="slide-left-right")
  header
    button-back(@click="close")
    span New Card
  button-toggle(v-model="form.type", :values="commercialModes")
  input-label {{ card ? 'Full' : 'Account' }} name
  input.mb-10(v-model="form.name")
  input-label  {{ card ? 'Card' : 'Account' }} number
  input.mb-10(v-model="form.number")
  input-label {{ card ? 'Expiry date' : 'BSB' }}
  input.mb-10(v-model="form.date")
  button-submit(:disabled="disabled" @submit="save") Save
</template>

<script>
  import clone from '../vendor/clone.js'
  import ButtonToggle from '../components/buttons/toggle.vue'
  import Store from '../store.js'

  const commercialModes = ['card', 'bankAcc']
  function defaultForm () {
    return {
      name: '',
      number: '',
      date: '',
      type: commercialModes[0]
    }
  }

  export default {
    name: 'PageAddMethod',
    components: {
      ButtonToggle
    },
    data: () => ({
      form: Store.page === 'method' && Store.adding ? Store.activeForm : defaultForm(),
      commercialModes
    }),
    computed: {
      disabled () {
        return !this.form.name || !this.form.number || !this.form.date
      },
      card () {
        return this.form.type === 'card'
      }
    },
    watch: {
      'form.type' () {
        this.reset()
      }
    },
    methods: {
      close () {
        this.reset(true)
        this.$emit('close')
      },
      reset (withType) {
        this.form.name = ''
        this.form.number = ''
        this.form.date = ''
        if (withType) {
          this.form.type = commercialModes[0]
        }
      },
      save () {
        this.$emit('save', clone(this.form))
        this.reset(true)
      }
    }
  }
</script>
