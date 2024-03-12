<template>
  <div class="wrapper-class">
    <WIP />
    <!--<div class='toolbox'>
      <img ref="hammer" src="/images/hammer.png" alt="hammer" class="hammer" />
    </div>-->
    <intro-section />
    <project-section />
    <context-menu v-model:show=show :options=options>
      <context-menu-item label="Change Cursor" @click="changeCursor()" />
      <!--<context-menu-item label="Projects" @click="goToPage('projects')" />-->
      <context-menu-sperator /><!--use this to add sperator-->
      <context-menu-group label="Quick Links">
        <context-menu-item label="Download Resume (Coming Soon)" @click="" />
      </context-menu-group>
    </context-menu>
  </div>
</template>
    
<script lang="ts">
  import { onMounted, ref } from 'vue';
  import { MenuOptions } from '@imengyu/vue3-context-menu';
  import { notify } from "@kyvg/vue3-notification";
  import ProjectSection from '../components/ProjectSection.vue';
  import IntroSection from '../components/IntroSection.vue';
  import WIP from '../components/WIP.vue';
  //@ts-ignore
  import router  from '../router/index.js';
  export default {
    components: {  ProjectSection, IntroSection, WIP },
    setup() {
      const show = ref(false);
      const options = ref<MenuOptions>({
        zIndex: 3,
        minWidth: 230,
        x: 500,
        y: 200
      });
      const showPage = ref(false);
      const cursor = ref('');
      const hammerCursor = ref();


      const goToPage = (page : string) => {
        //router.push(page);
        document.getElementById(page)?.scrollIntoView({behavior: 'smooth'});
      }

      const onContextMenu = (e : MouseEvent) => {
        e.preventDefault();
        //Show component mode menu
        show.value = true;
        options.value.x = e.x;
        options.value.y = e.y;
      }

    const mouseDownFunction = (event: MouseEvent) => {
      if (event.button === 0) { // Left mouse button is 0
          document.documentElement.style.cursor = 'url(/images/cursor-down.png), auto';
        }
    }

    const mouseUpFunction = () => {
      document.documentElement.style.cursor = cursor.value;
    }

    const cursorSetup = () => {
      document.documentElement.style.cursor = 'url(/images/cursor-main.png), auto';
      cursor.value = document.documentElement.style.cursor; // Only works fast enough if I do it this way?
      document.addEventListener('contextmenu', onContextMenu);
      document.addEventListener('mousedown', mouseDownFunction, true);
      document.addEventListener('mouseup', mouseUpFunction, true);
      hammerCursor.value = true;
    }

    const changeCursor = () => {
      if(hammerCursor.value){
        // Set back to normal cursor
        document.removeEventListener('mousedown', mouseDownFunction, true)
        document.removeEventListener('mouseup', mouseUpFunction, true)
        document.documentElement.style.cursor = 'auto';
        cursor.value = 'auto';
        hammerCursor.value = false;
      } else {
        // Set back to Hammer cursor
        cursorSetup();
      }     
    }

    onMounted(() =>{
      cursorSetup();
      setTimeout(() =>{
        notify({ type: "info", title: 'Welcome!', text: "Right-Click to access the custom menu! You can change cursor there." });
      }, 1000)
    })

    return {
      onContextMenu,
      cursorSetup,
      goToPage,
      changeCursor,
      show,
      options,
      showPage,
      cursor,
      hammerCursor
    }
  }
}
</script>
  
  <style scoped>
    .container, .toolbox{
      display: flex;
      justify-content: center;
    }
    .image-container {
      max-width: 100%;
      height: auto;
      display: block;
    }

    .hammer {
      animation-duration: 1s;
      width:50%;
      height:50%;
    }

    @media (max-width: 768px) {
      .hammer {
        width: 100%;
        height: 100%;
      }
    }

    .toolbox {
      position: fixed; 
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%);
    }
  </style>./HomePage.vue./ProjectSection.vue/index.js