<template>
  <b-container class="mt-4">
    <b-row>
      <b-col cols="12">
        <!-- Tabs with card integration -->
        <b-card no-body>
          <b-tabs v-model="tabIndex" small card>
            <b-tab title="General">I'm the first fading tab</b-tab>

            <b-tab title="Authorization" class="text-left">
              <b-container>
                <b-row>
                  <b-col cols="12" md="6">
                    <b-form-group
                      id="input-group-1"
                      label="Email address:"
                      label-for="input-1"
                      v-model="email"
                      description="We'll never share your email with anyone else."
                    >
                      <b-form-input id="input-1" type="email" disabled placeholder="Enter email"></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6">
                    <hr class="d-md-none">
                    <b-form>
                      <b-form-group
                        id="input-group-2"
                        label="Current password:"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          required
                          placeholder="Enter password"
                          type="password"
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group id="input-group-3" label="New password:" label-for="input-3">
                        <b-form-input
                          id="input-3"
                          required
                          placeholder="Enter new password"
                          type="password"
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        id="input-group-4"
                        label="Repeat new password:"
                        label-for="input-4"
                      >
                        <b-form-input
                          id="input-4"
                          required
                          placeholder="Repeat new password"
                          type="password"
                        ></b-form-input>
                      </b-form-group>

                      <b-button-group>
                       <b-button type="reset" variant="danger">Clear</b-button>
                        <b-button type="submit" variant="primary">Change password</b-button>
                      </b-button-group>
                    </b-form>
                  </b-col>
                </b-row>
              </b-container>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>


<script>
export default {
  data() {
    return {
      email: "test@test.com"
    };
  }
};
</script>
