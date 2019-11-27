<template>
    <div>
      <transition :name="transitionName">
        <router-view class="router"/>
      </transition>
      <cube-tab-bar class="bot"
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler">
      </cube-tab-bar>
      <span class="botNum">{{num}}</span>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
  data () {
    return {
      transitionName:'slide-right',
      selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-tag'
      }, {
        label: '搜索',
        icon: 'cubeic-search'
      },{
        label: '购物车',
        icon: 'cubeic-mall'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      // console.log(label)
    },
    changeHandler (label) {
      //点击不同的时候触发
      // console.log(label)
      switch (label) {
        case '首页':
          this.$router.push('/botnav/index');
          break;
        case '分类':
          this.$router.push('/botnav/sort');
          break;
        case '搜索':
          this.$router.push('/botnav/search');
          break;
        case '购物车':
          this.$router.push('/botnav/cart');
          break;
        case '我的':
          this.$router.push('/botnav/mine');
          break;
      }
    }
  },
  created(){
    switch(this.$route.path){
      case '/botnav/index':
        this.selectedLabelDefault= '首页';
        break;
      case '/botnav/sort':
        this.selectedLabelDefault='分类';
        break;
      case '/botnav/search':
        this.selectedLabelDefault='搜索';
        break;
      case '/botnav/cart':
        this.selectedLabelDefault= '购物车';
        break;
      case '/botnav/mine':
        this.selectedLabelDefault= '我的';
        break;
    }
  },
  computed: {
    ...mapGetters({
      num:'countsum'
    })
  },
}
</script>
<style lang="stylus">

.bot
    position fixed
    bottom 0px
    left 0px
    width 100%
    font-size 24px
    z-index 999
    background-color #fff
.cube-tab div
    padding-top 2px
    font-size 12px
.router
    position absolute
    width 100%
    transition all 0.8s ease
.slide-left-enter,.slide-right-leave-active
    opacity 0
    -webkit-transform translate(100%,0)
    transform translate(100%,0)
.slide-left-leave-active,.slide-right-enter
    opacity 0
    -webkit-transform translate(100%,0)
    transform translate(100%,0)
.botNum
    position fixed 
    bottom 40px
    right 23%
    z-index 1000
    font-size 12px
    width 20px
    height 20px
    line-height 22px
    border-radius 50%
    background-color #f10180
    color #fff
</style>