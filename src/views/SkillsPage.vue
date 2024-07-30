<template>
  <div class="skills-page" :class="{ 'dark-mode': isDarkMode }">
    <section class="overview">
      <h2 class="section-title">Overview</h2>
      <p class="overview-text">
        As a consultant, I have worked with several costumers by now, including Husqvarna, Daimler, Hensoldt AG,
        Schwenk, Union Tank Eckstein GmbH etc. My work covered several areas: I started with administration and
        basic 1st Level Support. Then, it shifted into (app/web) development, 2nd/3rd Level Support,
        automating processes using Power Automate, and  now I focus on project management in M365.
        However, I do love coding (even though I'm not a professional developer), and I will try to build some neat applications soon.
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
    text-indent: 2rem;
  }
}

@media (min-width: 1024px) {
  .overview-text {
    text-indent: 4rem;
  }
}

.dark-mode {
  color: #ffffff;
  background-color: #2d3748;
}

.dark-mode .section-title {
  color: #ffffff;
}
</style>
