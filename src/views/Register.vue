<template>
  <div class="register">
    <div class="register__wrapper">
      <div class="error">{{message}}</div>
      <div v-if="disabled">Passwords do not match</div>
      <b-form>
        <b-form-group description="example: me@gmail.com" label="E-mail">
          <b-form-input v-model="email" placeholder="Enter e-mail" ref="email"/>
        </b-form-group>
        <b-form-group label="Username">
          <b-form-input type="text" v-model="username" placeholder="Enter username"/>
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input type="password" v-model="password" placeholder="Enter password"/>
          <b-form-input type="password" v-model="confirmpassword" placeholder="Repeat password"/>
        </b-form-group>
        <b-btn class="mt-3" :disabled="disabled" @click="onRegisterClick" variant="success">Register</b-btn>
      </b-form>
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
      message: ""
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
      }
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
</style>
