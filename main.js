const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: false
        }
    },
    methods: {
        updateCate(){
            this.cart += 1
        }
    }
});