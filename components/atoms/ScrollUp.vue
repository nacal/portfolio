<template>
  <div class="mt-4 animate-scroll">
    <nuxt-link v-scroll-to="'#hero'" to>
      <ScrollDownIcon class="transform rotate-180 scale-75" />
    </nuxt-link>
  </div>
</template>

<script>
import ScrollDownIcon from '@/components/icons/ScrollDownIcon'

export default {
  components: {
    ScrollDownIcon,
  },
}
</script>

<style lang="postcss" scoped>
.animate-scroll {
  animation: scroll 2.5s infinite;
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateY(24px);
  }

  100% {
    opacity: 0;
    transform: translateY(0);
  }
}
</style>
