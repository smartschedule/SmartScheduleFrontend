<template>
  <b-container fluid>
    <b-row align-v="center" class="my-3">
      <b-col>
          <div flex class="d-flex">
            <CalendarPicker v-model="selectedCalendarId" :calendars="[{name: 'xd', id: 5}]" class="mr-3"/>
            <Calendar :events="events" @addevent="() => addEventsVisible = true"/>
          </div>
          <AddEvent @close="()=>addEventsVisible=false" :visible="addEventsVisible"/>
      </b-col>
    </b-row>
  </b-container>
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
</style>
