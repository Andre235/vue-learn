<template>
  <div>
    <h2>我是home内容</h2>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  name: "Home",
    created() {
      console.log("Home created")
    },
    destroyed() {
      console.log("Home destroyed")
    }
  }
</script>

<style scoped>

</style>
