<template>
  <div>
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import ListNote from './components/ListNote.vue'
import Register from './components/Register.vue'
export default {
  components: { Register, Header, Footer, ListNote },
  data() {
    return {
      msg: "null"
    }
  }
}
</script>

<style></style>
