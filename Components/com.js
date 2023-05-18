var data = {
    name1: "name !1"
}

Vue.component(
    'greeting', {
        /* 
            todo : problem 2
            don't working, why ?? 
            template: `<p> component 1, {{ name1 }} </p> <button @click="changeName"> change Name</button>`,
        */
        template: `<p> component 1, {{ name1 }} <button @click="changeName"> change Name</button> </p>`,
        data() {
            return data
            // difference 
            /* 
                return {
                    name1: "name !1"
                }
            */
        },
        methods: {
            changeName() {
                this.name1 = "name 1.1"
            }
        }
    }
)

var el1 = new Vue({
    el: "#com1",
    data() {
        return {
            tit: "vue el 1"
        }
    },
    methods: {

    },
    computed: {
        
    }
});

var el2 = new Vue({
    el: "#com2",
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
        
    }
});