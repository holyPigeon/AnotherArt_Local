<template>
  <div class="container">
    <div>
      <button type="button" @click="page = 1;" class="btn btn-outline-light">1</button>
      <button type="button" @click="page = 2;" class="btn btn-outline-light">2</button>
      <button type="button" @click="page = 3;" class="btn btn-outline-light">3</button>
    </div>
    <div>
      <TermsOfService v-if="page == 2"></TermsOfService>
      <RegisterModals></RegisterModals>
      <UserRegister v-if="page == 3"></UserRegister>
      <ArtworkRegister v-if="page == 1" :style="bg_style"></ArtworkRegister>
    </div>
  </div>

</template>

<script>
import TermsOfService from './components/TermsOfService.vue'
import UserRegister from './components/UserRegister.vue'
import RegisterModals from './components/RegisterModals.vue'
import ArtworkRegister from './components/ArtworkRegister.vue'

export default {
  name: 'App',
  data() {
    return {
      page: 1,
      bg_style: "background-image: none",
    }
  },
  methods: {
  },
  components: {
    TermsOfService,
    UserRegister,
    RegisterModals,
    ArtworkRegister
}
}
</script>

<style>
body {
  /* background-color: rgb(249, 249, 249); */
  background-image: url('./assets/registerBackgroundImage3.jpg');
  background-size: cover;
}
</style>
