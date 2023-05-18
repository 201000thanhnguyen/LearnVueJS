<template>
  <div>
    <header-ninja></header-ninja>
    <ninjas :ninjas="outNinjas"></ninjas>
    <footer-ninja></footer-ninja>
  </div>
</template>

<script>
import HeaderNinja from './components/HeaderNinja.vue'
import FooterNinja from './components/FooterNinja.vue'
import Ninjas from './components/Ninjas.vue';

export default {
  components: { HeaderNinja, FooterNinja, Ninjas },
  data() {
    return {
      outNinjas: [
        { name: 'Ryu', specialty: 'Vue Components', show: false },
        { name: 'Crystal', specialty: 'HTML Wizardry', show: false },
        { name: 'Hitoshi', specialty: 'Click Events', show: false },
        { name: 'Tango', specialty: 'Conditionals', show: false },
        { name: 'Kami', specialty: 'Webpack', show: false },
        { name: 'Yoshi', specialty: 'Data Diggin', show: false }
      ]
    }
  }
}
</script>

<style></style>
