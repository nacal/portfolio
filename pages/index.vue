<template>
  <div class="container">
    <Hero />
    <Profile />
    <Works />
    <Links />
  </div>
</template>

<script>
import Hero from '@/components/templates/Hero'
import Profile from '@/components/templates/Profile'
import Works from '@/components/templates/Works'
import Links from '@/components/templates/Links'

export default {
  components: {
    Hero,
    Profile,
    Works,
    Links,
  },
}
</script>
