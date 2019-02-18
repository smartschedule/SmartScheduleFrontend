<template>
  <b-navbar id="nav">
    <b-navbar-brand to="/">SmartSchedule</b-navbar-brand>
    <b-nav fill pills>
      <b-nav-item to="/buddies">Friends</b-nav-item>
      <CurrentUserInfo/>
    </b-nav>
  </b-navbar>
</template>

<script>
import CurrentUserInfo from "$c/CurrentUserInfo";
export default {
  components: { CurrentUserInfo }
};
</script>

<style lang="scss">
#nav {
  padding: 30px;
  box-shadow: inset 0px -1px 2px 0px rgba(0, 0, 0, 0.75);

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
