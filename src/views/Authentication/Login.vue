<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100 px-5 py-5">

        <!-- <div class="register">
          <div class="register__wrapper">
            <div class="error">{{message}}</div>
            <div v-if="userInfo">You are already logged in</div>
            <b-form v-else>
              <b-form-group
                description="example: you@gmail.com"
                label="E-mail"
                label-for="login-email"
              >
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
        </div> -->

        <div v-if="userInfo">You are already logged in</div>

        <form v-else class="login100-form validate-form flex-sb flex-w px-4 py-2">
          <span class="login100-form-title pb-5">Account Login</span>

          <span class="txt1 pb-2">Username</span>
          <!-- <span class="txt1 pb-2">
            <div class="error">{{message}}</div>
          </span> -->
          <div
            class="wrap-input100 validate-input mb-4"
            v-bind:class="[validateError ? 'alertValidate' : '']"
            data-validate="Username is incorrect">
            <input
              class="input100"
              autocomplete="username-email"
              id="login-email"
              type="text"
              v-model="username"
              ref="email"
            >
            <span class="focus-input100"></span>
          </div>

          <span class="txt1 pb-2">Password</span>
          <div
            class="wrap-input100 validate-input mb-3"
            v-bind:class="[validateError ? 'alertValidate' : '']"
            data-validate="Password is incorrect"
          >
            <span class="btn-show-pass" @click="switchVisibility">
              <i class="fa fa-eye"></i>
            </span>
            <input
              class="input100"
              autocomplete="current-password"
              :type="passwordFieldType"
              v-model="password"
            >
            <span class="focus-input100"></span>
          </div>

          <div class="flex-sb-m w-full pb-5">
            <div class="contact100-form-checkbox">
              <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
              <label class="label-checkbox100" for="ckb1">Remember me</label>
            </div>

            <div>
              <a href="#/forgotten-password" class="txt3">Forgot Password?</a>
            </div>
          </div>

          <div class="container-login100-form-btn">
            <b-btn class="login100-form-btn" variant="success" @click="loginClick">Login</b-btn>
          </div>
        </form>
      </div>
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
      username: "test@test.com",
      password: "test1234",
      message: "",
      validateError: false,
      passwordFieldType: 'password'
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
        this.validateError = true;
      }
    },
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
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

@import './loginRegisterForm.scss';
</style>
