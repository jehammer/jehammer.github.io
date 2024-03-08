<template>
    <div class="card relative z-2">
        <Menubar :model="items" class="myMenu">
          <template #item="{ label, item, props, root, hasSubmenu }">
              <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                  <a :href="routerProps.href" v-bind="props.action" @click="routerProps.navigate">
                      <span v-bind="props.icon" />
                      <span v-bind="props.label">{{ label }}</span>
                  </a>
              </router-link>
              <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                  <span v-bind="props.icon" />
                  <span v-bind="props.label">{{ label }}</span>
                  <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]" v-bind="props.submenuicon" />
              </a>
          </template>
        </Menubar>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
// @ts-ignore
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';

export default {
  components: { InputText, Menubar },
  setup() {

    const items = ref([
    {
      label: 'Home',
      route: '/',
      icon: 'pi pi-fw pi-home'
    }
]);



    return {
      items
    };
  },
};
</script>

<style>

.myMenu li.wijmo-wijmenu-parent > a {
	text-align: right;
}

.myMenu ul:first-child > li.wijmo-wijmenu-parent > a > span,
.myMenu ul:first-child > li.wijmo-wijmenu-parent > a > span > span {
	float: left !important;
}

.myMenu li.wijmo-wijmenu-parent > a > span,
.myMenu li.wijmo-wijmenu-parent > a > span > span {
	float: none !important;
	display: inline-block;
	vertical-align: bottom;
}
</style>


<!--
Multi-option menu save.

    {
        label: 'Rosters',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Bookmark',
                        icon: 'pi pi-fw pi-bookmark'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                    }
                ]
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
    },

-->