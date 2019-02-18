<template>
  <div>
    <b-modal ok-only @hidden="$emit('hidden')" :visible="visible">Name
      <b-input type="text" placeholder="Calendar name"/>Buddies
      <b-form-select multiple :options="buddies"/>
      <template slot="modal-footer">
        <b-btn variant="success">Add</b-btn>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buddies: ["Jarosz", "Jeffrey"]
    };
  },
  props: {
    visible: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
</style>
