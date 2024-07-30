<template>
  <div class="landing-container" :class="{ 'dark-mode': isDarkMode }">
    <header class="header">
      <img src="@/assets/profilePic.png" alt="Mahatir Said" class="profile-pic" />
      <div class="header-text">
        <h1>Mahatir Said</h1>
        <h3>Senior M365 Consultant</h3>
      </div>
    </header>
    <main class="content">
      <section class="intro-section">
        <h2>Hi there!</h2>
        <p class="intro-text">
          👋🏼 I'm Maha, a dedicated M365 Consultant/Developer with 5+ years in <a href="https://www.microsoft.com/de-de/microsoft-365/sharepoint/collaboration" target="_blank">SharePoint</a> and M365.<br />
          🎓 Computer Science (B.Sc.) graduate from <a href="https://www.uni-ulm.de/en/" target="_blank">Ulm University</a> and <a href="https://www.gu.se/en" target="_blank">Gothenburg University</a>.<br />
          ☝ I enhance SharePoint environments with custom applications and automation.<br />
          📍 Based in Ulm, Germany.<br />
          👨🏻‍💻 Senior Consultant at <a href="https://camdere.de/" target="_blank">Camdere Consulting GmbH</a>.<br />
          💻 Enthusiastic hobby web developer.<br />
          📚 Preparing for <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/?practice-assessment-type=certification" target="_blank">AZ-104</a> and <a href="https://university.atlassian.com/student/page/832603-acp-120-jira-administration-for-cloud-exam" target="_blank">ACP-120</a> certifications.<br />
          🎯 Aiming to build useful and interesting web applications.
        </p>
      </section>
      <section class="experience-section">
        <h2>Job Experience</h2>
        <TimelineEvents />
      </section>
      <section class="education-section">
        <h2>Educational Background</h2>
        <EducationTimeline />
      </section>
      <section class="abilities-section">
        <h2>Tools/Skills</h2>
        <div class="abilities-container">
          <span v-for="(tag, index) in uniqueTags" :key="index" class="ability">
            {{ tag }}
          </span>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import TimelineEvents from '../components/TimelineEvents.vue';
import EducationTimeline from '../components/EducationTimeline.vue';
import EventData from '../components/TimelineEvents.json';

export default {
  name: 'LandingPage',
  components: { TimelineEvents, EducationTimeline },
  props: ['isDarkMode'],
  computed: {
    uniqueTags() {
      const allTags = this.timelineEvents.flatMap(event => event.Tags);
      return [...new Set(allTags)].sort();
    }
  },
  data() {
    return {
      timelineEvents: EventData
    }
  }
}
</script>


<style scoped>
.landing-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 2rem;
  border: 4px solid #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.header-text h1 {
  font-size: 3.5rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 0.5rem;
}
.header-text h3 {
  font-size: 1.8rem;
  color: #666666;
}
.content section {
  margin-bottom: 3rem;
  background: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.content h2 {
  font-size: 2.2rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.5rem;
}
.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: inherit;
}

.intro-text a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}

.intro-text a:hover {
  color: #0056b3;
}

.abilities-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.ability {
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 1rem;
  color: #333333;
  transition: transform 0.3s, box-shadow 0.3s;
}
.ability:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.abilities-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
}

.ability {
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  color: #333333;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.ability:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #e0e0e0;
}

@media (max-width: 768px) {
  .abilities-container {
    justify-content: center;
  }

  .ability {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}

.dark-mode .intro-text,
.dark-mode .content section {
  color: #ffffff;
}


.dark-mode .intro-text,
.dark-mode .content section {
  color: #e2e8f0;
}

.dark-mode .intro-text a {
  color: #4fd1c5;
}

.dark-mode .intro-text a:hover {
  color: #81e6d9;
}

.dark-mode .header {
  background: linear-gradient(135deg, #2d3748, #1a202c);
}

.dark-mode .header-text h1,
.dark-mode .header-text h3 {
  color: #f7fafc;
}

.dark-mode .content section {
  background: #2d3748;
}

.dark-mode .content h2 {
  color: #f7fafc;
  border-bottom-color: #4a5568;
}

.dark-mode .ability {
  background-color: #4a5568;
  color: #e2e8f0;
}

.dark-mode .ability:hover {
  background-color: #718096;
}
</style>