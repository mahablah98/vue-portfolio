<template>
  <div class="timeline-container">
    <div class="timeline">
      <div
          class="timeline-event"
          v-for="(event, index) in eventdata"
          :key="index"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <p class="timeline-date">{{ event.Timeframe }}</p>
          <p class="timeline-title">{{ event.Title }} at {{ event.Company }}</p>
          <ul class="timeline-description" v-if="event.Description">
            <li v-for="(item, i) in event.Description" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventData from './TimelineEvents.json';

export default {
  name: 'TimelineEvents',
  data() {
    return {
      eventdata: EventData.map(event => ({
        ...event,
        Description: this.getDescription(event.Title)
      })),
    };
  },
  methods: {
    getDescription(title) {
      const descriptions = {
        "Senior (M365) Consultant": [
          "Collaborated with several customers (Hensoldt AG, scanplus, GARDENA, Daimler etc.)",
          "Project management & development (SPFx, JS, Vue.js, KendoUI)",
          "SharePoint Online Consulting",
          "PowerPlatform (Power Automate, Power Apps, PowerBI, Azure Logic Apps)",
          "Jira/Confluence/Bitbucket Administration and migration for Union Tank Eckstein GmbH",
        ],
        "Junior (M365) Consultant": [
          "SharePoint Consulting (SP On-Prem 2013/2016/2019)",
          "SharePoint migration (On-Prem -> Cloud)",
          "HCL Notes Support for Husqvarna using ServiceNow and HCL Domino Notes/Designer/Admin",
        ],
        "Working Student Sales Reporting Tool": [
          "Person in charge of a major sales reporting tool (with approx. 500 users) at Hensoldt",
          "Independent maintenance of sales reporting tool with admin functionality (user support, technical documentation, bug fixing and change requests)",
          "Project management"
        ]
      };
      return descriptions[title] || [];
    }
  }
};
</script>

<style scoped>

.timeline-description {
  margin-top: 10px;
  padding-left: 20px;
}

.timeline-description li {
  margin-bottom: 5px;
}

.timeline-container {
  position: relative;
  padding: 20px 0;
  background-color: #f9f9f9;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
  border-left: 2px solid #007bff; /* Timeline line color */
}

.timeline-event {
  position: relative;
  margin-bottom: 50px;
  padding-left: 40px;
}

.timeline-dot {
  position: absolute;
  left: -12px;
  top: 0;
  width: 24px;
  height: 24px;
  background-color: #007bff; /* Timeline dot color */
  border-radius: 50%;
  box-shadow: 0 0 0 4px #fff;
}

.timeline-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-10px);
}

.timeline-date {
  font-weight: bold;
  font-size: 1.1rem;
  color: #333;
}

.timeline-title {
  margin: 5px 0;
  font-size: 1.2rem;
  color: #007bff;
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 20px;
  }

  .timeline-event {
    padding-left: 20px;
  }

  .timeline-dot {
    left: -10px;
  }

  .timeline-content {
    padding: 15px;
  }

  .timeline-date {
    font-size: 1rem;
  }

  .timeline-title {
    font-size: 1.1rem;
  }
}
</style>
