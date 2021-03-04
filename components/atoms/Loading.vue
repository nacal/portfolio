<template>
  <div>
    <transition name="loading">
      <div v-show="loading" class="fixed inset-0 bg-base z-50" />
    </transition>
    <transition name="loading-title">
      <div v-show="loadingTitle" class="fixed flex flex-center inset-0 z-50">
        <h1 class="text-white text-2xl font-extralight tracking-widest">
          nkthkr portfolio.
        </h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      loading: true,
      loadingTitle: false,
    }
  },
  mounted() {
    this.loadingTitle = true
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loading = false
        this.loadingTitle = false
      }, 3000)
    })
  },
}
</script>

<style scoped>
.loading-leave-active {
  animation: loading 3s;

  @media (min-width: 1024px) {
    animation: lg-loading 3s;
  }
}

.loading-title-enter-active,
.loading-title-leave-active {
  transition: all 1s ease-out;
}

.loading-title-enter,
.loading-title-leave-to {
  opacity: 0;
}

@keyframes loading {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  33% {
    opacity: 1;
    transform: translate3d(0, 6rem, 0);
  }
  66% {
    opacity: 1;
    transform: translate3d(0, 6rem, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 6rem, 0);
  }
}

@keyframes lg-loading {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  33% {
    opacity: 1;
    transform: translate3d(0, 6rem, 0);
  }
  66% {
    opacity: 1;
    transform: translate3d(-16rem, 6rem, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(-16rem, 6rem, 0);
  }
}
</style>
