<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100 px-5 py-5">

        <div v-if="userInfo">You are already logged in</div>

        <form v-else class="login100-form validate-form flex-sb flex-w px-4 py-2">
          <span class="login100-form-title pb-4">
            Recover account
          </span>
          <p class="pb-4 text-left">Enter the email address of the account to which you want to recover access</p>
          <span class="txt1 pb-2">e-mail</span>
          <div
            class="wrap-input100 validate-input mb-4"
            v-bind:class="[validateError ? 'alertValidate' : '']"
            data-validate="e-mail not found">
            <input
              class="input100"
              autocomplete="username-email"
              id="login-email"
              type="text"
              v-model="email"
              ref="email"
            >
            <span class="focus-input100"></span>
          </div>

          <div class="container-login100-form-btn pt-3">
            <b-btn class="login100-form-btn" variant="success" @click="loginClick">Submit</b-btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: "",
      validateError: false
    };
  },
  methods: {
    async loginClick() {
      try {
       
      } catch (error) {
        this.validateError = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">

@import './loginRegisterForm.scss';
</style>
