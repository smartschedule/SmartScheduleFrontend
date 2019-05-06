<template>
  <div>
    <b-modal
      ok-only
      @hidden="$emit('hidden')"
      :visible="visible"
      title="Add calendar"
      class="text-left"
    >
      <span class="font-weight-bold">Calendar name:</span>
      <b-input class="mb-3" type="text" v-model="name" placeholder="Calendar name"/>

      <!-- <span class="font-weight-bold">Friends:</span>
      <b-form-select class="mb-3" multiple :options="buddies"/>-->

      <template slot="modal-footer">
        <b-btn variant="success" @click="addCalendar()">Add</b-btn>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { createCalendar } from "./api.js";
export default {
  data() {
    return {
      name: "",
      colorHex: "afafaf",
      userId: this.$store.userInfo
    };
  },
  methods: {
    async addCalendar() {
      const { name, colorHex, userId } = this;
      await createCalendar(name, colorHex, userId);
      this.$emit("add");
      this.$emit("hidden");
    }
  },
  props: {
    visible: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
</style>
