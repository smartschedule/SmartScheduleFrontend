<template>
  <div class="calendar">
    <Events :events="events" :currentDate="current"/>
    <div class="side">
      <div class="monthpicker">
        <span class="arrow" @click="() => incrementMonth(-1)"><</span>
        <span>{{getMonthYearString}}</span>
        <span class="arrow" @click="()=> incrementMonth(1)">></span>
      </div>
      <div class="days">
        <div
          v-for="day in days"
          :key="day"
          class="day"
          :class="{'day--current': day === current.day && selectedMonth === current.month }"
          @click="() => {current.day = day}"
        >{{day}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Events from "./Events";
import placeholderData from "./events.js";
export default {
  components: { Events },
  data() {
    return {
      selectedMonth: null,
      selectedYear: null,
      events: placeholderData
    };
  },
  props: {
    days: {
      type: Array,
      required: true
    },
    current: {
      //day month year numerically
      type: Object,
      required: true
    }
  },
  mounted() {
    const { month, year } = this.current;
    this.selectedMonth = month;
    this.selectedYear = year;
  },
  computed: {
    getMonthYearString() {
      const { month: m, day: d, year: y } = this.current;
      const date = new Date(this.selectedYear, this.selectedMonth - 1, d);
      return date.toLocaleString("en-GB", {
        month: "long",
        year: "numeric"
      });
    },
    getCurrentDate() {
      const { month: m, day: d, year: y } = this.current;
      const date = new Date(y, m, d);
      return date.toLocaleString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    }
  },
  methods: {
    incrementMonth(value) {
      const { selectedMonth: x } = this;
      if (x + value > 12) {
        this.selectedYear += 1;
        this.selectedMonth = 1;
      } else if (x + value < 1) {
        this.selectedYear -= 1;
        this.selectedYMonth = 12;
      }
      this.selectedMonth += value;
    }
  }
};
</script>

<style lang="scss">
.calendar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 600px;
}
.monthpicker {
  color: white;
  display: flex;
  justify-content: space-between;
  user-select: none;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 50px;
  transition: all 200ms ease-out;
  .arrow {
    color: rgba(255, 255, 255, 0.6);
    font-size: 20px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
    transition: all 200ms ease-out;

    &:hover {
      color: rgba(255, 255, 255, 0.3);
    }
  }
}
.side {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  background: #605f6f;
  justify-content: flex-start;
  align-content: center;
  padding-left: 20px;
  padding-right: 20px;
}
.days {
  display: inline-flex;
  flex-wrap: wrap;
  flex: 0 0 1;
  align-items: flex-start;
  align-content: flex-start;
  width: 280px;
}
.day {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
  transition: 150ms all ease-in;
  border-radius: 35%;
  &--current {
    background-color: #4964d6;
    border-radius: 50%;
  }
  &:hover {
    background-color: gray;
    border-radius: 50%;
  }
  user-select: none;
}
</style>
