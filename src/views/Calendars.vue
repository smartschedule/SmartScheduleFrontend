<template>
  <b-container fluid>
    <b-row class="mt-3">
      <b-col sm="3" lg="2" class="row-equal">
            <CalendarPicker v-model="selectedCalendarId" :calendars="[{name: 'Test', id: 5}, {name: 'Test2', id: 6}]" />
      </b-col>
      <b-col sm="9" lg="10" class="pl-sm-0">
          <div class="d-flex">
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
@media (min-width: 768px) {
  .row-equal {
    display: flex;
    flex-wrap: wrap;
  }
}

@media (max-width: 575px) { 
  [class*="col-"]:not(:first-child){
      margin-top: 15px;
  }
}
</style>
