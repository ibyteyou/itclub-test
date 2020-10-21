<template lang="pug">
transition(:name="transitionName" mode="out-in")
  div.screen-page
    slot
</template>

<script>
  export default {
    name: 'ScreenPage',
    props: {
      transitionName: {
        type: String,
        default: 'fade'
      }
    }
  }
</script>

<style lang="sass">
.screen-page
  position: fixed
  top: 0
  left: 0
  min-height: 100%
  width: 100vw
  padding: 1em
  background-color: #fff
  text-align: center
  min-height: -webkit-fill-available !important
  max-height: 100%
  overflow-y: auto
  overflow-x: hidden
  z-index: 1
  header
    position: relative
    margin-left: -1em
    margin-top: -1em
    height: 3em
    line-height: 3.25em
    width: 100vw
    font-size: 24px
    border-bottom: 1px solid #000
    margin-bottom: 1rem
</style>
