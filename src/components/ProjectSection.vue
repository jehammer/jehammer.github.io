<template>
  <div class="projects">
    <div class="projects-title">
      <h2>
        Projects
      </h2>
    </div>
    <v-container>
      <v-row align="center" justify="center">
        <!--BOKBot-->
        <v-col cols="auto">
          <v-card variant="elevated" class="mx-auto" max-width="344" color="indigo">
            <v-card-item>
              <v-card-title>
                BOKBot
              </v-card-title>
              <v-card-subtitle>
                Python, Yaml, MongoDB
              </v-card-subtitle>
            </v-card-item>
            <v-card-text class="text-caption">
              Discord Bot designed to manage rosters of players for endgame content and provide other functions for user engagement. Moving to AWS currently.
            </v-card-text>
            <v-card-actions>
              <v-chip clickable href="https://github.com/jehammer/BOKBot" target="_blank" class="d-flex align-center" color="white" variant="outlined">
                <font-awesome-icon :icon="['fab', 'github']"/>
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-col cols="auto">
        <!--Bridge--/> -- TEMPORARILY COMMENTED OUT AS THIS IS NOT IN ACTIVE DEVELOPMENT
        <v-col cols="auto">
          <v-card variant="elevated" class="mx-auto" max-width="344" color="indigo">
            <v-card-item>
              <v-card-title>
                Bridge
              </v-card-title>
              <v-card-subtitle>
                TypeScript, Rust, AWS, CDK, SQS, Lambda
              </v-card-subtitle>
            </v-card-item>
            <v-card-text class="text-caption">
              REST API designed to communicate with front-end website to allow for engagement with BOKBot by sending messages via SQS.
            </v-card-text>
            <v-card-actions>
              <v-chip clickable href="https://github.com/Breath-Of-Kynareth/bridge" target="_blank" class="d-flex align-center" color="white" variant="outlined">
                <font-awesome-icon :icon="['fab', 'github']"/>
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-col> -->
        <!--BOK Website-->
        <v-col cols="auto">
          <v-card variant="elevated" class="mx-auto" max-width="344" color="indigo">
            <v-card-item>
              <v-card-title>
                BOK Website
              </v-card-title>
              <v-card-subtitle>
                TypeScript, Vue3
              </v-card-subtitle>
            </v-card-item>
            <v-card-text class="text-caption">
              Front-End Website written in TypeScript and Vue3 to allow for more advanced interfacing with BOKBot and its systems from users.
            </v-card-text>
            <v-card-actions>
              <v-chip clickable href="https://github.com/Breath-Of-Kynareth/breath-of-kynareth.github.io" target="_blank" class="d-flex align-center" color="white" variant="outlined">
                <font-awesome-icon :icon="['fab', 'github']"/>
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
      
<script lang="ts">
  import Card from 'primevue/card';
  import { onMounted } from 'vue';

  export default {
    components: { Card, },
    setup() {

      const loadInAnimation = () => {
        const projectsGroup = document.querySelector('.projects');
        if(projectsGroup){
          projectsGroup.classList.add('animate__animated', 'animate__fadeInUp');
        }
      }

      onMounted(() =>{
        loadInAnimation();
      })


      return {
        loadInAnimation,
      }
    }
  }
</script>
  
<style scoped>
  .projects-title {
    display: flex;
    justify-content: center;
  }

</style>./ProjectSection.vue


        <!--<v-card variant="elevated" class="mx-auto" max-width="344" color="indigo">
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
              </div>
              <div class="text-h6 mb-1">
                BOKBot
              </div>
              <div class="text-caption">
                Discord Bot written using Python with yaml designed to manage rosters of players for endgame content and provide
                other functions for user engagement.
              </div>
            </div>
          </v-card-item>
          <v-card-actions>
            <v-chip clickable href="https://github.com/jehammer/BOKBot"target="_blank" class="d-flex align-center" color="white" variant="outlined">
              <font-awesome-icon :icon="['fab', 'github']"/>
            </v-chip>
          </v-card-actions>
        </v-card>-->