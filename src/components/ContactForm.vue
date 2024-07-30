<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <div class="form-group">
      <label for="name">Name:</label>
      <input v-model="formData.name" type="text" id="name" required class="form-input" />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input v-model="formData.email" type="email" id="email" required class="form-input" />
    </div>
    <div class="form-group">
      <label for="subject">Subject:</label>
      <input v-model="formData.subject" type="text" id="subject" required class="form-input" />
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea v-model="formData.message" id="message" required class="form-input"></textarea>
    </div>
    <div class="form-group">
      <button type="submit" class="submit-button">Send</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        await axios.post('/.netlify/functions/send-email', this.formData);
        alert('Message sent successfully!');
        this.formData = { name: '', email: '', subject: '', message: '' };
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again.');
      }
    }
  }
};
</script>


<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.form-group label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--label-color);
}
.form-input {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid grey;
  border-radius: 4px;
  transition: border-color 0.3s;
  background-color: var(--input-bg);
  color: var(--input-color);
}
.form-input:focus {
  border-color: #007bff;
  outline: none;
}
.recaptcha {
  margin-top: 1rem;
}
.submit-button {
  align-self: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}
.submit-button:hover {
  background-color: #0056b3;
}
.submit-button:focus {
  background-color: #0056b3;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  outline: none;
}

:root {
  --label-color: #000000;
  --border-color: #000000;
  --input-bg: #ffffff;
  --input-color: #000000;
}

.dark-mode {
  --label-color: #ffffff;
  --border-color: #ffffff;
  --input-bg: #ffffff;
  --input-color: #000000;
}
</style>