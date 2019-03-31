<template>
  <b-modal :visible="visible" @hidden="$emit('close')" ok-only title="Add event" class="text-left">
    <span class="font-weight-bold">Event name:</span>
    <b-input class="mb-3" type="text" placeholder="Event name (eg. John's birthday)"/>

    <span class="font-weight-bold">Event date:</span>
    <b-input class="mb-3" type="date" placeholder="Event date"/>

    <span class="font-weight-bold">Event duration:</span>
    <div class="splitter mb-3">
      <span class="font-weight-normal">From:</span>
      <b-input class="inline" type="time"/>
      <span class="font-weight-normal">To:</span>
      <b-input class="inline" type="time"/>
    </div>
    
    <span class="font-weight-bold">Event color:</span>
    <b-input class="mb-3" type="color"/>
  </b-modal>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
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
