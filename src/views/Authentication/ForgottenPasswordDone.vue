<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100 px-5 py-5">

        <div v-if="userInfo">You are already logged in</div>

          <span class="login100-form-title pb-4">
            Recover account
          </span>
          <p v-if="success" class="pb-4 text-left text-success text font-weight-bold">Your password has been successfully changed</p>
          <p v-else class="pb-4 text-left text-danger font-weight-bold">An error occured during passweord reset. Plesae try again</p>

          <div class="container-login100-form-btn pt-3">
            <b-button class="login100-form-btn mr-2 " variant="danger" href="#/">Home</b-button>
            <b-button class="login100-form-btn" variant="success" href="#/login">Login</b-button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      success: true,
      validateError: false
    };
  },
  methods: {
   
  }
};
</script>

<style scoped lang="scss">

@import './loginRegisterForm.scss';
</style>
