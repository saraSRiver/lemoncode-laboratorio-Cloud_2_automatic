<template>
  <div v-if="member">
    <h1>{{ member.name }}</h1>
    <img :src="member.avatar_url" :alt="member.login" width="100" />
    <p><strong>Id:</strong> {{ member.id }}</p>
    <p><strong>Organization:</strong> {{ organization }}</p>
    <p><strong>Email:</strong> {{  member.email }}</p>
    <p><strong>Bio:</strong> {{ member.bio }}</p>
    <router-link to="/">Back to list</router-link>
  </div>
  <div v-else>
    <p>Loading member details...</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      member: null,
    };
  },
  computed: {
    ...mapState(['organization']),
  },
  async created() {
    const username = this.$route.params.username;
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`Error fetching member details: ${response.statusText}`);
      }
      const data = await response.json();
      this.member = data; // Guardamos la información del miembro
    } catch (error) {
      console.error("Error fetching member details:", error);
    }
  },
};
</script>