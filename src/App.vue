<template>
  <div class="container">
    <UnivModal v-if="univModal == true"></UnivModal>
    <TermsOfService></TermsOfService>
    <UserRegister></UserRegister>

  </div>

</template>

<script>
import TermsOfService from './components/TermsOfService.vue'
import UserRegister from './components/UserRegister.vue'
import UnivModal from './components/UnivModal.vue'

export default {
  name: 'App',
  data() {
    return {
      univModal: false,
    }
  },
  components: {
    TermsOfService,
    UserRegister,
    UnivModal
}
}
</script>

<style>
  body{
    background-color: rgb(249, 249, 249);
  }
</style>
