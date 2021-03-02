<template>
  <div class="w-12 h-12 relative flex flex-center lg:hidden">
    <input
      id="menu"
      type="checkbox"
      class="w-full h-full absolute block rounded-full bg-secondary appearance-none cursor-pointer"
      @change="toggle()"
    />
    <label for="menu" class="absolute block cursor-pointer">
      <transition name="fade" mode="out-in">
        <MenuIcon v-if="this.$store.state.isOpen === false" />
        <MenuCloseIcon v-else />
      </transition>
    </label>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import MenuIcon from '@/components/icons/MenuIcon'
import MenuCloseIcon from '@/components/icons/MenuCloseIcon'

export default {
  components: { MenuIcon, MenuCloseIcon },
  methods: {
    ...mapMutations({
      toggle: 'toggle',
    }),
  },
}
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
