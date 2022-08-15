<template>
  <div class="container">
    <div>
      <RegisterModals></RegisterModals>
      <router-view></router-view>
      <div>
        <router-link to="/UserRegister">UserRegister</router-link>
      </div>
      <div>
        <router-link to="/ArtworkRegister">ArtworkRegister</router-link>
      </div>
      <div>
        <router-link to="/TermsOfService">TermsOfService</router-link>
      </div>
    </div>
  </div>

</template>

<script>
import RegisterModals from './components/RegisterModals.vue'

export default {
  name: 'App',
  data() {
    return {
      page: 1,
    }
  },
  methods: {
  },
  components: {
    RegisterModals,
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
