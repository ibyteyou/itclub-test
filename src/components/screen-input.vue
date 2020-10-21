<template lang="pug">
div.screen-input
  input-label
    slot
  input(v-model="modelValue" readonly @focus="open")
  component(v-show="selecting", :is="`page-${type}s`" ref="selecting" @open-add="openAdd" @close="close" @select="select")
  component(v-show="adding", :is="`page-add-${type}`" ref="adding" @close="closeAdd" @save="saveAdded")
</template>

<script>
  import PageAddContact from '../pages/add-contact.vue'
  import PageAddMethod from '../pages/add-method.vue'
  import PageContacts from '../pages/contacts.vue'
  import PageMethods from '../pages/methods.vue'
  import Store from '../store.js'
  import DeadEvent from '../deadEvent.js'

  export default {
    name: 'ScreenInput',
    components: {
      PageAddContact, PageAddMethod, PageContacts, PageMethods
    },
    data: ({ type }) => ({
      adding: Store.page === type && Store.adding,
      selecting: Store.page === type
    }),
    props: {
      type: String, // name of page-${component}
      modelValue: String
    },
    methods: {
      close () {
        this.selecting = false
        Store.page = 'main'
      },
      closeAdd () {
        this.adding = false
        Store.adding = false
      },
      openAdd () {
        this.adding = true
        Store.adding = true
      },
      saveAdded (value) {
        this.$refs.selecting.add(value)
        this.closeAdd()
      },
      select (value) {
        this.$emit('select', value)
        this.close()
      },
      open () {
        this.selecting = true
        Store.page = this.type
      }
    },
    mounted () {
      window.addEventListener(DeadEvent, () => {
        if (Store.page === this.type) {
          if (Store.adding && this.$refs.adding.form) {
            Store.save(this.$refs.adding.form)
          } else {
            Store.save()
          }
        }
      })
    }
  }
</script>
