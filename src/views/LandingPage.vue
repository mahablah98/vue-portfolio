<template>
  <div class="landing-container">
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
          💻 Focused on web development and administration.<br />
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
          <span class="ability">Problem-Solving</span>
          <span class="ability">Project Management</span>
          <span class="ability">Effectice Communication</span>
          <span class="ability">Adaptability</span>
          <span class="ability">Persistence</span>
          <span class="ability">Teamwork</span>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import TimelineEvents from '../components/TimelineEvents.vue';
import EducationTimeline from '../components/EducationTimeline.vue';

export default {
  name: 'LandingPage',
  components: { TimelineEvents, EducationTimeline }
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
  border: 4px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.header-text h1 {
  font-size: 3.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}
.header-text h3 {
  font-size: 1.8rem;
  color: #34495e;
}
.content section {
  margin-bottom: 3rem;
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.content h2 {
  font-size: 2.2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}
.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #34495e;
}
.intro-text a {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s;
}
.intro-text a:hover {
  color: #2980b9;
}
.abilities-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.ability {
  background-color: #3498db;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 1rem;
  color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
}
.ability:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
