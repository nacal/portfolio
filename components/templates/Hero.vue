<template>
  <section
    id="hero"
    class="section flex flex-col justify-center items-center text-center"
  >
    <h1 class="font-bold text-3xl">Hello World.</h1>
    <nuxt-link v-scroll-to="'#profile'" to>
      <ScrollDown role="button" aria-label="下向きの矢印" />
    </nuxt-link>
  </section>
</template>

<script>
import ScrollDown from '@/components/atoms/ScrollDown'

export default {
  components: {
    ScrollDown,
  },
}
</script>
