<template>
    <div>
        <h2></h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id | 1,
            blog: {}
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
            console.log(data);
        })
    }
}
</script>

<style scoped>

</style>