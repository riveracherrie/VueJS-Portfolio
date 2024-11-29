<template>
  <div class="contact-page">
    <!-- Header Component -->
    <Header />

    <!-- Main Contact Section -->
    <section class="contact-section">
      <!-- Page Header -->
      <header class="contact-header">
        <h1>Contact Me</h1>
        <p>Feel free to reach out for collaborations, inquiries, or feedback.</p>
      </header>

      <!-- Contact Form and Contact Info Side by Side -->
      <div class="contact-content">
        <!-- Send a Message -->
        <div class="contact-form">
          <h2>Send a Message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" placeholder="Your Name" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" placeholder="Your Email" required />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" placeholder="Write your message here" rows="4" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>

          <!-- Success Message -->
          <div v-if="submitted" class="success-message">
            <p>Your message has been sent. Thank you!</p>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="contact-details">
          <h2>Contact Info</h2>
          <ul>
            <li>
              <i class="fas fa-envelope"></i>
              <a href="mailto:cherrieannriveraaa28@gmail.com">cherrieannriveraaa28@gmail.com</a>
            </li>
            <li>
              <i class="fas fa-phone-alt"></i> +63 945 548 7506
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i> Dasmarinas, Cavite, Philippines
            </li>
          </ul>
        </div>
      </div>

    </section>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'ContactPage',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      if (this.form.name && this.form.email && this.form.message) {
        console.log('Form submitted', this.form);
        this.submitted = true;

        // Reset form fields
        this.form = { name: '', email: '', message: '' };
      } else {
        alert('Please fill out all fields.');
      }
    },
  },
};
</script>

<style scoped>
/* General Layout */
.contact-page {
  background: #f3f3e0; /* Beige background */
  color: #1a1a1a; /* Dark text */
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  height: 100vh; /* Full screen */
  overflow: hidden; /* Disable scrolling */
}

/* Contact Section Styling */
.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1.5rem;
  height: 100%;
}

/* Page Header */
.contact-header h1 {
  font-size: 2.5rem;
  color: #1a1a1a; /* Dark text */
  margin-bottom: 0.5rem;
}

.contact-header p {
  font-size: 1.2rem;
  color: #555555; /* Subtle dark gray */
  margin-bottom: 2rem;
}

/* Content Section: Side-by-Side Layout */
.contact-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px; /* Limit max width */
  gap: 2rem; /* Space between the two boxes */
}

/* Send a Message Form */
.contact-form {
  background: #ffffff; /* White background */
  color: #1a1a1a; /* Dark text */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.contact-form h2 {
  margin-bottom: 1.5rem;
  color: #1a1a1a; /* Dark text */
}

.contact-form .form-group {
  margin-bottom: 1rem;
}

.contact-form label {
  display: block;
  font-weight: bold;
  color: #333333; /* Dark gray */
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 0.3rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #af1740; /* Accent color */
}

.contact-form button {
  margin-top: 1rem;
  background-color: #af1740; /* Accent color */
  color: #ffffff; /* White text */
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-form button:hover {
  background-color: #901032; /* Darker accent color */
}

/* Contact Info */
.contact-details {
  background: #ffffff; /* White background */
  color: #1a1a1a; /* Dark text */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.contact-details h2 {
  margin-bottom: 1.5rem;
  color: #1a1a1a; /* Dark text */
}

.contact-details ul {
  list-style: none;
  padding: 0;
}

.contact-details li {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.contact-details i {
  color: #af1740; /* Accent color */
}

.contact-details a {
  color: #af1740; /* Accent color */
  text-decoration: none;
}

.contact-details a:hover {
  text-decoration: underline;
}
</style>
