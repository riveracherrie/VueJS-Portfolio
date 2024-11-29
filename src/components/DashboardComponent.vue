<template>
  <div class="dashboard">
    <Header />

    <div class="main-content">
      <transition name="slide-fade">
        <aside v-if="isSidebarVisible" class="sidebar">
          <h3 class="sidebar-title">Dashboard Menu</h3>
          <ul>
            <li><a @click="scrollToSection('profile')">Profile</a></li>
            <li><router-link to="/Showcase">Showcase</router-link></li>
            <li><router-link to="/Contacts">Contacts</router-link></li>
            <li><router-link to="/resume">Creative</router-link></li>
          </ul>
          <button class="toggle-button hide" @click="toggleSidebar">Hide Sidebar</button>
        </aside>
      </transition>

      <main :class="['dashboard-content', { 'shift-right': !isSidebarVisible }]">
        <button v-if="!isSidebarVisible" class="toggle-button show" @click="toggleSidebar">
          <span class="burger-icon"></span>
          <span class="burger-icon"></span>
          <span class="burger-icon"></span>
        </button>

        <section id="profile" class="about-section">
          <h3>Profile</h3>
          <div class="about-content">
            <div class="profile-card">
              <img src="@/assets/profile1.jpg" alt="Profile Picture" class="profile-image" />
              <div class="about-text">
                <strong>Cherrie Ann I. Rivera</strong>
                <p><strong>Birthday:</strong> November 28, 2002</p>
                <p><strong>Address:</strong> Blk 16 L29 Viva Homes Salawag, Dasmarinas, Cavite</p>
                <p><strong>Contact Number:</strong> 09081735411</p>
                <p><strong>Email:</strong> <a href="mailto:mcarivera@tip.edu.ph">mcarivera@tip.edu.ph</a></p>
                <p>
                  Hello! I’m Cherrie Ann I. Rivera, a 22-year-old Computer Engineering student at the Technological Institute of the Philippines (TIP), passionate about hardware and IoT innovations.
                </p>
                <p>
                  Innovative and detail-oriented Computer Engineer with a passion for UI design and user experience. Currently pursuing a degree in Computer Engineering at the Technological Institute of the Philippines (TIP). Skilled in creating visually appealing and intuitive interfaces, while also proficient in programming languages such as Python, Java, and C++. 
                </p>
                <p>
                  Driven by a passion for crafting engaging and visually appealing interfaces, I aim to enhance user experiences through thoughtful design and functionality. I am eager to contribute to projects that fuse aesthetics with innovative technological solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'DashboardComponent',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isSidebarVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.dashboard {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #1a1a19;
  color: #f3f3e0;
}

.main-content {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 250px;
  background-color: #af1740;
  color: #f3f3e0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
  transition: transform 0.3s ease;
}

.sidebar-title {
  margin-bottom: 1.5rem;
  color: #f3f3e0;
  font-size: 1.5rem;
  font-weight: bold;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 0.5rem 0;
}

.sidebar ul li a {
  color: #f3f3e0;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.sidebar ul li a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.dashboard-content {
  flex: 1;
  padding: 2rem;
  background-color: #1a1a19;
  overflow-y: auto;
  margin-left: 250px;
  transition: margin-left 0.3s ease;
}

.dashboard-content.shift-right {
  margin-left: 0;
}

.about-section {
  margin-top: 2rem;
  background: #f3f3e0;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: #1a1a19;
}

.toggle-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a1a19;
  border: none;
  border-radius: 5px;
  color: #f3f3e0;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #af1740;
}

.burger-icon {
  width: 30px;
  height: 4px;
  background-color: #f3f3e0;
  margin: 5px auto;
}

.profile-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  color: #1a1a19;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.about-text {
  flex: 1;
}

.about-text p {
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1rem;
  color: #1a1a19;
}

@media (max-width: 768px) {
  .dashboard-content {
    margin-left: 0;
  }

  .sidebar {
    width: 100%;
    position: relative;
    transform: translateX(-100%);
  }

  .sidebar.show {
    transform: translateX(0);
  }

  .profile-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile-image {
    margin-bottom: 1rem;
  }
}
</style>
