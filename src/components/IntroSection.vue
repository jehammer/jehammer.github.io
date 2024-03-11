<template>
  <div id='intro' class="intro">
    <h1>Joshua Hammer</h1>
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
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
  export default {
    components: { Splitter, SplitterPanel },
    setup() {
      return {
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
</style>./IntroSection.vue