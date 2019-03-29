<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100 px-5 py-5">
        <div v-if="userInfo">You are already logged in</div>

        <form v-else class="login100-form validate-form flex-sb flex-w px-4 py-2">
          <span class="login100-form-title pb-5">
            Recover account
          </span>
          <p class="pb-4 text-left">
            Enter new password for account associated with
            <span class="font-weight-bold">{{ email }}</span>
          </p>

          <span class="txt1 pb-2 w-100 text-left" >Password
            <div class="validate-input w-100" v-bind:class="[disabled ? 'alertValidate' : '']" data-validate="Passwords does not match">
            </div>
          </span>
          <div
            class="wrap-input100 mb-3">
            <span class="btn-show-pass" @click="switchVisibility">
              <i class="fa fa-eye"></i>
            </span>
            <input class="input100" :type="passwordFieldType" v-model="password">
            <span class="focus-input100"></span>
          </div>

          <span class="txt1 pb-2">Repeat password</span>
          <div
            class="wrap-input100 mb-3">
            <span class="btn-show-pass"  @click="switchVisibility">
              <i class="fa fa-eye"></i>
            </span>
            <input class="input100" :type="passwordFieldType" v-model="confirmpassword">
            <span class="focus-input100"></span>
          </div>

          <div class="container-login100-form-btn pt-3">
            <b-btn
              class="login100-form-btn"
              :disabled="disabled"
              variant="success">Reset password</b-btn>
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
      password: "",
      confirmpassword: "",
      message: "",
      email: "test@t.pl",
      passwordFieldType: 'password'
    };
  },
  methods: {
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
