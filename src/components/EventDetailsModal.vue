<template>
  <div>
    <b-modal size="lg" :visible="visible" @hidden="$emit('clear')" title="Event details">
      <b-container class="text-left">
        <b-row>
          <b-col>{{event.name}}</b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col>Date: {{event.day}}/{{event.month}}/{{event.year}}</b-col>
        </b-row>
        <b-row>
          <b-col>Time: {{event.from}} - {{event.to}}</b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="badge badge-primary text-wrap">This text should wrap.</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <weather
              api-key="d446f4d8685236e5d73272500e77b112"
              title="Weather"
              latitude="24.886436"
              longitude="91.880722"
              language="en"
              units="uk"
            />
          </b-col>
        </b-row>
      </b-container>

      <template slot="modal-footer">
        <b-btn variant="danger" @click="deleteEventLocal(event.id)">Delete</b-btn>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { LMap, LMarker, LTileLayer } from "vue2-leaflet";
import { deleteEvent } from "./api";
import "vue-weather-widget/dist/css/vue-weather-widget.css";
import VueWeatherWidget from "vue-weather-widget";

export default {
  data() {
    return {
      center: L.latLng(47.1, 47.2),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  props: {
    visible: {
      type: Boolean
    },
    event: {
      required: true,
      type: Object
    }
  },
  methods: {
    async deleteEventLocal(id) {
      await deleteEvent(id);
      this.$emit("refresh");
      this.$emit("clear");
    }
  },
  computed: {
    whatever() {
      if (visible == true) this.$refs.map.invalidateSize();
    }
  },
  components: {
    weather: VueWeatherWidget,
    LMap,
    LMarker,
    LTileLayer
  }
};
</script>

<style lang="scss">
</style>
