<template>
  <div class="resume" ref="resumeContent">
    <Header />
    <main class="resume-content">
      <h2 class="resume-title">CHERRIE ANN RIVERA</h2>
      <h4 class="resume-subtitle">Bachelor of Science in Computer Engineering (BSCpE) specializing in cybersecurity</h4>

      <div class="content-container">
        <!-- Main content on the left -->
        <section class="main-content">
          <h3>Education</h3>
          <div class="education-item">
            <h4>Bachelor of Science in Computer Engineering</h4>
            <p><em>Technological Institute of the Philippines, 2021 - 2025</em></p>
          </div>
          <div class="education-item">
            <h4>Senior High School (STEM)</h4>
            <p><em>Philippine Christian University - Cavite, 2019 - 2021</em></p>
          </div>
          <div class="education-item">
            <h4>Junior High School</h4>
            <p><em>Infant Jesus Montessori Center, 2015 - 2019</em></p>
          </div>

          <section>
            <h3>Skills</h3>
            <ul class="skills-list">
              <li>UI Design</li>
              <li>Security and Cryptography</li>
              <li>Problem-Solving and Analytical Thinking</li>
              <li>Simulation and Modeling Tools</li>
            </ul>
          </section>

          <section>
            <h3>Extra and Co-Curricular Engagements and Volunteer Works</h3>
            <div class="engagement-item">
              <h4>Youth for Environment in Schools Organization - YES.O</h4>
              <p><em>Auditor</em></p>
              <p><em>03/30/2017 - 03/22/2019</em></p>
            </div>
            <div class="engagement-item">
              <h4>Supreme Student Council</h4>
              <p><em>Representative</em></p>
              <p><em>03/01/2017 - 03/29/2018</em></p>
            </div>
            <div class="engagement-item">
              <h4>Supreme Student Council</h4>
              <p><em>Vice President</em></p>
              <p><em>03/01/2018 - 03/28/2019</em></p>
            </div>
            <div class="engagement-item">
              <h4>Institute of Computer Engineers of the Philippines - NCR</h4>
              <p><em>Member</em></p>
              <p><em>03/11/2023 - Present</em></p>
            </div>
            <div class="engagement-item">
              <h4>Inhinyera</h4>
              <p><em>Member</em></p>
              <p><em>11/05/2023 - Present</em></p>
            </div>
            <div class="engagement-item">
              <h4>Computer Engineering Student Society</h4>
              <p><em>Member</em></p>
              <p><em>02/18/2023 - Present</em></p>
            </div>
          </section>
        </section>

        <!-- Personal information on the right -->
        <aside class="personal-info">
          <section>
            <h3>Personal Information</h3>
            <ul class="info-list">
              <li>Birthday: <span>November 28, 2002</span></li>
              <li>Gender: <span>Female</span></li>
              <li>Age: <span>22</span></li>
              <li>Citizenship: <span>Filipino</span></li>
              <li>Contact: <span>+63 945 548 7506</span></li>
              <li>Email: <a href="mailto:cherrieannriveraaa28@gmail.com">cherrieannriveraaa28@gmail.com</a></li>
              <li>LinkedIn: <a href="www.linkedin.com/in/cherrie-ann-rivera-044bb433a" target="_blank" rel="noopener noreferrer"></a></li>
            </ul>
          </section>

          <section>
            <h3>Programming Languages</h3>
            <ul class="info-list">
              <li>Java</li>
              <li>Kotlin</li>
              <li>Python</li>
              <li>Vue.js</li>
            </ul>
          </section>

          <!-- Seminars and Trainings Attended Section -->
          <section>
            <h3>Seminars and Trainings Attended</h3>
            <div class="seminar-item">
              <h4>Introduction to Industrial Safety</h4>
              <p><em>Technological Institute of the Philippines - Manila</em></p>
              <p><em>03/07/2024</em></p>
            </div>
            <div class="seminar-item">
              <h4>"Babae Ka, Hindi Babae Lang" A Woman Empowerment Seminar</h4>
              <p><em>Online Conference</em></p>
              <p><em>05/04/2022</em></p>
            </div>
            <div class="seminar-item">
              <h4>Jarvis: Innovation through Robotics</h4>
              <p><em>Technological Institute of the Philippines - Manila</em></p>
              <p><em>02/29/2024</em></p>
            </div>
          </section>
        </aside>
      </div>
    </main>
    <button @click="downloadPDF">Download Resume</button>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import html2pdf from 'html2pdf.js';

export default {
  name: 'Resume',
  components: { Header, Footer },
  methods: {
    downloadPDF() {
      const resumeElement = this.$refs.resumeContent;
      const mainContent = resumeElement.querySelector('.resume-content').cloneNode(true);
      const opt = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'legal', orientation: 'portrait' },
      };
      html2pdf().from(mainContent).set(opt).save();
    },
  },
};
</script>

<style scoped>
.resume {
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  color: #F3F3E0;
  background-color: #1A1A19;
  padding: 20px;
}

.resume-content {
  max-width: 100%;
  padding: 20px;
  background-color: #F3F3E0;
  border-radius: 15px;
  color: #1A1A19;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.resume-title {
  text-align: center;
  color: #AF1740;
  font-size: 2.5em;
  margin-bottom: 10px;
}

.resume-subtitle {
  text-align: center;
  color: #1A1A19;
  font-size: 1.5em;
  margin-bottom: 20px;
}

.content-container {
  display: flex;
  justify-content: space-between; /* Ensures even spacing */
  gap: 20px;
}

.main-content {
  flex: 3;
  background-color: #F3F3E0;
  color: #1A1A19;
  border-radius: 10px;
  padding: 20px;
}

.personal-info {
  flex: 1;
  background-color: #1A1A19;
  color: #F3F3E0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-top: 0;
  border-bottom: 2px solid #AF1740;
  padding-bottom: 5px;
  font-size: 1.5em;
  color: #AF1740;
}

.info-list {
  list-style-type: none;
  padding: 0;
}

.info-list li {
  margin: 8px 0;
  font-weight: 500;
}

.engagement-item h4 {
  color: #AF1740;
  font-size: 1.2em;
}

.engagement-item p {
  font-size: 1em;
}

.seminar-item h4 {
  color: #AF1740;
  font-size: 1.2em;
}

.seminar-item p {
  font-size: 1em;
}

button {
  margin: 20px auto;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #AF1740;
  color: #F3F3E0;
  cursor: pointer;
}

button:hover {
  background-color: #1A1A19;
}
</style>
