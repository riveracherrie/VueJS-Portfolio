import { createRouter, createWebHistory } from 'vue-router';
import DashboardComponent from './components/DashboardComponent.vue';
import LoginPage from './components/LoginPage.vue';
import Showcase from './components/Showcase.vue';
import Resume from './components/Resume.vue';
import Contacts from './components/Contacts.vue';

const routes = [
  {
    path: '/loginpage',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    name: 'DashboardComponent',
    component: DashboardComponent,
  },
  {
    path: '/showcase',
    name: 'Showcase',
    component: Showcase,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },

  {
    path: '/contacts',
    component: Contacts,
  },


  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;