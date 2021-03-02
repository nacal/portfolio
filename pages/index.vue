<template>
  <div class="container">
    <Hero />
    <Profile />
  </div>
</template>

<script>
import Hero from '@/components/templates/Hero'
import Profile from '@/components/templates/Profile'

export default {
  components: {
    Hero,
    Profile,
  },
}
</script>
