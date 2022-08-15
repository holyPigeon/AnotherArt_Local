import { createWebHistory, createRouter } from "vue-router"
import UserRegister from './views/UserRegister.vue'
import ArtworkRegister from './views/ArtworkRegister.vue'
import TermsOfService from './views/TermsOfService.vue'

const routes = [
  {
    path: "/UserRegister",
    component: UserRegister,
  },
  {
    path: "/Artworkregister",
    component: ArtworkRegister,
  },
  {
    path: "/TermsOfService",
    component: TermsOfService,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;