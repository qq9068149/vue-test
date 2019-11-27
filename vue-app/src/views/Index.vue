<template>
    <div class="top">
        <!-- benner轮播图 -->
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                <img :src="item.image" class="imgs">
                </a>
            </cube-slide-item>
        </cube-slide>
        <!-- 分类滑动 -->
        <cube-slide ref="slidelists" :data="lists" :auto-play="false" @change="changePage">
            <cube-slide-item v-for="(lists, index) in lists" :key="index" >
                <ul class="listsUl">
                    <li v-for="(item, index) in lists" :key="index" class="listsLi">
                        <a :href="item.url">
                           <img :src="item.image" alt="">
                           <p>{{item.mgs}}</p>
                       </a>
                    </li>
                </ul>
            </cube-slide-item>
        </cube-slide>
    </div>
</template>
<script>
export default {
    data() {
    return {
      items:[],//benner轮播
      lists:[]//分类滑动

    }
  },
 async created(){
    try {
        //benner轮播
        const items = await this.$http.get('/api/banner');
        // console.log(items.data.data)
        this.items=items.data;
        //分类滑动
        const lists = await this.$http.get('/app/sort');
        // console.log(lists.data)
        this.lists=lists.data;

    } catch (error) {
        console.log(error)
    }
  },
  methods: {
    changePage(current) {
    //   console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
    //   console.log(item, index)
    }
  }
}
</script>
<style lang="stylus">

    .imgs
        width 100%
        height 150px
    .listsUl
        display flex
        flex-wrap  wrap
    .listsLi
        width 20%
        justify-content center
    .listsLi
            img
                width 50px
                height  50px
                border-radius  50%
                padding 5px 2px
    p
                font-size  14px
                padding-bottom  10px
</style>