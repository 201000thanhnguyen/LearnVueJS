<template>
    <header>
        <h2>{{ title }}</h2>
    </header>
</template>
  
<script>
export default {
    data() {
        return {
            title: "header"
        }
    }
}
</script>
  
<style scoped>
header {
    background: lightgreen;
    padding: 10px;
}

h2 {
    color: burlywood;
    text-align: center;
}
</style>