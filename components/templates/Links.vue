<template>
  <section id="links" class="section relative">
    <Title title="links" />
    <div class="flex flex-col flex-center min-h-main">
      <ul class="flex flex-col">
        <li v-for="(link, index) in links" :key="index" class="py-4">
          <a
            :href="link.link"
            target="blank"
            class="flex hover:text-secondary transision duration-500"
          >
            <template v-if="link.title === 'Twitter'">
              <TwitterIcon role="img" aria-label="Twitterのアイコン画像" />
            </template>
            <template v-else-if="link.title === 'GitHub'">
              <GitHubIcon role="img" aria-label="GitHubのアイコン画像" />
            </template>
            <template v-else-if="link.title === 'NKTech'">
              <NKTechIcon role="img" aria-label="NKTechのアイコン画像" />
            </template>
            <p class="ml-4">{{ link.alt }}</p>
          </a>
        </li>
      </ul>
      <p class="mt-12 sm:mt-24 text-xl font-bold">Thanks for watching.</p>
      <ScrollUp role="button" aria-label="上向きの矢印" />
    </div>
  </section>
</template>

<script>
import Title from '@/components/atoms/Title'
import TwitterIcon from '@/components/icons/TwitterIcon'
import GitHubIcon from '@/components/icons/GitHubIcon'
import NKTechIcon from '@/components/icons/NKTechIcon'
import ScrollUp from '@/components/atoms/ScrollUp'

export default {
  components: {
    Title,
    TwitterIcon,
    GitHubIcon,
    NKTechIcon,
    ScrollUp,
  },
  data() {
    return {
      links: [
        {
          title: 'Twitter',
          alt: 'nkthkr_',
          link: 'https://twitter.com/nkthkr_',
        },
        {
          title: 'GitHub',
          alt: 'nkthkr',
          link: 'https://github.com/nkthkr',
        },
        {
          title: 'NKTech',
          alt: 'NKTech',
          link: 'https://nktech.jp/',
        },
      ],
    }
  },
}
</script>
