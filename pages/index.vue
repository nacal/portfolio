<template>
  <div class="container">
    <Hero />
    <Profile />
    <Works />
  </div>
</template>

<script>
import Hero from '@/components/templates/Hero'
import Profile from '@/components/templates/Profile'
import Works from '@/components/templates/Works'

export default {
  components: {
    Hero,
    Profile,
    Works,
  },
}
</script>
