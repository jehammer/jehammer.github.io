<template>
  <div id='wip' class="wip">
    <h4>!!Under Development!!</h4>
  </div>
</template>
      
  <script lang="ts">
    import { onMounted } from 'vue';

    export default {
      components: { },
      setup() {

      const animateBanner = () => {

        const bannerElement = document.querySelector('.wip');
        if(bannerElement){
          bannerElement.classList.add('animate__animated', 'animate__bounceInDown');
        }
      }
      onMounted(() =>{
        animateBanner();
      })
      return {
        animateBanner,

      }
    }
  }
  </script>
    
<style scoped>

.wip {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: rgb(177, 103, 14);
}

</style>./WIP.vue