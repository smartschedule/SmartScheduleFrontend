<template>
  <div class="register">
    <div class="register__wrapper">
      <div class="error">{{message}}</div>
      <div v-if="userInfo">You are already logged in</div>
      <b-form v-else>
        <b-form-group description="example: you@gmail.com" label="E-mail" label-for="login-email">
          <b-form-input
            autocomplete="username-email"
            id="login-email"
            type="text"
            v-model="username"
            placeholder="Enter e-mail"
            ref="email"
          />
        </b-form-group>
        <b-form-group label="Password" label-for="login-password">
          <b-form-input
            autocomplete="current-password"
            type="password"
            v-model="password"
            placeholder="Enter password"
            id="login-password"
          />
        </b-form-group>
        <b-btn class="mt-3" variant="success" @click="loginClick">Login</b-btn>
      </b-form>
    </div>
  </div>
</template>

<script>
import { login, updateToken } from "$c/api";
import Cookies from "js-cookie";
import { getToken, setToken, tokenToStore } from "$c/token";
export default {
  data() {
    return {
      username: "",
      password: "",
      message: ""
    };
  },
  mounted() {
    this.$refs.email.focus();
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    async loginClick() {
      const { username, password } = this;
      try {
        this.message = "";
        const tokenInfo = (await login(username, password)).data;
        const { token, validTo } = tokenInfo;
        const date = new Date(validTo);
        date.toLocaleString("en");
        Cookies.set("token", token, { expires: date });
        updateToken(token);
        tokenToStore(this);
        this.$router.push({ path: "/" });
      } catch (error) {
        this.message = "Login or password incorrect";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.register {
  display: flex;
  align-items: center;
  justify-content: center;
  &__wrapper {
    text-align: left;
  }
}
input {
  display: block;
}
</style>
