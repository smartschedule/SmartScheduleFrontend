<template>
  <!-- Right aligned nav items -->
  <b-navbar-nav class="ml-auto">
    <b-navbar-nav v-if="userInfo">
      <b-nav-item to="/profile">{{userInfo.userName}}</b-nav-item>
      <b-nav-item to="/logout">Logout</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav v-else>
      <b-nav-item to="/register">Register</b-nav-item>
      <b-nav-item to="/login">Login</b-nav-item>
    </b-navbar-nav>
  </b-navbar-nav>
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
