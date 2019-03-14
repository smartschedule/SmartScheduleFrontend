<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <div v-if="buddies.length===0">You have no friends loser</div>
        <b-tabs v-else>
          <b-tab title="Friends">
            <b-table :items="buddies" @row-clicked="item => {selectedBuddy=item}"/>
          </b-tab>
          <b-tab title="Sent requests"></b-tab>
          <b-tab title="Received requests"></b-tab>
          <b-tab title="Blocked"></b-tab>
        </b-tabs>
        <b-modal v-if="selectedBuddy" :visible="!!selectedBuddy" @hidden="selectedBuddy=null">
          {{selectedBuddy.name}}
          <template slot="modal-footer">
            <b-btn variant="danger">Remove</b-btn>
          </template>
        </b-modal>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  getFriendsList,
  getCurrentUsersFriendRequests,
  getPendingUserFriendRequests,
  getBlockedUsers
} from "$c/api";
export default {
  async data() {
    return {
      buddies: await getFriendsList(),
      receivedBuddyRequests: await getCurrentUsersFriendRequests(),
      sentBuddyRequests: await getPendingUserFriendRequests(),
      blockedUsers: await getBlockedUsers(),
      selectedBuddy: null
    };
  },
  mounted() {}
};
</script>

<style lang="scss">
</style>
