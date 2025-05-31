<template>
  <div id="st-container" :class="{ 'st-container': true, 'st-menu-open': isMenuOpen }">
    <nav class="st-menu st-effect" id="menu">
      <h2>Menu</h2>
      <ul @click="closeMenuFromItem">
        <li><a href="#" @click="changeCursor()">Change Cursor</a></li>
      </ul>
    </nav>

    <div class="st-pusher" ref="pusherElementRef">
      <div class="st-content">
        <div class="st-content-inner">
          <div id="st-trigger-effects" class="column">
            <button @click="toggleMenu" data-effect="st-effect">Menu</button>
            <div class="wrapper-class">
              <intro-section />
              <project-section />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import ProjectSection from '../components/ProjectSection.vue';
  import IntroSection from '../components/IntroSection.vue';
  const isMenuOpen = ref(false);
  const pusherElementRef = ref<HTMLElement | null>(null);
  const cursor = ref('');
  const hammerCursor = ref();

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const closeMenu = (event: MouseEvent) => {
    const buttonElement = (event.target as HTMLElement).closest('button[data-effect="st-effect"]');
    if (buttonElement) {
      return;
    }
    if (isMenuOpen.value) {
      isMenuOpen.value = false;
    }
  };

  const closeMenuFromItem = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' || target.closest('a')) {
      if (isMenuOpen.value) {
        isMenuOpen.value = false;
      }
    }
  };

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
    cursor.value = document.documentElement.style.cursor;
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

  onMounted(() => {
    if (pusherElementRef.value) {
      pusherElementRef.value.addEventListener('click', closeMenu);
    }
  });

  onUnmounted(() => {
    if (pusherElementRef.value) {
      pusherElementRef.value.removeEventListener('click', closeMenu);
    }
  });
</script>


<style>
  @import '../assets/HomePage.css';
</style>
