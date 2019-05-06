<template>
  <div>
    <b-modal :visible="visible" @hidden="$emit('clear')" title="Event details">
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
            <l-map :zoom="13" :center="center" ref="map">
              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            </l-map>
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
  components: {
    LMap,
    LMarker,
    LTileLayer
  }
};
</script>

<style lang="scss">
</style>
