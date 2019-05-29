<template>
  <div>
    <b-modal
      :visible="visible"
      @hidden="$emit('close')"
      @ok="addEvent()"
      ok-only
      title="Add event"
      class="text-left"
    >
      <span class="font-weight-bold">Event name:</span>
      <b-input
        class="mb-3"
        type="text"
        v-model="name"
        placeholder="Event name (eg. John's birthday)"
      />

      <span class="font-weight-bold">Event start date:</span>
      <b-input class="mb-3" type="date" v-model="datestart" placeholder="Event date"/>

      <span class="font-weight-bold">Event end date:</span>
      <b-input class="mb-3" type="date" placeholder="Event date" v-model="dateend"/>
      <span class="font-weight-bold">Event duration:</span>
      <div class="splitter mb-3">
        <span class="font-weight-normal">From:</span>
        <b-input class="inline" type="time" v-model="timestart"/>
        <span class="font-weight-normal">To:</span>
        <b-input class="inline" type="time" v-model="timeend"/>
      </div>
      <div>
        Latitude:
        <b-input class="inline" v-model="lat" type="number"/>Longitude:
        <b-input class="inline" v-model="lng" type="number"/>
      </div>
      <span class="font-weight-bold">Event color:</span>
      <b-button
        v-b-modal="'colorpicker-modal'"
        :style="{background: pickedColor}"
        class="ml-2 px-4"
      >Change</b-button>
    </b-modal>
    <b-modal id="colorpicker-modal" size="sm" ok-only title="Choose event color">
      <color-picker
        class="ml-4"
        style="width: 220px; -webkit-box-shadow: none; box-shadow: none;"
        :color="pickedColor"
        theme="light"
        @changeColor="changeColor"
      />
    </b-modal>
  </div>
</template>

<script>
//https://github.com/caohenghu/vue-colorpicker
import colorPicker from "@caohenghu/vue-colorpicker";
import { createEvent } from "./api";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    colorPickerVisible: {
      type: Boolean,
      default: false
    },
    calendarId: Number
  },
  components: {
    colorPicker
  },
  data() {
    return {
      name: "",
      datestart: new Date().toISOString().split("T")[0],
      dateend: new Date().toISOString().split("T")[0],
      timestart: "",
      timeend: "",
      pickedColor: "#59c7f9",
      lat: 0,
      lng: 0
    };
  },
  methods: {
    async addEvent() {
      const {
        datestart,
        dateend,
        timestart,
        timeend,
        name,
        calendarId,
        lat,
        lng
      } = this;
      await createEvent(
        new Date([datestart, timestart].join(" ")).toISOString(),
        new Date([dateend, timeend].join(" ")).toISOString(),
        new Date().toISOString(),
        name,
        7,
        calendarId,
        lat,
        lng
      );
      this.$emit("addevent");
      this.$emit("clear");
    },
    changeColor(color) {
      this.pickedColor = color.rgba.toRgbaString();
    }
  }
};
</script>

<style lang="scss">
.splitter {
  display: flex;
  align-items: baseline;
}
.inline {
  display: inline-block;
  margin: 5px;
}
</style>
