<template lang="pug">
screen-page
  img.mt-5.m-auto(class="w-6/12" src="../assets/checkmark.png")
  h1.text-4xl.mb-10 Payment completed successfully
  button-submit(v-bind="$attrs" @submit="$emit('more')") Make another one
</template>

<script>
  export default {
    name: 'PageSuccess'
  }
</script>
