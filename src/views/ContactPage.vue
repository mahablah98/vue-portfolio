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
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}
.contact-intro {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
}
.dark-mode {
  background-color: #7184a6;
  color: #fff;
}
.dark-mode .contact-intro {
  color: #fff;
}
</style>
