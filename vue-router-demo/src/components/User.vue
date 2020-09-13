<template>
  <dvi>
    <h2>用户页面</h2>
    {{$route.params.userName}}
  </dvi>
</template>

<script>
export default {
  name: "User",
  created() {
    console.log("User created")
  },
  destroyed() {
    console.log("User destroyed")
  }
}
</script>

<style scoped>

</style>
