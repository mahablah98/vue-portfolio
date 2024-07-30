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
          <p class="timeline-title">{{ event.Degree }}</p>
          <p class="timeline-institution">{{ event.Institution }}</p>
          <p class="timeline-description">{{ event.Description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventData from './EducationTimeline.json';

export default {
  name: 'EducationTimeline',
  data() {
    return {
      eventdata: EventData,
    };
  },
};
</script>

<style scoped>
.timeline-container {
  position: relative;
  padding: 20px 0;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
  border-left: 2px solid #4a5568;
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
  background-color: #4a5568;
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
  color: #4a5568;
}

.timeline-title {
  margin: 5px 0;
  font-size: 1.2rem;
  color: #2d3748;
}

.timeline-institution,
.timeline-description {
  color: #4a5568;
}

:deep(.dark-mode) .timeline {
  border-left-color: #718096;
}

:deep(.dark-mode) .timeline-content {
  background-color: #2d3748;
  color: #e2e8f0;
}

:deep(.dark-mode) .timeline-date,
:deep(.dark-mode) .timeline-title,
:deep(.dark-mode) .timeline-institution,
:deep(.dark-mode) .timeline-description {
  color: #e2e8f0;
}

:deep(.dark-mode) .timeline-dot {
  background-color: #718096;
  box-shadow: 0 0 0 4px #2d3748;
}
</style>
