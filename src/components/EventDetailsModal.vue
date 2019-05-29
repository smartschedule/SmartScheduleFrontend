<template>
  <div>
    <b-modal
      size="lg"
      :visible="visible"
      @hidden="$emit('clear')"
      title="Event details"
      @shown="modalShown"
    >
      <b-container class="text-left">
        <b-row>
          <b-col>{{event.title}}</b-col>
        </b-row>
        <b-row>
          <b-col>Time: {{event.start}} - {{event.end}}</b-col>
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
              :latitude="event.latitude"
              :longitude="event.longitude"
              :hide-header="true"
              language="en"
              units="si"
            />
          </b-col>
        </b-row>
        <div class="foobar1">
          <l-map :center="center" :zoom="13" ref="mymap">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="center"></l-marker>
          </l-map>
        </div>
      </b-container>

      <template slot="modal-footer">
        <b-btn variant="danger" @click="deleteEventLocal(event.id)">Delete</b-btn>
      </template>
    </b-modal>
  </div>
</template>

<script>
import * as moment from "moment";
import { LMap, LMarker, LTileLayer } from "vue2-leaflet";
import { deleteEvent } from "./api";
import "vue-weather-widget/dist/css/vue-weather-widget.css";
import VueWeatherWidget from "vue-weather-widget";

export default {
  data() {
    return {
      center: L.latLng(event.latitude, event.longitude),
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
    },
    modalShown() {
      console.log(this.$refs.mymap.mapObject);
      setTimeout(() => {
        this.$refs.mymap.mapObject.invalidateSize();
      }, 100);
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
.foobar1 {
  width: 100%;
  height: 400px;
}
</style>
