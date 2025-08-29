import { memberService } from "@/services/memberService";
import { createStore } from "vuex";

export default createStore({
  state: {
    members: [],
    organization: 'Lemoncode',
  },
  mutations: {
    setOrganization(state, organization) {
      state.organization = organization;
    },
    setMembers(state, members) {
      state.members = members;
    },
  },
  actions: {
     async fetchMembers({ commit }, organization) {
      try {
        const members = await memberService.getMembers(organization);
        commit('setMembers', members);
        commit('setOrganization', organization);
      } catch (error) {
        commit('setMembers', []);
        throw new Error('Organization not found');
      }
    },
  },
});