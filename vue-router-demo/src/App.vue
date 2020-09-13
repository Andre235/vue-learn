<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/' + userName">我的</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return{
        userName: "zhaojingchao"
      }
    },
    methods: {
      link2Home() {
        this.$router.push("/home")
      },
      link2About() {
        this.$router.push("/about")
      }
    }
  }
</script>

<style>

</style>
