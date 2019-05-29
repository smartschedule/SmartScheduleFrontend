<template>
  <div>
    <EventDetailsModal
      v-if="selectedEventId"
      :event="findSelected"
      :visible="true"
      @clear="selectedEventId=null"
    />
    <b-btn
      size="sm"
      variant="success"
      style="float: right;"
      @click="addEventsVisible=true"
    >Add Event</b-btn>
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
            <!-- <Calendar
              @refresh-events="getEventsMethod()"
              :events="eventsFromSelectedCalendar"
              @addevent="() =>{ addEventsVisible = true; getEventsMethod();}"
            />-->
            <FullCalendar
              :events="eventsFromSelectedCalendar"
              @event-selected="eventSelected"
              ref="fullcalendar"
              @day-click="dayClick"
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
import { FullCalendar } from "vue-full-calendar";
import EventDetailsModal from "../components/EventDetailsModal";
import "fullcalendar/dist/fullcalendar.css";

export default {
  data() {
    return {
      events,
      calendars: [],
      addEventsVisible: false,
      selectedCalendarId: 0,
      selectedEventId: null
    };
  },
  methods: {
    async getCalendarsMethod() {
      this.calendars = await getCalendars();
      this.selectedCalendarId = this.calendars[0].id;
    },
    async getEventsMethod() {
      this.events = await getEvents();
    },
    formatEvents(ev) {
      const { startDate: start, endTime: end, name: title, ...rest } = ev;
      return { start, end, title, ...rest };
    },
    dayClick(e) {
      this.$refs.fullcalendar.fireMethod("changeView", "agendaDay", e._d);
    },
    eventSelected(e) {
      this.selectedEventId = e.id;
    }
  },
  async mounted() {
    this.getCalendarsMethod();
    this.getEventsMethod();
  },
  components: {
    Calendar,
    AddEvent,
    CalendarPicker,
    FullCalendar,
    EventDetailsModal
  },
  computed: {
    eventsFromSelectedCalendar() {
      const currentCalendar = this.events.filter(
        x => x.calendarId === this.selectedCalendarId
      );
      return currentCalendar.map(this.formatEvents);
    },
    findSelected() {
      const ev = this.eventsFromSelectedCalendar.find(
        x => this.selectedEventId === x.id
      );
      return ev || {};
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
