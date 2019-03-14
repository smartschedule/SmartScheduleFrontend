<template>
  <div>
    <b-modal :visible="visible" @hidden="$emit('clear')" title="Event details">
      <b-table stacked :items="[ event ]"/>
      <template slot="modal-footer">
        <b-btn variant="danger" @click="$emit('clear')">Delete</b-btn>
      </template>
    </b-modal>
  </div>
</template>

<script>
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
  }
};
</script>

<style lang="scss">
</style>
