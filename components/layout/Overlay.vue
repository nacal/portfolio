<template>
  <div
    class="bg-black bg-opacity-50 fixed w-full h-full top-0 right-0 lg:hidden"
    @click="toggle()"
  />
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      toggle: 'toggle',
    }),
  },
}
</script>
