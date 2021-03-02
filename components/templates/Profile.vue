<template>
  <section id="profile" class="section relative">
    <Title title="profile" />
    <div class="w-full h-main mt-24 flex flex-center absolute top-0">
      <ProfileCard />
    </div>
  </section>
</template>

<script>
import Title from '@/components/atoms/Title'
import ProfileCard from '@/components/atoms/ProfileCard'

export default {
  components: {
    Title,
    ProfileCard,
  },
}
</script>
