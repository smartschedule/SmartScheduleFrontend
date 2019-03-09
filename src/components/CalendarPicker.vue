<template>
  <div class="calendar-picker">
    <div class="mb-3">
      <b>Calendars</b>
      <b-btn size="sm" variant="success" class="ml-2" @click="isAddVisible=true">Add</b-btn>
    </div>
    <div
      v-for="{name, id} in calendars"
      :key="id"
      @click="$emit('input', id)"
      class="calendar-picker__calendar"
      :class="{'calendar-picker__calendar--picked': value===id}"
    >{{name}}</div>
    <AddCalendar :visible="isAddVisible" @hidden="isAddVisible=false"/>
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
  padding: 20px;
  width: 200px;
  background-color: white;
  &__calendar {
    cursor: pointer;
    padding: 5px;
    border-bottom: 1px solid lightgrey;
    &:hover:not(&--picked) {
      background: lightgray;
      transition: background 0.2s ease-in-out;
    }
    &--picked {
      cursor: default;
      background-color: #605f6f;
      color: whitesmoke;
    }
    &::before {
      margin-right: 5px;
      content: "•";
    }
  }
}
</style>
