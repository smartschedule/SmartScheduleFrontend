<template>
  <b-container>
    <b-col>
      <b-tabs>
        <b-tab title="Friends">
          <b-table :items="buddies" v-bind="tableCommon">
            <template slot="options" slot-scope="row">
              <b-btn variant="success" size="sm" class="m-1">Accept</b-btn>
              <b-btn variant="danger" size="sm">Reject</b-btn>
            </template>
          </b-table>
        </b-tab>
        <b-tab title="Sent requests">
          <b-table :items="sentBuddyRequests" v-bind="tableCommon"></b-table>
        </b-tab>
        <b-tab title="Received requests">
          <b-table :items="receivedBuddyRequests" v-bind="tableCommon">
            <template slot="options" slot-scope="row">
              <b-btn variant="success" size="sm" class="m-1">Accept</b-btn>
              <b-btn variant="danger" size="sm">Reject</b-btn>
            </template>
          </b-table>
        </b-tab>
        <b-tab title="Blocked">
          <b-table :items="blockedUsers" v-bind="tableCommon">
            <template slot="options" slot-scope="row">
              <b-btn variant="danger" size="sm">Unblock</b-btn>
            </template>
          </b-table>
          <b-input placeholder="Search users to block"></b-input>
        </b-tab>
      </b-tabs>
      <b-modal v-if="selectedBuddy" :visible="!!selectedBuddy" @hidden="selectedBuddy=null">
        {{selectedBuddy.name}}
        <template slot="modal-footer">
          <b-btn variant="danger">Remove</b-btn>
        </template>
      </b-modal>
    </b-col>
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
  data() {
    return {
      buddies: [],
      receivedBuddyRequests: [],
      sentBuddyRequests: [],
      blockedUsers: [],
      selectedBuddy: null
    };
  },
  computed: {
    tableCommon() {
      return {
        "show-empty": true,
        fields: ["email", "options"]
      };
    }
  },
  async mounted() {
    let buddies = await getFriendsList();
    let receivedBuddyRequests = await getCurrentUsersFriendRequests();
    let sentBuddyRequests = await getPendingUserFriendRequests();
    let blockedUsers = await getBlockedUsers();
    this.buddies = buddies;
    this.receivedBuddyRequests = receivedBuddyRequests;
    this.sentBuddyRequests = sentBuddyRequests;
    this.blockedUsers = blockedUsers;
  }
};
</script>

<style lang="scss">
</style>
