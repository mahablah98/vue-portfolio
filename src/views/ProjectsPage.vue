<template>
  <div class="projects-container" :class="{ 'dark': isDarkMode }">
    <h2 class="text-2xl font-bold mb-6">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <h3 class="text-lg font-semibold mb-2">{{ project.title }}</h3>
        <p class="text-sm mb-4">{{ project.description }}</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="tech-tag">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  props: ['isDarkMode'],
  data() {
    return {
      projects: [
        {
          title: 'Automated Document Library System',
          description: 'Created an automated document library system for projects in SharePoint Online using Power Automate',
          technologies: ['SharePoint Online', 'Power Automate']
        },
        {
          title: 'Custom SharePoint Grids',
          description: 'Created custom grids to display SharePoint list data using KendoUI',
          technologies: ['SharePoint', 'KendoUI', 'JavaScript']
        },
        {
          title: 'Jira Server to Cloud Migration',
          description: 'Migrated Jira Server to Jira Cloud',
          technologies: ['Jira Server', 'Jira Cloud', 'Migration']
        },
        {
          title: 'SharePoint Migration',
          description: 'Migrated 22 applications based on SharePoint 2013 to SharePoint 2019',
          technologies: ['SharePoint 2013', 'SharePoint 2019', 'Migration', "SharePoint Designer", "ShareGate", "PowerShell"]
        },
        {
          title: 'Notes Migration to Mendix & Co.',
          description: 'Decommissioned and migrated notes applications to platforms like SharePoint, Mendix etc.',
          technologies: ['HCL Notes', 'Mendix', 'Administration']
        },
        {
          title: 'Client-side SharePoint webpart with Vue.js',
          description: 'Customized and further developed an application for the basketball Ulm team to track\n' +
              'players (teams and contact info) and progress (statistics, improvements etc.)',
          technologies: ['SharePoint Online', 'Vue.js', 'HTML', 'CSS', 'JavaScript']
        },
        {
          title: 'Creation and ustomization of numerous Jira projects',
          description: 'Customized issue types, workflows, schemes, permissions etc. for numerous Jira projects',
          technologies: ['Atlassian', 'Jira Cloud', 'User management', 'Workflow', 'Add-Ons']
        },
        {
          title: 'Mass-update of list data using PowerShell',
          description: 'Wrote several PowerShell scripts to update site settings, list data, permission etc. on SharePoint Online',
          technologies: ['PowerShell', 'PnP', 'Scripting', 'SharePoint', 'Permissions']
        },
      ]
    }
  }
}
</script>

<style scoped>
.projects-container {
  @apply max-w-4xl mx-auto p-6;
}
.project-card {
  @apply bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105;
}
.tech-tag {
  @apply bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full;
}

 .dark {
   @apply text-gray-100;
 }

.dark .project-card {
  @apply bg-gray-800;
}

.dark .tech-tag {
  @apply bg-blue-900 text-blue-200;
}
</style>