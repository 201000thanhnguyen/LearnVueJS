<template>
  <div>
    <h2>{{ title }}</h2>
    <ninjas></ninjas>
  </div>
</template>

<script>

// import auto when declare tag <ninjas></ninjas>
import Ninjas from './Ninjas.vue'
export default {
  components: { 'ninjas' : Ninjas },
  data () {
    return {
      title: "hello world"
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>
