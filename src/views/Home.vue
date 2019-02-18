<template>
  <div>
    <div class="calendar-container">
      <CalendarPicker v-model="selectedCalendarId" :calendars="[{name: 'xd', id: 5}]"/>
      <Calendar :events="events" @addevent="() => addEventsVisible = true"/>
    </div>
    <AddEvent @close="()=>addEventsVisible=false" :visible="addEventsVisible"/>
  </div>
</template>

<script>
import CalendarPicker from "$c/CalendarPicker";
import Calendar from "$c/Calendar";
import AddEvent from "$c/AddEvent";
import { events } from "$c/helpers.js";

export default {
  data() {
    return {
      events,
      addEventsVisible: false,
      selectedCalendarId: 0
    };
  },
  components: { Calendar, AddEvent, CalendarPicker }
};
</script>

<style lang="scss">
.calendar-container {
  display: flex;
}
.calendar-wrapper {
  height: 100%;
}
</style>
