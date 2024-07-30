<template>
  <div class="contact-container" :class="{ 'dark-mode': isDarkMode }">
    <p class="contact-intro">
      Please use the submission form for business inquiries.
    </p>
    <br>
    <ContactForm :isDarkMode="isDarkMode" />
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';

export default {
  name: 'ContactPage',
  components: {ContactForm},
  props: ['isDarkMode'],
};
</script>

<style scoped>
.contact-container {
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}
.contact-intro {
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
}
.dark-mode {
  background-color: #1a1a1a;
  color: #ffffff;
}
.dark-mode .contact-intro {
  color: #ffffff;
}
@media (min-width: 768px) {
  .contact-container {
    max-width: 600px;
    padding: 2rem;
  }
  .contact-intro {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
}
</style>
