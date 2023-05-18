var ref1 = new Vue({
    el: "#ref",
    data() {
        return {
            output: "output"
        }
    },
    methods: {
        readRefs() {
            console.log(this.$refs);
            console.log(this.$refs.inputData1.value);
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.inputData1.value;
        }
    }
});