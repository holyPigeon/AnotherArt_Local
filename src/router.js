import { createWebHistory, createRouter } from "vue-router"
import UserRegister from './views/UserRegister.vue'
import ArtworkRegister from './views/ArtworkRegister.vue'
import TermsOfService from './views/TermsOfService.vue'
import CreateAccount from './views/CreateAccount.vue'
import Community from './views/CommunityPage.vue'

const routes = [
  {
    path: "/CreateAccount",
    component: CreateAccount,
    children: [
      {
        path: "TermsOfService",
        component: TermsOfService,
      },
      {
        path: "UserRegister",
        component: UserRegister,
      },
    ]
  },
  {
    path: "/Artworkregister",
    component: ArtworkRegister,
  },
  {
    path: "/Community",
    component: Community,
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;