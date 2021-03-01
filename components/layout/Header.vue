<template>
  <header class="bg-primary h-24 fixed w-full top-0">
    <div class="w-full h-full px-4 flex items-center justify-between">
      <h1 class="text-white text-2xl font-extralight tracking-widest">
        nkthkr portfolio.
      </h1>
      <Hamburger :open="isOpen" />
    </div>
  </header>
</template>

<script>
import Hamburger from '../Hamburger.vue'

export default {
  components: { Hamburger },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
