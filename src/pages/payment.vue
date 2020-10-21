<template lang="pug">
screen-page
  h1.mb-10 Make a payment
  screen-input(v-model="form.contact" type="contact" @select="form.contact = $event") Select contact
  screen-input(v-model="form.method" type="method" @select="form.method = $event") Select payment method
  input-label Enter amount
  input.mb-10(v-model="form.amount")
  button-submit(:disabled="disabledSubmit" @submit="$emit('pay')") Pay
</template>

<script>
  import clone from '../vendor/clone'
  import Store from '../store'
  import DeadEvent from '../deadEvent.js'

  window.Store = Store

  const defaultForm = () => ({
    contact: null,
    method: null,
    amount: null
  })

  export default {
    name: 'PagePayment',
    data: () => ({
      form: Store.paymentForm || defaultForm()
    }),
    computed: {
      disabledSubmit () {
        return !this.form.contact || !this.form.method || !this.form.amount
      }
    },
    methods: {
      reset () {
        this.form = defaultForm()
      },
      pay () {
        this.$emit('pay', clone(this.form))
      }
    },
    mounted () {
      window.addEventListener(DeadEvent, () => {
        if (Object.keys(this.form).some(i => this.form[i])) {
          Store.paymentForm = this.form
          Store.save()
        }
      })
    }
  }
</script>
