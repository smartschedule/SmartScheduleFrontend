<template>
  <div>
    <Calendar :days="days" :current="current"/>
  </div>
</template>

<script>
import Calendar from "../components/Calendar";
export default {
  data() {
    return {
      days: [...Array(30).keys()].map(x => x + 1),
      current: {
        day: 20,
        month: 5,
        year: 2018
      }
    };
  },
  components: { Calendar }
};
</script>

<style lang="scss">
</style>
