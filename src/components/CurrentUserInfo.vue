<template>
  <div>
    <div v-if="userInfo ">Hello {{userInfo.userName}}</div>
    <div v-else>
      <b-nav-item to="/register">Register</b-nav-item>
      <b-nav-item to="/login">Login</b-nav-item>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  }
};
</script>

<style scoped>
</style>
