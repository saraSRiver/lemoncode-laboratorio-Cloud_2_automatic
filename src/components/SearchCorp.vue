   <template>
    <div>
      <input v-model="corps" class="busqueda" type="text">
      <button @click="buscarMiembros">Buscar miembros</button>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent, PropType, ref , getCurrentInstance } from "vue";
    import { memberService } from '../services/memberService';


    export default defineComponent({
      setup() {
        const corps = ref("lemoncode");

        const buscarMiembros = async () => {
          console.log("el boton funciona")
          const instance = getCurrentInstance();
      if (instance) {
        instance.emit('buscar-miembros');
      }
          try {
            const members = await memberService.getMembers(corps.value);
          } catch (error) {
            console.error('Error al buscar miembros:', error);
          }
        };

        return { corps, buscarMiembros };
      },
    })
  </script>
  
<style scoped>
  .busqueda{
    margin: 10px 15px 30px 0;
  }
  button{
    margin: 10px 0 30px 0;
    background-color: #dbc933;
    font-weight: bold;
  }
</style>