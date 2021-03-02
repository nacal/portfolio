<template>
  <div class="bg-base">
    <Header class="z-10" />
    <GlobalNav
      class="transform lg:translate-x-0 transition duration-500 z-10"
      :class="[this.$store.state.isOpen ? 'translate-x-0' : 'translate-x-64']"
    />
    <transition name="fade">
      <Overlay v-if="this.$store.state.isOpen" />
    </transition>
    <main
      class="mt-24 lg:mr-64 transition duration-500"
      :class="{ 'overflow-hidden': this.$store.state.isOpen }"
    >
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/organisms/Header'
import GlobalNav from '@/components/organisms/GlobalNav'
import Overlay from '@/components/atoms/Overlay'

export default {
  components: {
    Header,
    GlobalNav,
    Overlay,
  },
}
</script>

<style lang="postcss">
.container {
  @apply mx-auto;
}

.section {
  min-height: calc(100vh - 6rem);
  @apply py-24 flex flex-col justify-center items-center text-center;
}

.flex-center {
  @apply items-center justify-center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
