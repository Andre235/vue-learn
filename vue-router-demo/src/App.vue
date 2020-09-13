<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <button @click="link2User">我的</button>
    <button @click="link2Profile">我的</button>

    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
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
      },
      link2User() {
        this.$router.push("/user/" + this.userName)
      },
      link2Profile() {
        this.$router.push({
          path: "/profile",
          query: {
            name: "赵静超",
            age: 23,
            height: 170
          }
        })
      }
    }
  }
</script>

<style>

</style>
