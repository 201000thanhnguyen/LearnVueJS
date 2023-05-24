<template>
    <footer>
        <p>copyright by {{ authorNinja }} {{ title }}</p>
    </footer>
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
            authorNinja: "ThanhNHM"
        }
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