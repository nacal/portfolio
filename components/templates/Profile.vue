<template>
  <section id="profile" class="section">
    <Title title="profile" />
    <div class="flex flex-center min-h-main">
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
