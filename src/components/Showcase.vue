<template>
  <div class="showcases">
    <Header /> <!-- Header component -->

    <main class="showcases-content">
      <div class="section-header">
        <h2>My Showcases</h2>
      </div>

      <div class="showcases-grid">
        <div class="showcase-card" v-for="showcase in showcases" :key="showcase.id">
          <a :href="showcase.image" target="_blank" rel="noopener noreferrer">
            <img :src="showcase.image" alt="Showcase Image" class="showcase-image" />
          </a>
          <div class="showcase-details">
            <h3>{{ showcase.name }}</h3>
            <p class="description">{{ showcase.description }}</p>
            <span v-if="showcase.date" class="badge">{{ showcase.date }}</span>
          </div>
        </div>
      </div>
    </main>

    <Footer /> <!-- Footer component -->
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

import proj1 from '@/assets/proj1.jpg';
import cert1 from '@/assets/cert1.jpg';
import cert2 from '@/assets/cert2.jpg';
import cert3 from '@/assets/cert3.jpg';
import cert4 from '@/assets/cert4.jpg';
import cert5 from '@/assets/cert5.jpg';

export default {
  name: 'Showcases',
  components: { Header, Footer },
  data() {
    return {
      showcases: [
        {
          id: 1,
          name: 'Gym Management System',
          description: 'Gym Management System for member tracking, scheduling, billing, and progress monitoring.',
          image: proj1,
        },
        {
          id: 2,
          name: 'CCNAv7: Enterprise Networking, Security, and Automation.',
          description: 'CISCO certification showcasing expertise in enterprise networking.',
          date: '2024-05-10',
          image: cert1,
        },
        {
          id: 3,
          name: 'CCNAv7: Introduction to Networks',
          description: 'CISCO certification on foundational networking concepts.',
          date: '2024-08-22',
          image: cert2,
        },
        {
          id: 4,
          name: 'CCNAv7: Switching, Routing, and Wireless Essentials',
          description: 'CISCO certification covering intermediate networking skills.',
          date: '2023-01-16',
          image: cert3,
        },
        {
          id: 5,
          name: 'Cybersecurity Essentials',
          description: 'CISCO certification focusing on core cybersecurity principles.',
          date: '2023-05-17',
          image: cert4,
        },
        {
          id: 6,
          name: 'Programming Essentials in python',
          description: 'Cisco Networking Academy® in collaboration with OpenEDG Python Institute',
          date: '2022-06-12',
          image: cert5,
        },
      ],
    };
  },
  mounted() {
    this.showcases.sort((a, b) => new Date(b.date || '1970-01-01') - new Date(a.date || '1970-01-01'));
  },
};
</script>

<style scoped>
.showcases {
  display: flex;
  flex-direction: column;
  background-color: #F3F3E0;
}

.section-header {
  text-align: center;
  padding: 30px 20px;
  background-color: #AF1740;
  color: #F3F3E0;
  border-radius: 10px;
  margin-bottom: 30px;
}

.section-header h2 {
  font-size: 2rem;
  margin: 0;
}

.showcases-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.showcases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
}

.showcase-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.showcase-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.showcase-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.showcase-card:hover .showcase-image {
  transform: scale(1.03);
}

.showcase-details {
  padding: 20px;
  text-align: left;
  color: #333;
}

.showcase-details h3 {
  font-size: 1.5rem;
  color: #AF1740;
  margin-bottom: 10px;
}

.description {
  font-size: 1rem;
  margin-bottom: 15px;
}

.badge {
  display: inline-block;
  background-color: #AF1740;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
}
</style>
