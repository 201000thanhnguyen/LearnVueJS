var app1 = new Vue({
    el: "#ev",
    data() {
        return {
            year: 1,
            x: 0,
            y: 0
        }
    },
    methods: {
        add(iYear) {
            this.year += iYear;
        },
        sub(iYear) {
            this.year -= iYear;
        },
        updateXY: function(event) {
            this.x = event.offsetX; 
            this.y = event.offsetY; 
        }
    }
});