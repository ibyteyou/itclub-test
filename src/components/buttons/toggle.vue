<template lang="pug">
.button-toggle
  button(v-for="v in values", :class="{ 'bg-gray-300': modelValue === v }" @click="$emit('update:modelValue', v)") {{ v }}
</template>

<script>
  export default {
    name: 'ButtonSubmit',
    props: {
      modelValue: String,
      values: Array
    }
  }
</script>

<style lang="sass">
  .button-toggle
    button:not(:first-child)
      border-left: none
</style>
