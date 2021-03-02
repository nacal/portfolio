<template>
  <header class="bg-primary h-24 fixed w-full top-0">
    <div class="w-full h-full px-4 lg:px-8 flex items-center justify-between">
      <h1
        class="text-white text-2xl font-extralight tracking-widest"
        @click="close()"
      >
        <nuxt-link v-scroll-to="'#hero'" to>nkthkr portfolio.</nuxt-link>
      </h1>
      <Hamburger :open="isOpen" />
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
import Hamburger from '@/components/atoms/Hamburger'

export default {
  components: { Hamburger },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    ...mapMutations({
      close: 'close',
    }),
  },
}
</script>
