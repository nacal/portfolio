<template>
  <div class="container">
    <h1 class="font-bold text-3xl">Hello World.</h1>
    <ScrollDown />
  </div>
</template>

<script>
import ScrollDown from '@/components/atoms/ScrollDown'

export default {
  components: {
    ScrollDown,
  },
}
</script>

<style lang="postcss">
.container {
  min-height: calc(100vh - 6rem);
  @apply flex flex-col justify-center items-center text-center mx-auto;
}
</style>
