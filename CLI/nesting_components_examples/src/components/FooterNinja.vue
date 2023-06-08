<template>
    <footer>
        <p>copyright by {{ authorNinja }} {{ titleData }}</p>
    </footer>
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
            authorNinja: "ThanhNHM",
            titleData: this.title
            
        }
    },
    created() {
        bus.$on('changeTitle1', (data) => {
            this.titleData  = data;
        });
    }
}
</script>

<style scoped>
footer {
    background: lightpink;
    padding: 10px;
}

p {
    color: grey;
    text-align: center;
}
</style>