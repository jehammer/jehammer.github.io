<template>
  <div id='intro' class="intro">
    <div class="intro-top">
      <h1>Joshua Hammer</h1><h1 class="intro-hammer">&#128296;</h1>
    </div>
    <h2>Software Developer</h2>
    <p>Backend Development is my game.</p>
  </div>
    <!--<div class="card">
        <Splitter style="height: 300px" class="mb-5">
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>-->
</template>
      
<script lang="ts">
//import Splitter from 'primevue/splitter';
//import SplitterPanel from 'primevue/splitterpanel';
import { onMounted } from 'vue';
  export default {
    components: { },
    setup() {

      const animateHammer = () => {
      const hammerElement = document.querySelector('.intro-hammer');
      if(hammerElement){
        hammerElement.classList.add('animate__animated', 'animate__rotateInDownRight');
      };
    }

      const loadInAnimation = () => {
        const introGroup = document.querySelector('.intro');
        if(introGroup){
          introGroup.classList.add('animate__animated', 'animate__fadeInUp');
        }
        animateHammer();
      }

      onMounted(() =>{
        loadInAnimation();
      })


      return {
        loadInAnimation,
        animateHammer,

      }
    }
  }
</script>
    
<style scoped>
  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .intro h1 {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    .intro-top {
      display: flex;
    }
  }
  @media (max-width: 767px) {
    .intro-top {
      text-align: center;
    }
  }
</style>./IntroSection.vue