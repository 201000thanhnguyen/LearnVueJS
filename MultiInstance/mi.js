var el1 = new Vue({
    el: "#mi1",
    data() {
        return {
            tit: "vue el 1"
        }
    },
    methods: {

    },
    computed: {
        greet() {
            return "hello from el 1";
        }
    }
});

var el2 = new Vue({
    el: "#mi2",
    data() {
        return {
            tit: "vue el 2"
        }
    },
    methods: {
        changeTitle1() {
            el1.tit = "title 1 changed";
        }
    },
    computed: {
        greet() {
            return "hello from el 2";
        }
    }
});