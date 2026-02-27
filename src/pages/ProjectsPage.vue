<template>
  <div
    id="st-container"
    :class="{ 'st-container': true, 'st-menu-open': isMenuOpen }"
  >
    <NavSection :isOpen="isMenuOpen" @close="isMenuOpen = false" />

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
import NavSection from '../components/NavSection.vue';
const isMenuOpen = ref(false);
const pusherElementRef = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = (event: MouseEvent) => {
  const buttonElement = (event.target as HTMLElement).closest(
    'button[data-effect="st-effect"]',
  );
  if (buttonElement) {
    return;
  }
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

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
