<template>
  <div class="buddy-list">
    <div
      v-for="{name, id} in buddies"
      :key="id"
      @click="$emit('input', id)"
      class="buddy-list__buddy"
      :class="{'buddy-list__buddy--picked': value===id}"
    >{{name}}</div>
  </div>
</template>

<script>
import { getFriendsList } from "$c/api";
export default {
  props: {
    buddies: {
      type: Array,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  async mounted() {
    try {
      this.buddies = (await getFriendsList()).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss">
.buddy-list {
  cursor: pointer;
  display: inline-block;
  text-align-last: left;
  padding: 20px;
  width: 200px;
  &__buddy {
    &--picked {
      background-color: red;
    }
  }
}
</style>
