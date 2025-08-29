import { createStore } from 'vuex';

export default createStore({
  state: {
    members: [],
    organization: 'Lemoncode',
  },
  mutations: {
    setMembers(state, members) {
      state.members = members;
    },
    setOrganization(state, organization) {
      state.organization = organization;
    },
  },
  actions: {
    async fetchMembers({ commit }, organization) {
      try {
       // const response = await get(`https://api.github.com/orgs/${organization}/members`);
       // commit('setMembers', response.data);
      } catch (error) {
        commit('setMembers', []);
        throw new Error('Organization not found');
      }
    },
  },
});