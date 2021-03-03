<template>
  <div class="container">
    <Hero />
    <Profile />
    <Works :works="contents" />
    <Links />
  </div>
</template>

<script>
import axios from 'axios'
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
  async asyncData() {
    const { data } = await axios.get(
      'https://nkthkr-portfolio.microcms.io/api/v1/works',
      {
        headers: { 'X-API-KEY': '5afeda0e-860f-40ba-b45d-24135ef890ae' },
      }
    )
    return data
  },
}
</script>
