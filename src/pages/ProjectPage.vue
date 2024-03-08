<template>
    <div>
        <p>This is the projects page.</p>
    </div>
    <div>
    <context-menu v-model:show=show :options=options>
      <context-menu-item label="Home" @click="goToPage('/')" />
      <context-menu-sperator />
      <context-menu-group label="Menu with child">
        <context-menu-item label="Item1" @click="" />
        <!--<context-menu-group label="Child with v-for 50">
          <context-menu-item v-for="index of 50" :key="index" :label="'Item3-'+index" @click="onMenuClick(index + 3)" />
        </context-menu-group> -->
      </context-menu-group>
    </context-menu>
    </div>
  </template>
      
  <script lang="ts">
    import { onMounted, ref } from 'vue';
    import { MenuOptions } from '@imengyu/vue3-context-menu';
    //@ts-ignore
    import router  from '../router/index.js';
    export default {
      components: {  },
      setup() {
        const show = ref(false);
        const options = ref<MenuOptions>({
          zIndex: 3,
          minWidth: 230,
          x: 500,
          y: 200
        });
  
  
        const goToPage = (page : string) => {
          router.push(page);
        }
  
        const onContextMenu = (e : MouseEvent) => {
          e.preventDefault();
          show.value = true;
          options.value.x = e.x;
          options.value.y = e.y;
        }
  
  
      const docSetup = () => {
        document.addEventListener('contextmenu', onContextMenu);
      }
  
      onMounted(() =>{
        docSetup();
      })
  
      return {
        onContextMenu,
        docSetup,
        goToPage,
        show,
        options,
      }
    }
  }
  </script>
    
<style scoped>

</style>./ProjectPage.vue