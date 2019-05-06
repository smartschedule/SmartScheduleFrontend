<template>
  <div class="calendar-picker px-4 py-3">
    <div class="mb-3">
      <b>Calendars</b>
      <b-btn size="sm" variant="success" class="ml-2" @click="isAddVisible=true">Add</b-btn>
    </div>

    <b-list-group>
      <b-list-group-item
        v-for="{name, id} in calendars"
        :key="id"
        @click="$emit('input', id)"
        class="calendar-picker__calendar"
        :class="{'active': value===id}"
      >{{name}}</b-list-group-item>
      <AddCalendar :visible="isAddVisible" @hidden="isAddVisible=false" @add="$emit('add')"/>
    </b-list-group>
  </div>
</template>

<script>
import AddCalendar from "./AddCalendar";
export default {
  data() {
    return {
      isAddVisible: false
    };
  },
  components: { AddCalendar },
  props: {
    calendars: {
      type: Array,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss">
.calendar-picker {
  display: inline-block;
  text-align-last: left;
  //padding: 20px;
  width: 100%;
  background-color: white;
  &__calendar {
    cursor: pointer;
    padding: 5px;
    border-bottom: 1px solid lightgrey;
    &::before {
      margin-right: 5px;
    }
  }
}
</style>
