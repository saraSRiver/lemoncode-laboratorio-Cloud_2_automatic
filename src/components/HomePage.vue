<template>
  <div>
   
    <MemberList/>
    <div>
      <h1>{{}}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import SearchCorp from "./SearchCorp.vue";
import MemberList from "./MemberList.vue";

export default defineComponent({
  components: {
    MemberList
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setup() {},
  methods: {
    async buscarMiembros() {
      try {
        //  miembros obtenidos
      } catch (error) {
        console.error('Error al buscar miembros:', error);
      }
    }
  },
});
</script>

<style scoped>
  .home {
    display: block;
    width: 100%;
  }
</style>