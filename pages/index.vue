<template>
  <article class="container">
    <Hero />
    <Profile />
    <Works :works="contents" />
    <Links />
  </article>
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
  async asyncData(content) {
    const { data } = await axios.get(content.env.URL, {
      headers: { 'X-API-KEY': content.env.apiKey },
    })
    return data
  },
}
</script>
