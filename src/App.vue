<template>
  <div id="app">
    <Header/>
    <router-view class="router-view"/>
    <Footer class="footer"/>
  </div>
</template>
<script>
import Header from "$c/Header";
import Footer from "$c/Footer";
import { tokenToStore } from "$c/token";
export default {
  components: { Footer, Header },
  mounted() {
    tokenToStore(this);
  }
};
</script>
<style lang="scss">
html {
  min-height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.router-view {
  height: 100%;
}
.footer {
  align-self: bottom;
}
</style>
