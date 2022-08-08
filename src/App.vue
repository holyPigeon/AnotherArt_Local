<template>
  <div class="container">
    <div>
      <button type="button" @click="page = 1;" class="btn btn-outline-light">1</button>
      <button type="button" @click="page = 2;" class="btn btn-outline-light">2</button>
    </div>
    <div>
      <TermsOfService v-if="page == 2"></TermsOfService>
      <RegisterModals></RegisterModals>
      <UserRegister v-if="page == 1"></UserRegister>
    </div>
  </div>

</template>

<script>
import TermsOfService from './components/TermsOfService.vue'
import UserRegister from './components/UserRegister.vue'
import RegisterModals from './components/RegisterModals.vue'

export default {
  name: 'App',
  data() {
    return {
      page: 1
    }
  },
  methods: {
  },
  components: {
    TermsOfService,
    UserRegister,
    RegisterModals,
  }
}
</script>

<style>
body {
  /* background-color: rgb(249, 249, 249); */
  background-image: url('./assets/registerBackgroundImage.png');
  background-size: cover;
}

/* .bg-image {
  background-image: url('./assets/registerBackgroundImage.png');
} */
</style>
