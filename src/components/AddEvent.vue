<template>
  <div>
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
      <b-button v-b-modal="'my-modal'" :style="{background: pickedColor}" class="ml-2">Change</b-button> 
    </b-modal>
    <b-modal id="my-modal" size="sm" ok-only title="Choose event color">
        <color-picker class="ml-4" style="width: 220px;"
            :color="pickedColor"
            theme="dark"
            @changeColor="changeColor"
        />
    </b-modal>
  </div>
</template>

<script>
//https://github.com/caohenghu/vue-colorpicker
import colorPicker from '@caohenghu/vue-colorpicker'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    colorPickerVisible: {
      type: Boolean,
      default: false
    }
  },
  components: {
          colorPicker
      },
  data() {
      return {
          pickedColor: '#59c7f9',
      }
  },
  methods: {
      changeColor(color) {
          this.pickedColor = color.rgba.toRgbaString()
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
