<template>
  <section id="works" class="section">
    <Title title="works" />
    <div class="grid gap-16 grid-col-fit max-w-full">
      <Card v-for="card in 10" :key="card" />
    </div>
  </section>
</template>

<script>
import Title from '@/components/atoms/Title'
import Card from '@/components/atoms/Card'

export default {
  components: {
    Title,
    Card,
  },
}
</script>

<style lang="postcss" scoped>
.grid-col-fit {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
