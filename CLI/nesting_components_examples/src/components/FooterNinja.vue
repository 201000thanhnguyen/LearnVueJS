<template>
    <footer>
        <p>copyright by {{ authorNinja }}</p>
    </footer>
</template>

<script>
export default {
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