<template>
    <div>
        <h2>list ninja</h2>
        <ul>
            <li v-for="ninja in ninjas">{{ ninja }}</li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            ninjas: [
                "alo",
                "hoho",
                "poiuuuus"
            ]
        }
    },
    methods: {

    }
}
</script>
  
<style scoped>
h2 {
    color: green;
}
</style>
  