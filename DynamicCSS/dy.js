var dy = new Vue({
    el: "#dy",
    data() {
        return {
            available: false,
            nearby: false
        }
    },
    methods: {

    },
    computed: {
        compClasses() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});