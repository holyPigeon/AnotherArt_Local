<template>
  <div class="container">
    <div>
      <button type="button" @click="page[0] = 1; page[1] = 0;" class="btn btn-outline-dark">1</button>
      <button type="button" @click="page[0] = 0; page[1] = 1;" class="btn btn-outline-dark">2</button>
    </div>
    <TermsOfService v-if="page[0] = 1"></TermsOfService>
    <RegisterModals></RegisterModals>
    <UserRegister v-if="page[1] = 1"></UserRegister>
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
      page: [1, 0],
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
