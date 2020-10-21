<template lang="pug">
div.p-3.commercial-account.border.border-black
  div.border.border-black.h-8.w-8(v-if="type === 'card'")
  div.card-dot.border.border-black.h-2.w-2.rounded-full.bg-black.absolute
  div.card-dot.card-dot-2.border.border-black.h-2.w-2.rounded-full.bg-black.absolute
  div.card-dot.card-dot-3.border.border-black.h-2.w-2.rounded-full.bg-black.absolute
  p {{ name }}
  p.num-and-date(v-if="type === 'card'")
    span {{ number }}
    span {{ date }}
  template(v-else-if="type === 'bank'")
    p {{ number }}
    p.text-right {{ date }}
</template>

<script>
  export default {
    name: 'CommercialAccount',
    props: {
      name: String,
      number: String,
      date: String,
      type: {
        type: String,
        default: 'card'
      }
    }
  }
</script>

<style lang="sass">
  .commercial-account
    position: relative
    width: 250px
    height: 125px
    line-height: 38px
    margin-bottom: 1.5rem
    cursor: pointer
    text-align: left
    .card-dot
      top: .5em
      right: .5em
    .card-dot-2
      top: 1.125em
    .card-dot-3
      top: 1.775em
    .num-and-date
      display: flex
      justify-content: space-between
</style>
