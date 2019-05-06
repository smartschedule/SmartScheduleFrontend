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
            <LMap ref="map"/>
          </b-col>
        </b-row>
      </b-container>

      <template slot="modal-footer">
        <b-btn variant="danger" @click="$emit('clear')">Delete</b-btn>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { LMap, LMarker } from "vue2-leaflet";
export default {
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
    deleteEvent(id) {
      //something here later
    }
  },
  components: {
    LMap,
    LMarker
  }
};
</script>

<style lang="scss">
</style>
