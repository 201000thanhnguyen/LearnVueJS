<template>
    <header>
        <h2 @click="changeTitle">{{ title }}</h2>
    </header>
</template>
  
<script>
export default {
    props: {
      title: {
        type: String
      }  
    },
    data() {
        return {
            
        }
    },
    methods: {
        changeTitle() {
            // this.titleData = "changed title";
            this.$emit('changeTitle1', 'event change');
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