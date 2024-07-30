<template>
  <div class="skills-page" :class="{ 'dark-mode': isDarkMode }">
    <section class="overview">
      <h2 class="section-title">Overview</h2>
      <p class="overview-text">
        As a seasoned consultant, I have collaborated with notable clients including Husqvarna, Daimler, Hensoldt AG, Schwenk, and Union Tank Eckstein GmbH. My professional journey has spanned various domains, beginning with administration and 1st Level Support, progressing to app and web development, 2nd/3rd Level Support, and process automation using Power Automate. Currently, I specialize in project management within the M365 ecosystem. While my primary focus is on consulting, I maintain a passion for coding and look forward to developing innovative applications in the near future.
      </p>
    </section>
    <section class="technology">
      <h2 class="section-title">Technology</h2>
      <SkillsDisplay :skillTypes="types" />
    </section>
  </div>
</template>

<script>
import SkillsDisplay from '@/components/SkillsDisplay.vue';

export default {
  name: 'SkillsPage',
  components: {SkillsDisplay},
  props: ['isDarkMode'],
  data() {
    return {
      types: ['General', 'Frontend', 'Backend']
    }
  }
}
</script>

<style scoped>
.skills-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-decoration: underline;
  text-underline-offset: 8px;
}
.overview-text {
  font-size: 1rem;
  line-height: 1.6;
}
.technology {
  margin-top: 2rem;
}
@media (min-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .overview-text {
    font-size: 1.125rem;
  }
}
.dark-mode {
  color: #ffffff;
  background-color: #1a1a1a;
}
.dark-mode .section-title {
  color: #ffffff;
}
</style>
