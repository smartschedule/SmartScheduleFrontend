<template>
  <b-navbar toggleable="md" type="dark" variant="primary" sticky="true">
    <b-navbar-brand tag="h1" class="mb-0" to="/">SmartSchedule</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"/>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/calendars">Calendars</b-nav-item>
        <b-nav-item to="/friends">Friends</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
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
nav {
  background-color: #002171;
}

.nav-item {
  font-size: 0.85rem;
}

.navbar-brand {
  font-size: 1.2rem;
}
</style>
