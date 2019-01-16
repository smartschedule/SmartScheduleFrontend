<template>
  <div class="events">
    <div class="header">{{dateHeader}}</div>
    <div class="foo">
      <div class="timeline">
        <div v-for="x in twentyFour" :key="x">{{x}}</div>
      </div>
      <div class="time">
        <div
          class="event"
          v-for="{id, name, from, to, color} in events"
          :key="{id}"
          :style="`height: ${(to-from)*25}px; background-color: rgba(${color.r}, ${color.g}, ${color.b}, 0.6); margin-top: ${from*25}px`"
        >
          <span
            :style="`background-color: rgba(${color.r}, ${color.g}, ${color.b}, 1)`"
            class="event-thing"
          >aaa</span>
          <span class="event-text">{{name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  }
};
</script>

<style lang="scss">
.events {
  width: 600px;
  height: 100%;
  background: white;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 40px;
}
.foo {
  display: flex;
  flex-direction: row;
  color: rgba(0, 0, 0, 0.3);
}
.header {
  font-weight: 800;
  text-align: left;
}
.time {
  position: relative;
  margin-left: 10px;
}
.timeline {
  position: relative;
  width: 10px;
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
