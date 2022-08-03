<template>
  <div class="container">
    <RegisterModals></RegisterModals>
    <TermsOfService></TermsOfService>
    <UserRegister></UserRegister>
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
  background-color: rgb(249, 249, 249);
}
</style>
