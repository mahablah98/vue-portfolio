<template>
  <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      class="contact-form"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p class="hidden">
      <label>
        Hello! <input name="bot-field" />
      </label>
    </p>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" class="form-input" />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" class="form-input" />
    </div>
    <div class="form-group">
      <label for="subject">Subject:</label>
      <input type="text" name="subject" id="subject" class="form-input" />
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea name="message" id="message" class="form-input"></textarea>
    </div>
    <div data-netlify-recaptcha="true" class="recaptcha"></div>
    <div class="form-group">
      <button type="submit" class="submit-button">
        Send
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
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
  color: #333;
}
.form-input {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;
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
  color: #fff;
  background-color: #0a1529;
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
</style>
