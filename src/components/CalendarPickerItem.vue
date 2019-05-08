<template>
  <b-list-group-item @click="$emit('click')">
    <div v-if="!isEditModeEnabled">{{name}}</div>
    <div v-else>
      <b-input v-model="editModeName"/>
    </div>
    <div v-if="!isEditModeEnabled" style="margin-left: auto">
      <b-btn size="sm" @click="isEditModeEnabled=true">&#128295;</b-btn>
      <b-btn size="sm" class="ml-2" @click="deleteCalendarClick(id)">&#10060;</b-btn>
    </div>
    <div v-else>
      <b-btn
        size="sm"
        class="ml-2"
        @click="$emit('update', id, editModeName); isEditModeEnabled=false"
        variant="success"
      >OK</b-btn>
    </div>
  </b-list-group-item>
</template>

<script>
import { UpdateCalendar } from "./api.js";
export default {
  data() {
    return {
      isEditModeEnabled: false,
      editModeName: this.name
    };
  },
  props: {
    name: String,
    id: Number
  }
};
</script>

<style lang="scss" scoped>
</style>
