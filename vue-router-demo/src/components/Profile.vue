<template>
  <div>
    <h2>我是档案组件</h2>
    {{$route.query}}
    <p>姓名：{{$route.query.name}}</p>
    <p>年龄：{{$route.query.age}}</p>
    <p>身高：{{$route.query.height}}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log("Profile created")
  },
  destroyed() {
    console.log("Profile destroyed")
  }
}
</script>

<style scoped>

</style>
