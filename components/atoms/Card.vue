<template>
  <section class="w-96 max-w-full rounded shadow overflow-hidden my-2 mx-auto">
    <img class="w-full h-56 object-cover" :src="image" :alt="alt" />
    <div class="px-6 py-4 bg-base">
      <h1 class="font-bold text-xl mb-2">{{ title }}</h1>
      <p class="h-10 text-secondary text-sm">{{ description }}</p>
    </div>
    <div class="h-20 px-6 py-4 bg-base text-sm flex flex-wrap">
      <span v-for="(tag, index) in tags" :key="index" class="mr-4">{{
        tag.tag
      }}</span>
    </div>
    <div class="bg-base flex text-center shadow">
      <p
        v-if="githubLink != null"
        class="w-1/2 h-full py-2 text-sm shadow hover:bg-accent transition duration-500"
      >
        <a :href="githubLink" class="block" target="blank">Code</a>
      </p>
      <p v-else class="w-1/2 h-full py-2 text-sm text-secondary shadow">Code</p>

      <p
        v-if="siteLink != null"
        class="w-1/2 h-full py-2 text-sm shadow hover:bg-accent transition duration-500"
      >
        <a :href="siteLink" class="block" target="blank">Visit</a>
      </p>
      <p v-else class="w-1/2 h-full py-2 text-sm text-secondary shadow">
        Visit
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
      default: null,
    },
    siteLink: {
      type: String,
      default: null,
    },
  },
}
</script>
