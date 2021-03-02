<template>
  <section
    id="hero"
    class="section flex flex-col justify-center items-center text-center"
  >
    <h1 class="font-bold text-3xl">Hello World.</h1>
    <ScrollDown />
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
