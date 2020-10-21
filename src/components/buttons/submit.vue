<template lang="pug">
footer.button-submit.bg-white.absolute.inset-x-0.bottom-0.m-auto.pt-10.pb-10
  button(:class="{ 'text-gray-500 border-gray-500': disabled }", :disabled="disabled" @click="$emit('submit')")
    slot
</template>

<script>
  export default {
    name: 'ButtonSubmit',
    props: {
      disabled: Boolean
    }
  }
</script>

<style lang="sass">
  .button-submit button
    width: 80vw
</style>
