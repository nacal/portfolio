<template>
  <section id="links" class="section relative">
    <Title title="links" />
    <div class="w-full h-main flex flex-col flex-center absolute top-0">
      <ul class="flex flex-col">
        <li v-for="(link, index) in links" :key="index" class="py-4">
          <a
            :href="link.link"
            target="blank"
            class="flex hover:text-secondary transision duration-500"
          >
            <template v-if="link.title === 'Twitter'">
              <TwitterIcon />
            </template>
            <template v-else-if="link.title === 'GitHub'">
              <GitHubIcon />
            </template>
            <template v-else-if="link.title === 'NKTech'">
              <NKTechIcon />
            </template>
            <p class="ml-4">{{ link.alt }}</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Title from '@/components/atoms/Title'
import TwitterIcon from '@/components/icons/TwitterIcon'
import GitHubIcon from '@/components/icons/GitHubIcon'
import NKTechIcon from '@/components/icons/NKTechIcon'

export default {
  components: {
    Title,
    TwitterIcon,
    GitHubIcon,
    NKTechIcon,
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
