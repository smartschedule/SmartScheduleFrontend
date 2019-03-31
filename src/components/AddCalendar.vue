<template>
  <div>
    <b-modal ok-only @hidden="$emit('hidden')" :visible="visible" title="Add calendar" class="text-left">
      <span class="font-weight-bold">Calendar name:</span>
      <b-input class="mb-3" type="text" placeholder="Calendar name"/>
      
      <span class="font-weight-bold">Friends:</span>
      <b-form-select class="mb-3" multiple :options="buddies"/>

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
