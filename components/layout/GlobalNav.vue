<template>
  <nav class="h-screen w-64 fixed right-0 bg-primary">
    <div class="w-32 h-32 mx-auto border flex flex-center mt-8">
      <h1 class="text-center text-white text-2xl">Nav</h1>
    </div>
    <ul>
      <li
        v-for="(item, index) in nav"
        :key="index"
        class="text-center text-white text-2xl mt-16"
      >
        <nuxt-link :to="'#' + item">{{ item }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      nav: ['profile', 'works', 'others', 'hoge', 'hoge', 'hoge'],
    }
  },
}
</script>
