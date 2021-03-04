<template>
  <section id="works" class="section">
    <Title title="works" />
    <div class="grid gap-16 grid-col-fit max-w-full">
      <Card
        v-for="(work, index) in works"
        :key="index"
        :title="work.title"
        :description="work.description"
        :tags="work.tags"
        :image="work.image.url"
        :alt="work.imageAlt"
        :github-link="work.githubLink"
        :site-link="work.siteLink"
      />
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
  props: {
    works: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.grid-col-fit {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
