<template>
  <nav class="st-menu st-effect" :class="{ 'st-menu-open': isOpen }">
    <h2>Menu</h2>

    <ul @click="handleItemClick">
      <li>
        <Button @click="changeCursor" label="Change Cursor" raised />
      </li>

      <li>
        <router-link
          :to="
            route.name === 'projects' ? { name: 'home' } : { name: 'projects' }
          "
        >
          <font-awesome-icon
            :icon="
              route.name === 'projects'
                ? ['fas', 'address-card']
                : ['fas', 'spaghetti-monster-flying']
            "
          />
          {{ route.name === 'projects' ? 'Home' : 'Projects' }}
        </router-link>
      </li>

      <li>
        <a href="https://github.com/jehammer" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
          GitHub
        </a>
      </li>

      <li>
        <a href="https://gitlab.com/jehammer" target="_blank">
          <font-awesome-icon :icon="['fab', 'gitlab']" />
          GitLab
        </a>
      </li>

      <li>
        <a href="https://codeberg.org/jehammer" target="_blank">
          <font-awesome-icon :icon="['fab', 'git-alt']" />
          CodeBerg
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/joshua-hammer/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
          LinkedIn
        </a>
      </li>

      <li>
        <a href="https://bsky.app/profile/thehammer.dev" target="_blank">
          <font-awesome-icon :icon="['fab', 'bluesky']" />
          BlueSky
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { ref, onUnmounted } from 'vue';
import Button from 'primevue/button';
import { useRoute } from 'vue-router';

export default {
  name: 'NavSection',
  components: { Button },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const cursor = ref('auto');
    const hammerCursor = ref(false);
    const route = useRoute();

    const mouseDownFunction = (event: MouseEvent) => {
      if (event.button === 0) {
        document.documentElement.style.cursor =
          'url(/images/cursor-down.png), auto';
      }
    };

    const mouseUpFunction = () => {
      document.documentElement.style.cursor = cursor.value;
    };

    const cursorSetup = () => {
      document.documentElement.style.cursor =
        'url(/images/cursor-main.png), auto';

      cursor.value = document.documentElement.style.cursor;

      document.addEventListener('mousedown', mouseDownFunction, true);
      document.addEventListener('mouseup', mouseUpFunction, true);

      hammerCursor.value = true;
    };

    const changeCursor = () => {
      if (hammerCursor.value) {
        document.removeEventListener('mousedown', mouseDownFunction, true);
        document.removeEventListener('mouseup', mouseUpFunction, true);

        document.documentElement.style.cursor = 'auto';
        cursor.value = 'auto';
        hammerCursor.value = false;
      } else {
        cursorSetup();
      }
    };

    const handleItemClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.tagName === 'A' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        emit('close');
      }
    };

    onUnmounted(() => {
      document.removeEventListener('mousedown', mouseDownFunction, true);
      document.removeEventListener('mouseup', mouseUpFunction, true);
      document.documentElement.style.cursor = 'auto';
    });

    return {
      changeCursor,
      handleItemClick,
      route,
      props,
    };
  },
};
</script>

<style scoped>
.st-menu {
  padding: 2rem;
}

.st-menu ul {
  list-style: none;
  padding: 0;
}

.st-menu li {
  margin-bottom: 1rem;
}

.st-menu a {
  text-decoration: none;
  color: white;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.st-menu a:hover {
  color: #4ea8ff;
}
</style>
