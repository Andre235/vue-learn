<template>
  <div id="app">
    <button @click="link2Home">首页</button>
    <button @click="link2About">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
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
