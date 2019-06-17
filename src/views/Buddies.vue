<template>
  <b-container class="mt-4">
    <b-col v-if="$store.state.userInfo">
      <div>
        <!-- Tabs with card integration -->
        <b-card no-body>
          <b-tabs small card>
            <b-tab title="Friend Search">
              <b-input v-model="friendSearch" class="mb-2" placeholder="Search friends"/>
              <b-table
                small
                outlined
                responsive
                striped
                hover
                :items="foundFriends"
                v-bind="tableCommon"
              >
                <template slot="options" slot-scope="{item: {id}}">
                  <b-btn
                    variant="success"
                    size="sm"
                    @click="createFriendRequest(id); allUsers = removeFrom(allUsers, id)"
                  >Add</b-btn>
                </template>
              </b-table>
            </b-tab>

            <b-tab title="Friends">
              <b-table
                small
                outlined
                responsive
                striped
                hover
                :items="buddies"
                v-bind="tableCommon"
              >
                <template slot="options" slot-scope="{item: {id}}">
                  <b-btn
                    variant="danger"
                    size="sm"
                    @click=" removeFriend(id); buddies = removeFrom(buddies, id)"
                  >Remove</b-btn>
                </template>
              </b-table>
            </b-tab>

            <b-tab title="Sent">
              <b-table
                small
                outlined
                responsive
                striped
                hover
                :items="sentBuddyRequests"
                v-bind="tableCommon"
              ></b-table>
            </b-tab>

            <b-tab title="Received">
              <b-table
                small
                outlined
                responsive
                striped
                hover
                :items="receivedBuddyRequests"
                v-bind="tableCommon"
              >
                <template slot="options" slot-scope="{item: {id}}">
                  <b-btn
                    variant="success"
                    size="sm"
                    class="m-1"
                    @click="() => {acceptFriend(id); receivedBuddyRequests=removeFrom(receivedBuddyRequests, id );}"
                  >Accept</b-btn>
                  <b-btn
                    variant="danger"
                    size="sm"
                    @click="() => {rejectFriend(id); receiveBuddyRequests = removeFrom(receivedBuddyRequests=removeFrom(receivedBuddyRequests, id))}"
                  >Reject</b-btn>
                </template>
              </b-table>
            </b-tab>

            <b-tab title="Blocked">
              <b-input class="mb-2" placeholder="Search users to block"></b-input>

              <b-table
                small
                outlined
                responsive
                striped
                hover
                :items="blockedUsers"
                v-bind="tableCommon"
              >
                <template slot="options" slot-scope="{item:{id}}">
                  <b-btn
                    variant="danger"
                    size="sm"
                    @click="() => {unblockUser(id); blockedUsers = removeFrom(blockedUsers, id)}  "
                  >Unblock</b-btn>
                </template>
              </b-table>
            </b-tab>

            <b-tab title="Blocked Search">
              <b-input v-model="friendSearch" class="mb-2" placeholder="Search friends"/>
              <b-table
                small
                outlined
                responsive
                striped
                hover
                :items="foundFriends"
                v-bind="tableCommon"
              >
                <template slot="options" slot-scope="{item: {id}}">
                  <b-btn
                    variant="danger"
                    size="sm"
                    @click="blockUser(id); allUsers = removeFrom(allUsers, id)"
                  >Block</b-btn>
                </template>
              </b-table>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>

      <b-modal v-if="selectedBuddy" :visible="!!selectedBuddy" @hidden="selectedBuddy=null">
        {{selectedBuddy.name}}
        <template slot="modal-footer">
          <b-btn variant="danger">Remove</b-btn>
        </template>
      </b-modal>
    </b-col>
    <div v-else>Please log in</div>
  </b-container>
</template>

<script>
import {
  getFriendsList,
  getCurrentUsersFriendRequests,
  getPendingUserFriendRequests,
  getBlockedUsers,
  acceptFriend,
  rejectFriend,
  createFriendRequest,
  blockUser,
  unblockUser,
  removeFriend,
  getAllUsers
} from "$c/api";
export default {
  data() {
    return {
      friendSearch: "",
      allUsers: [],
      buddies: [],
      receivedBuddyRequests: [],
      sentBuddyRequests: [],
      blockedUsers: [],
      selectedBuddy: null
    };
  },
  computed: {
    foundFriends() {
      const {
        sentBuddyRequests,
        receivedBuddyRequests,
        buddies,
        allUsers,
        friendSearch,
        blockedUsers
      } = this;
      const removeThese = [].concat(
        sentBuddyRequests.map(x => x.id),
        receivedBuddyRequests.map(x => x.id),
        buddies.map(x => x.id),
        blockedUsers.map(x => x.id)
      );
      return allUsers.filter(
        x => removeThese.indexOf(x.id) === -1 && x.email.includes(friendSearch)
      );
    },
    tableCommon() {
      return {
        "show-empty": true,
        fields: [
          {
            key: "id",
            label: "ID",
            sortable: true
          },
          {
            key: "name",
            label: "Full name",
            sortable: true
          },
          {
            key: "email",
            label: "e-mail",
            sortable: true
          },
          {
            key: "options",
            label: "Actions",
            sortable: false
          }
        ]
      };
    }
  },
  async mounted() {
    let buddies = await getFriendsList();
    let receivedBuddyRequests = await getPendingUserFriendRequests();
    let sentBuddyRequests = await getCurrentUsersFriendRequests();
    let blockedUsers = await getBlockedUsers();
    this.buddies = buddies;
    this.receivedBuddyRequests = receivedBuddyRequests;
    this.sentBuddyRequests = sentBuddyRequests;
    this.blockedUsers = blockedUsers;
    this.allUsers = await getAllUsers();
  },
  methods: {
    removeFriend,
    createFriendRequest,
    rejectFriend,
    blockUser,
    async acceptFriend(id) {
      acceptFriend(id);
      this.buddies = await getFriendsList();
    },
    removeFrom(array, id) {
      return array.filter(x => x.id !== id);
    }
  }
};
</script>

<style lang="scss">
</style>
