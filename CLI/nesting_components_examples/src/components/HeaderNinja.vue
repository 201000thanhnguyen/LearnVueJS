<template>
    <header>
        <h2 @click="changeTitle">{{ titleData }}</h2>
    </header>
</template>
  
<script>
import { bus } from '../main';
export default {
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            titleData: this.title
        }
    },
    methods: {
        changeTitle() {
            this.titleData = "bus changed title";
            bus.$emit('changeTitle1', 'event bus change');
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