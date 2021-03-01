<template>
  <div class="bg-base">
    <Header />
    <GlobalNav class="transform translate-x-64 lg:translate-x-0" />
    <main class="mt-24 lg:mr-64">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '../components/layout/Header'
import GlobalNav from '../components/layout/GlobalNav'

export default {
  components: {
    Header,
    GlobalNav,
  },
}
</script>

<style lang="postcss">
.flex-center {
  @apply items-center justify-center;
}
</style>
