<template>
    <div>
        <img src="../assets/benner03.jpg" class="img">
        <ul>
            <li v-for="item in labeArr" :key="item.leba" @click="clickLaba(item)" class="labeArr">
                <span class="leba">{{item.leba}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            labeArr:[
                {leba:"商品收藏"},
                {leba:"我的足迹"},
                {leba:"店铺收藏"},
                {leba:"我的订单"},
                {leba:"退出",type:'delete'},
            ]
        }
    },
    methods: {
        clickLaba(item){
            if(item.type=='delete'){
                this.$store.commit('setToken','');
                localStorage.removeItem('token');
                if(window.confirm('是否要退出登入?')){
                    this.$router.push({path:'/'})
                }
            }
        }
    },
}
</script>
<style lang="stylus">
.img
    width 100%
    height 150px
.labeArr
    height 50px
    font-size 14px
    line-height 50px
    text-align left 
    padding-left 5%
    border-bottom 1px solid #eee
    .leba
        display inline-block
        width 90%

</style>