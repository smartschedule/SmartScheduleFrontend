<template>
  <b-navbar toggleable="md" type="dark" variant="primary" sticky="true">
    <b-navbar-brand tag="h1" class="mb-0" to="/">SmartSchedule</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"/>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/calendars">Calendars</b-nav-item>
        <b-nav-item to="/friends">Friends</b-nav-item>
      </b-navbar-nav>

      <CurrentUserInfo/>
    </b-collapse>
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
