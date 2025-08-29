<template>
  <div>
    <h1>Members of {{ organization }}</h1>
    <input v-model="organizationInput" placeholder="Enter organization name" />
    <button @click="searchMembers">Search</button>
   <div v-if="members && members.length === 0">No members found</div>
    <ul>
      <li v-for="member in members" :key="member.id">
        <router-link :to="{ name: 'MemberDetail', params: { username: member.login }}">
          <img :src="member.avatar_url" :alt="member.login" width="50" />
          {{ member.login }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['members', 'organization']),
    organizationInput: {
      get() {
        return this.organization;
      },
      set(value) {
        this.setOrganization(value);
      },
    },
  },
  methods: {
    ...mapActions(['fetchMembers']),
    ...mapMutations(['setOrganization']),
    searchMembers() {
      this.fetchMembers(this.organizationInput);
    },
  },
  created() {
    this.fetchMembers(this.organization);
  },
};
</script>