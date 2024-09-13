<template>
  <div class="intro">
    <div id='intro-top' :class="introTop" @animationend="animateHammer">
        <h1>Joshua Hammer</h1><h1 id="intro-hammer" :class="introHammer" :style="{ visibility: isVisible ? 'visible' : 'hidden' }">&#128296;</h1>
    </div>
    <div id="intro-bottom" :class="introBottom">
      <h2>Software Enginner</h2>
      <p>The best way to squash bugs, is with a Hammer!</p>
    </div>
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
import { onMounted, ref } from 'vue';
export default {
  components: { },
  setup() {
;
    const introTop = ref('animate__animated animate__zoomInLeft');
    const introBottom = ref('animate__animated animate__zoomInRight');
    const introHammer = ref();
    const isVisible = ref(false);

    const animateHammer = () => {
      introHammer.value = 'animate__animated animate__rotateInDownRight';
      isVisible.value = true;
    }


    onMounted(() =>{
    })


    return {
      animateHammer,
      introTop,
      introBottom,
      introHammer,
      isVisible

    }
  }
}
</script>
    
<style scoped>
.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

#intro-top {
  display: flex;
  align-items: center;
  justify-content: center;
}

#intro-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: .25rem;
  margin-bottom: 1rem;
}

#intro-bottom h2,
#intro-bottom p {
  margin: 0;
  padding: 0;
}

@media (min-width: 768px) {
  #intro-top {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 767px) {
  #intro-top {
    text-align: center;
    display: inline-block;
  }

  #intro-hammer {
    display: inline-block;
  }
}

</style>./IntroSection.vue