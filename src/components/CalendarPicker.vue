<template>
  <div class="calendar-picker px-4 py-3">
    <div class="mb-3">
      <b>Calendars</b>
      <b-btn size="sm" variant="success" class="ml-2" @click="isAddVisible=true">Add</b-btn>
    </div>
    <CalendarPickerItem
      v-for="{name, id} in calendars"
      :name="name"
      :key="id"
      :id="id"
      @click="$emit('input', id)"
      @update="(id,name) => updateCalendarInstance(id,name)"
      class="calendar-picker__calendar"
      :class="{'active': value===id}"
    />
    <b-list-group class="calendar-row">
      <AddCalendar :visible="isAddVisible" @hidden="isAddVisible=false" @add="$emit('add')"/>
    </b-list-group>
  </div>
</template>

<script>
import AddCalendar from "./AddCalendar";
import CalendarPickerItem from "./CalendarPickerItem";
import { deleteCalendar, updateCalendar } from "./api.js";
export default {
  data() {
    return {
      isAddVisible: false,
      calendarId: null
    };
  },
  components: { AddCalendar, CalendarPickerItem },
  methods: {
    async deleteCalendarClick(id) {
      await deleteCalendar(id);
      this.$emit("refresh-calendar");
    },
    async updateCalendarInstance(id, name) {
      await updateCalendar(id, name);
      this.$emit("refresh-calendar");
    }
  },
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
    display: flex;
  }
}
</style>
