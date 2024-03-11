app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
        <div class="product-image">
            <img :src="image" alt="">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock > 10">In Stock</p>
            <p v-else-if="inStock <= 10 && inStock > 0">Few more items left</p>
            <p v-else>Out Of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <ul>
            <li v-for="detail in details">
                {{ detail }}
            </li>
            </ul>
            <div v-for="(variant, index) in variants" :key="variant.id" v-on:mouseover="updateVarient(index)" class="color-circle" :style="{ backgroundColor: variant.color }"></div>
            <button class="button" v-on:click="addToCart" :class="{ disabledButton: !inStock }" :disabled="!inStock">Add To Cart</button>
        </div>
        </div>
    </div>
    `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastary',
            selectedVarient: 0,
            details: ['50% cotton', '30% Wool', '20% Polyester'],
            variants: [
                {id: 1, color: 'green', image: './assets/images/socks_green.jpg', quentity: 50},
                {id: 2, color: 'blue', image: './assets/images/socks_blue.jpg', quentity: 0}
            ]
        }
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart');
        },
        updateVarient(index){
            this.selectedVarient = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVarient].image
        },
        inStock(){
            return this.variants[this.selectedVarient].quentity
        },
        shipping() {
            if(this.premium){
                return 'Free';
            }else{
                return '$2.99';
            }
        }
    }
})