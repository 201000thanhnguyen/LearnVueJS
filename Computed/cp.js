var cp = new Vue({
    el: "#cp",
    data() {
        return {
            age: 20,
            a: 1,
            b: 1
        }
    },
    methods: {
        // addToA() {
        //     console.log("addToA");
        //     return this.a + this.age;
        // },
        // addToB() {
        //     console.log("addToB");
        //     return this.b + this.age;
        // }
    },
    computed: {
        addToA() {
            console.log("addToA");
            return this.a + this.age;
        },
        addToB() {
            console.log("addToB");
            return this.b + this.age;
        }
    }
});