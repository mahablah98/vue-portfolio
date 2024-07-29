<template>
  <div class="timeline-container">
    <div class="timeline">
      <div
          class="timeline-event"
          v-for="(event, index) in educationData"
          :key="index"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <p class="timeline-date">{{ event.Timeframe }}</p>
          <p class="timeline-title">{{ event.Degree }}</p>
          <p class="timeline-institution">{{ event.Institution }}</p>
          <p class="timeline-description">{{ event.Description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EducationData from './EducationTimeline.json';

export default {
  name: 'EducationTimeline',
  data() {
    return {
      educationData: EducationData,
    };
  },
};
</script>

<style scoped>
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

.timeline-institution {
  margin: 5px 0;
  font-size: 1rem;
  color: #555;
}

.timeline-description {
  margin: 5px 0;
  font-size: 1rem;
  color: #777;
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

  .timeline-institution {
    font-size: 1rem;
  }

  .timeline-description {
    font-size: 0.9rem;
  }
}
</style>
