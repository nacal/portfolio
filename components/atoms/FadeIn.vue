<template>
  <div :class="{ fadeIn: visible }" class="w-full">
    <slot v-show="visible"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        const top = this.$el.getBoundingClientRect().top + 96
        this.visible = top < window.innerHeight + 200
      }
    },
  },
}
</script>

<style>
.fadeIn {
  animation: fadeIn 2s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
