<template>
  <div class="detail">
    <div class="card-wrapper" @click="flipCard">
      <div :class="['flip-card', { flipped: isFlipped }]">
        <!-- FRONT -->
        <div class="card-face card-front">
          <div class="image-container">
            <img src="/images/me.png" alt="Joshua Hammer" />
          </div>

          <div class="name-row" :class="introTop" @animationend="animateHammer">
            <h2>{{ name }}</h2>
            <h2
              id="card-hammer"
              :class="introHammer"
              :style="{ visibility: isVisible ? 'visible' : 'hidden' }"
            >
              &#128296;
            </h2>
          </div>

          <p class="title">{{ title }}</p>

          <span class="flip-hint">Click to view details →</span>
        </div>

        <!-- BACK -->
        <div class="card-face card-back">
          <div class="tag-group">
            <span v-for="detail in details" :key="detail" class="tag">
              {{ detail }}
            </span>
          </div>

          <div class="card-links">
            <a
              v-for="link in links"
              :key="link.label"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              @click.stop
            >
              <font-awesome-icon v-if="link.icon" :icon="link.icon" />
              {{ link.label }}
            </a>
          </div>

          <span class="flip-hint">← Click to flip back</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

interface Link {
  label: string;
  url: string;
  icon?: [string, string];
}

export default {
  name: 'DetailCard',
  setup() {
    const isFlipped = ref(false);

    const flipCard = () => {
      isFlipped.value = !isFlipped.value;
    };

    const introTop = ref('animate__animated animate__fadeInDown');
    const introHammer = ref('');
    const isVisible = ref(false);

    const animateHammer = () => {
      introHammer.value = 'animate__animated animate__rotateInDownRight';
      isVisible.value = true;
    };

    onMounted(() => {
      // slight delay
      setTimeout(() => {
        isVisible.value = true;
      }, 150);
    });

    const name = ref('Joshua Hammer');
    const title = ref('Software Engineer');

    const details = ref<string[]>([
      'Python',
      'TypeScript',
      'Java',
      'NO/SQL Databases',
      'AWS Architecture',
      'Event-Driven Design',
      'Cloud Infrastructure',
      'IAM Systems',
      'Vue',
    ]);

    const links = ref<Link[]>([
      {
        label: '',
        url: 'https://github.com/jehammer',
        icon: ['fab', 'github'],
      },
      {
        label: '',
        url: 'https://gitlab.com/jehammer',
        icon: ['fab', 'gitlab'],
      },
      {
        label: '',
        url: 'https://codeberg.org/jehammer',
        icon: ['fab', 'git-alt'],
      },
      {
        label: '',
        url: 'https://www.linkedin.com/in/joshua-hammer/',
        icon: ['fab', 'linkedin'],
      },
      {
        label: '',
        url: 'https://bsky.app/profile/thehammer.dev',
        icon: ['fab', 'bluesky'],
      },
    ]);

    return {
      isFlipped,
      flipCard,
      name,
      title,
      details,
      links,
      introTop,
      introHammer,
      isVisible,
      animateHammer,
    };
  },
};
</script>

<style scoped>
.detail {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.card-wrapper {
  perspective: 1200px;
  cursor: pointer;
}

.flip-card {
  width: 380px;
  height: 520px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
  will-change: transform;
}

.flip-card.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  border: 1px solid #222;
  border-radius: 16px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
  overflow: hidden;

  transition: border 0.3s ease;
}

.card-face:hover {
  border-color: #4ea8ff;
}

.card-front {
  transform: rotateY(0deg);
  z-index: 2;
}

.card-back {
  transform: rotateY(180deg);
}

.image-container {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 2px solid #2a2a2a;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

#card-hammer {
  display: inline-block;
}

.title {
  opacity: 0.6;
  margin-top: 0.5rem;
}

.tag-group {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.tag {
  background: #1e1e1e;
  border: 1px solid #2a2a2a;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
  transition:
    background 0.2s ease,
    border 0.2s ease;
}

.tag:hover {
  background: #4ea8ff22;
  border-color: #4ea8ff;
}

.card-links {
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
}

.card-links a {
  text-decoration: none;
  color: #4ea8ff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.flip-hint {
  margin-top: 2rem;
  font-size: 0.75rem;
  opacity: 0.5;
}
</style>
