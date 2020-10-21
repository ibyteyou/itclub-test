<template lang="pug">
#page-payment
  page-payment(ref="payment" transition-name="slide-right-left" @pay="page = 'success'")
  page-success(v-show="page === 'success'" transition-name="fade-bottom-top" @more="more")
</template>

<script>
import PagePayment from './pages/payment.vue'
import PageSuccess from './pages/success.vue'

export default {
  name: 'Payment',
  data: () => ({
    page: 'main'
  }),
  components: {
    PagePayment, PageSuccess
  },
  methods: {
    more () {
      this.$refs.payment.reset()
      this.page = 'main'
    },
    pay () {
      this.page = 'success'
    }
  }
}
</script>

<style lang="sass">
  *:focus
    outline: 0 !important
  html
    body
      margin: 0
      padding: 0
      #app
        font-family: Avenir, Helvetica, Arial, sans-serif
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        text-align: center
        color: #2c3e50
      h1
        font-size: 24px
      input,
      button
        box-sizing: border-box
        border: 1px solid #000
      input
        padding: 4px
        font-size: 24px
        margin-bottom: 1.5rem
        width: 80vw
        -webkit-appearance: none
        border-radius: 0
      button
        font-size: 20px
        padding: .5em 1.5em
.fade-bottom-top-enter-active,
.fade-bottom-top-leave-active,
.slide-left-right-enter-active,
.slide-left-right-leave-active
  transition: all .175s ease-out
.fade-bottom-top-enter-from
  opacity: 0
  transform: translateY(100vh)
.fade-bottom-top-enter-to
  opacity: 1
  transform: translateY(0)
.fade-bottom-top-leave-to
  opacity: 0
  transform: translateY(100vh)
.slide-left-right-enter-from
  transform: translateX(100vw)
.slide-left-right-enter-to
  transform: translateX(0)
.slide-left-right-leave-to
  transform: translateX(100vw)
</style>
