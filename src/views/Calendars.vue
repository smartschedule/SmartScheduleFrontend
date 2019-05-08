<template>
  <div>
    <b-container fluid v-if="$store.state.userInfo">
      <b-row class="mt-3">
        <b-col sm="3" lg="2" class="row-equal">
          <CalendarPicker
            v-model="selectedCalendarId"
            :calendars="calendars"
            @add="getCalendarsMethod()"
            @refresh-calendar="getCalendarsMethod()"
          />
        </b-col>
        <b-col sm="9" lg="10" class="pl-sm-0">
          <div class="d-flex">
            <Calendar
              @refresh-events="getEventsMethod()"
              :events="eventsFromSelectedCalendar"
              @addevent="() =>{ addEventsVisible = true; getEventsMethod();}"
            />
          </div>
          <AddEvent
            @close="()=>addEventsVisible=false"
            :visible="addEventsVisible"
            :calendarId="selectedCalendarId"
            @addevent="getEventsMethod()"
          />
        </b-col>
      </b-row>
    </b-container>
    <div v-else>Please log in</div>
  </div>
</template>

<script>
import CalendarPicker from "$c/CalendarPicker";
import Calendar from "$c/Calendar";
import AddEvent from "$c/AddEvent";
import { events } from "$c/helpers.js";
import { getCalendars, getEvents } from "../components/api.js";

export default {
  data() {
    return {
      events,
      calendars: [],
      addEventsVisible: false,
      selectedCalendarId: 0
    };
  },
  methods: {
    async getCalendarsMethod() {
      this.calendars = await getCalendars();
      this.selectedCalendarId = this.calendars[0].id;
    },
    async getEventsMethod() {
      this.events = await getEvents();
    }
  },
  async mounted() {
    this.getCalendarsMethod();
    this.getEventsMethod();
  },
  components: { Calendar, AddEvent, CalendarPicker },
  computed: {
    eventsFromSelectedCalendar() {
      return this.events.filter(x => x.calendarId === this.selectedCalendarId);
    }
  }
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
  [class*="col-"]:not(:first-child) {
    margin-top: 15px;
  }
}
</style>
