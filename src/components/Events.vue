<template>
  <div class="events">
    <div class="header">
      <b-container>
        <b-row align-h="between">
          <b-col cols="auto" class="mt-1">{{dateHeader}}</b-col>
              <i class="fa fa-eye"></i>
          <b-col cols="auto">
            <b-button-group>
              <b-dropdown size="sm" right variant="warning" text="View">
                <b-dropdown-item>Day</b-dropdown-item>
                <b-dropdown-item>Week</b-dropdown-item>
              </b-dropdown>
              <b-btn size="sm" variant="success" @click="$emit('addevent')">Add Event</b-btn>
            </b-button-group>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="foo mt-2 border-top border-bottom">
      <div class="timeline">
        <div v-for="x in twentyFour" :key="x">{{x}}</div>
      </div>
      <div class="time">
        <div
          class="event"
          v-for="{id, name, from, to, color} in events"
          :key="id"
          @click="selectedEvent={name,from,to,color}"
          :style="`height: ${(to-from)*25}px; background-color: ${color}5a; margin-top: ${from*25}px;`"
        >
          <span :style="`background-color: ${color}`" class="event-thing">aaa</span>
          <span class="event-text">{{name}}</span>
        </div>
      </div>
    </div>
    <EventDetails
      :event="selectedEvent"
      :visible="!isEqualInstance(selectedEvent, {})"
      @clear="selectedEvent={}"
    />
  </div>
</template>

<script>
import EventDetails from "./EventDetailsModal.vue";
import { isEqual } from "lodash";
export default {
  data() {
    return {
      selectedEvent: {}
    };
  },
  components: { EventDetails },
  props: {
    events: {
      type: Array,
      required: true
    },
    currentDate: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateHeader() {
      const { month: m, day: d, year: y } = this.currentDate;
      const date = new Date(y, m, d);
      return date.toLocaleString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    },
    twentyFour() {
      return [...Array(24).keys()].map(x => `${x}:00`);
    }
  },
  methods: {
    isEqualInstance(x, y) {
      return isEqual(x, y);
    }
  }
};
</script>

<style lang="scss">
.events {
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 40px;
}
.foo {
  display: flex;
  flex-direction: row;
}
.header {
  font-weight: 800;
  text-align: left;
}
.time {
  position: relative;
  margin-left: 10px;
  width: 100%;
}
.timeline {
  position: relative;
  width: 50px;
  text-align: right;
  user-select: none;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.3);
}
.event {
  font-size: 100%;
  text-align: left;
  opacity: 10%;
  display: flex;
  align-items: center;
  &-thing {
    width: 5px;
    margin-right: 20px;
    color: transparent;
    display: inline-block;
    height: 100%;
  }
}
</style>
