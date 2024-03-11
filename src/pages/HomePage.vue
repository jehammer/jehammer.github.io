<template>
  <div class="wrapper-class">
    <WIP />
    <!--<div class='toolbox'>
      <img ref="hammer" src="/images/hammer.png" alt="hammer" class="hammer" />
    </div>-->
    <intro-section />
    <project-section />
    <context-menu v-model:show=show :options=options>
      <context-menu-item label="Projects" @click="goToPage('projects')" />
      <context-menu-sperator /><!--use this to add sperator-->
      <context-menu-group label="Quick Links">
        <context-menu-item label="Download Resume" @click="" />
      </context-menu-group>
    </context-menu>
  </div>
</template>
    
<script lang="ts">
  import { onMounted, ref } from 'vue';
  import { MenuOptions } from '@imengyu/vue3-context-menu';
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

    /*const animateHammer = () => {

      const hammerElement = document.querySelector('.hammer');
      if(hammerElement){
        hammerElement.addEventListener('animationend', () => {
        hammerElement.classList.add('animate__animated', 'animate__rotateOutUpLeft');
        setTimeout(() =>{
          hammerElement.remove();
          showPage.value = true;
        }, 1000)
        });

        hammerElement.classList.add('animate__animated', 'animate__rotateInDownLeft');
      }
    }*/

    const docSetup = () => {
      cursor.value = document.documentElement.style.cursor;
      document.addEventListener('contextmenu', onContextMenu);
      document.addEventListener('mousedown', function(event) {
        if (event.button === 0) { // Left mouse button is 0
          document.documentElement.style.cursor = 'url(/images/cursor-down.png), auto';
        }
      });
      document.addEventListener('mouseup', function() {
        // Reset cursor to hammer
        document.documentElement.style.cursor = cursor.value;
      });
    }

    onMounted(() =>{
      docSetup();
      //animateHammer();
    })

    return {
      //animateHammer,
      onContextMenu,
      docSetup,
      goToPage,
      show,
      options,
      showPage,
      cursor
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