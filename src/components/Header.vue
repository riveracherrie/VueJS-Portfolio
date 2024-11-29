<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/dashboard">MyApp</router-link>
      </div>
      <div class="menu">
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
        <router-link to="/Showcase" class="nav-link">Showcase</router-link>
        <router-link to="/Contacts" class="nav-link">Contact</router-link>
        <router-link to="/resume" class="nav-link">Creative</router-link>
        <router-link to="/loginpage" class="nav-link">Logout</router-link>
      </div>
      <button class="menu-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
header {
  background-color: #1A1A19; /* Dark background for the header */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  padding: 10px 20px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav .logo a {
  font-size: 1.8rem;
  font-weight: 700;
  color: #F3F3E0;
  text-decoration: none;
}

.menu {
  display: flex;
  gap: 20px;
}

.nav-link {
  font-weight: 600;
  color: #F3F3E0; /* Light text color */
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link:hover {
  background-color: #AF1740; /* Accent hover background */
  color: #F3F3E0; /* Ensure text remains visible */
}

.nav-link.router-link-exact-active {
  background-color: #AF1740; /* Active link indicator */
  color: #F3F3E0;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30px;
  height: 25px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.bar {
  width: 30px;
  height: 4px;
  background-color: #F3F3E0;
  transition: all 0.3s ease;
}

.menu-open .bar:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
}

.menu-open .bar:nth-child(2) {
  opacity: 0;
}

.menu-open .bar:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
}

@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #1A1A19;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  .menu-open {
    display: flex;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-link {
    padding: 15px;
    width: 100%;
    text-align: center;
  }

  .nav-link:hover {
    background-color: #AF1740;
  }
}
</style>
