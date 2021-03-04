<template>
  <h1 :title="title" class="mx-auto mb-8 lg:mb-16 flex flex-center">
    <span class="text-2xl">{{ title }}</span>
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title',
    },
  },
}
</script>
