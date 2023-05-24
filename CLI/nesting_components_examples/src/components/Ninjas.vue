<template>
    <div id="ninja">
        <ul>
            <li v-for="ninja in ninjas" @click="ninja.show = !ninja.show">
                <span>name: {{ ninja.name }}.</span> <span v-show="ninja.show">{{ ninja.specialty }}</span>
            </li>
        </ul>
        <button type="button" class="btn btn-primary" @click="deleteNinja">delete ninja</button>
    </div>
</template>

<script>
export default {
    props: {
        ninjas: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        test() {
            console.log(this.ninjas);
        },
        deleteNinja() {
            this.$props.ninjas.pop();
        }
    }
}
</script>

<style scoped>
#ninja {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>