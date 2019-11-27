<template>
    <div class="panelsbox">
        <!-- 左边区域 -->
        <cube-scroll class="leftpanels">
            <ul>
                <li v-for="(left,index) in left" :key="index" :class="left.active?'active':''" @click="selectlist(index)">
                    {{left.label}}
                </li>
            </ul>
        </cube-scroll>
        <!-- 右边区域 -->
        <cube-scroll class="rightpanels">
            <ul>
                <li v-for="(right,index) in right" :key="index">
                    <img :src="right.image" alt="" >
                    <p>{{right.label}} <i class="cubeic-add" @click="toCart($event,right)"></i></p>
                </li>
            </ul>
        </cube-scroll>
        <!-- 购物球球动画 -->
        <div lass="ball-wrap">
            <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @afterEnter="afterEnter"
            >
                <div class="ball" v-if="ball.show">
                    <div class="inner">
                        <i class="cubeic-add"></i>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ball:{
                show:false,
                el:''
            },
            right:[],
            left:[
                {
                   label:'热门推荐',
                   active:true
               },
               {
                   label:'手机数码',
                   active:false
               },
               {
                   label:'家用电器',
                   active:false
               },
               {
                   label:'家用空调',
                   active:false
               },
               {
                   label:'电脑产品',
                   active:false
               },
               {
                   label:'计生情趣',
                   active:false
               },
               {
                   label:'美妆护肤',
                   active:false
               },
               {
                   label:'口红',
                   active:false
               },
               {
                   label:'手袋',
                   active:false
               },
               {
                   label:'金银财宝',
                   active:false
               },
               {
                   label:'手机数码',
                   active:false
               },
               {
                   label:'美妆护肤',
                   active:false
               },
               {
                   label:'口红',
                   active:false
               },
               {
                   label:'手袋',
                   active:false
               },
               {
                   label:'金银财宝',
                   active:false
               },
               {
                   label:'手机数码',
                   active:false
               },

            ],
        }
    },
    methods: {
        //获取商品方法
        async getclassify(index){
          const result = await this.$http.get('/api/classify',{params:{type:index}});
          this.right = result.data
        },
        selectlist(index){
            this.left.forEach((val,inx)=>{
                if(index==inx){
                    val.active = true;
                }else{
                    val.active = false;
                }
            });
            this.getclassify(index);
        },
        //添加商品到购物车,存入vuex
        toCart(e,right){
            this.$store.commit('toCart',right);
            this.ball.show=true;
            //获取点击元素
            this.ball.el=e.target
        },
        beforeEnter(el){
            //让小球移动到点击到位置
            //获取点击位置
            const dom = this.ball.el;
            const rec = dom.getBoundingClientRect();
            const x = rec.left-window.innerWidth*0.68;
            const y = -(window.innerHeight-rec.top);
            console.log(el)
            el.style.display='block'
            el.style.transform=`translate3d(0,${y}px,0)`
            const inner=el.querySelector('.inner')
            inner.style.transform=`translate3d(${x}px,0,0)`
        },
        enter(el,done){
            //触发重绘
            document.body.offsetHeight
            //小球移动到购物车到位置
            el.style.transform=`translate3d(0,0,0)`;
            const inner=el.querySelector('.inner')
            inner.style.transform=`translate3d(0,0,0)`
            el.addEventListener('transitionend',done)
        },
        afterEnter(el){
            this.ball.show=false
            el.style.display='none'
        }
    },
    //实例创建完成
    created(){
        //加载默认为热门推荐
        this.getclassify(0);
    },
    //挂载之后
    mounted(){
        //获取屏幕可视区域到高度
        var clientHeight = document.documentElement.clientHeight;
        var sortHeight = clientHeight - 48.98+'px';
        var leftpanels = document.querySelector('.leftpanels');
        var rightpanels = document.querySelector('.rightpanels');
        leftpanels.style.height=sortHeight;
        rightpanels.style.height=sortHeight;
    },
}




</script>
<style lang="stylus" scoped>
.panelsbox
    display flex
    .leftpanels
        width 30%
        li
            height 50px
            line-height 50px
            border-bottom 1px solid #fff
            background-color #f8f8f8
            font-size 14px
            color #333
        .active
            background-color #fff
            color #e93b3d
    .rightpanels
        width 70%
        ul
            display flex
            flex-wrap wrap
            li
                width 50%
                justify-content center
                font-size 14px
                img 
                    width 80px
                    height 80px
                p
                    height 20px
                    .cubeic-add
                        font-size 18px
    .ball
        position fixed
        left 68%
        bottom 10px
        z-index 1000
        color #f10180       
        transition all 1s cubic-bezier(0.49,-0.29,0.75,0.41)
        .inner
            width 16px
            height  16px
            transition all 1s linear
    
                        

</style>