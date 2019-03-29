<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100 px-5 py-5">
        <div v-if="userInfo">You are already logged in</div>

        <form v-else class="login100-form validate-form flex-sb flex-w px-4 py-2">
          <span class="login100-form-title pb-5">Register account</span>

          <span class="txt1 pb-2">Username</span>
          <!-- <span class="txt1 pb-2">
            <div class="error">{{message}}</div>
          </span>-->
          <div
            class="wrap-input100 validate-input mb-4"
            v-bind:class="[validateError ? 'alertValidate' : '']"
            data-validate="Username is incorrect">
            <input class="input100" id="login-email" type="text" v-model="username">
            <span class="focus-input100"></span>
          </div>

          <span class="txt1 pb-2">e-mail</span>

          <div
            class="wrap-input100 validate-input mb-4"
            v-bind:class="[emailInUse ? 'alertValidate' : '']"
            data-validate="e-mail in use">
            <input class="input100" id="login-email" type="text" v-model="email" ref="email">
            <span class="focus-input100"></span>
          </div>

   

          <span class="txt1 pb-2 w-100 text-left" >Password
            <div class="validate-input w-100" v-bind:class="[disabled ? 'alertValidate' : '']" data-validate="Passwords does not match">
            </div>
          </span>
          <div class="wrap-input100 mb-3">
            <span class="btn-show-pass" @click="switchVisibility">
              <i class="fa fa-eye"></i>
            </span>
            <input class="input100" :type="passwordFieldType" v-model="password">
            <span class="focus-input100"></span>
          </div>

          <span class="txt1 pb-2">Repeat password</span>
          <div class="wrap-input100 mb-3">
      
            <span class="btn-show-pass" @click="switchVisibility">
              <i class="fa fa-eye"></i>
            </span>
            <input class="input100" :type="passwordFieldType" v-model="confirmpassword">
            <span class="focus-input100"></span>
          </div>

          <div class="container-login100-form-btn pt-3">
            <b-btn
              class="login100-form-btn"
              :disabled="disabled"
              variant="success"
              @click="onRegisterClick"
            >Register</b-btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<script>
import { register } from "$c/api";
import router from "vue-router";
import "$s/error.scss";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      message: "",
      emailInUse: false,
      passwordFieldType: 'password'
    };
  },
  mounted() {
    this.$refs.email.focus();
  },
  methods: {
    async onRegisterClick() {
      try {
        const { email, username, password } = this;
        this.message = "";
        await register(username, email, password);
        this.$router.push({ path: "login" });
      } catch (error) {
        console.log(error);
        this.message = "Email already in use";
        this.emailInUse = true;
      }
    },
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    }
  },
  computed: {
    disabled() {
      return this.password !== this.confirmpassword;
    }
  }
};
</script>

<style scoped lang="scss">
.register {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  &__wrapper {
  }
}
input {
  display: block;
}

@import "./loginRegisterForm.scss";
</style>
