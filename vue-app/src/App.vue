<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/login">登入</router-link> |
      <router-link to="/post">注册</router-link>
      <router-link to="/index">首页</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50


  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
