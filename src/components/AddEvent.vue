<template>
  <b-modal :visible="visible" @hidden="$emit('close')" ok-only>Event name
    <b-input type="text" placeholder="Event name (eg. John's birthday)"/>Event date
    <b-input type="date" placeholder="Event date"/>Event duration
    <div class="splitter">From
      <b-input class="inline" type="time"/>To
      <b-input class="inline" type="time"/>
    </div>Event color
    <b-input type="color"/>
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
