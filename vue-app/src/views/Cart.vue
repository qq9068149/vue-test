<template>
    <div>
        <div v-for="(item,index) in carts" :key="index" class="title">
            <span class="titles">{{item.title}}</span> 
            <div class="num">
                <i class="cubeic-remove" @click="removeCart(index)"></i>
                {{item.num}}
                <i class="cubeic-add" @click="addCart(index)"></i>
            </div>
        </div>
        <cube-button style="margin:10px 0;">下单</cube-button>
        <cube-button @click="spliceCart">清空购物车</cube-button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        //商品数量减少
        removeCart(index){
            this.$store.commit('removeCart',index)
        },
        //商品数量增加
        addCart(index){
            this.$store.commit('addCart',index)
        },
        //清除购物车
        spliceCart(){
            this.$store.commit('spliceCart')
        }
    },
    computed: {
        ...mapState({
            carts:state=>state.cartsarr
        })
    },
}
</script>
<style lang="stylus">
    .title
        padding 10px 4%
        text-align left
        font-size 16px
        border-bottom 1px solid #eee
        .num
            float right 
</style>