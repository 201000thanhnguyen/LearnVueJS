<template>
  <div>
    <Header></Header>
    <div class="container mt-3">
      <form-login></form-login>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import FormLogin from './components/FormLogin.vue'
import Header from './components/Header.vue'

export default {
  components: { Header, FormLogin, Footer },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<style>

</style>
