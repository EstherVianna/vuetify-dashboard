<script setup>
import BarAvatarDropdown from './BarAvatarDropdown.vue';
import BarNotifications from './BarNotifications.vue';
import { inject } from 'vue';

const toggleDrawer = inject('isDrawerOpen');

</script>
<template>
<v-app-bar flat  color="primary">
      <v-app-bar-nav-icon
      @click="toggleDrawer = !toggleDrawer"/>
      <v-app-bar-title
      class="text-subtitle-1 text-md-h5"
      >
      Dashboard Zipro
      </v-app-bar-title>
      <BarNotifications/>
      <BarAvatarDropdown/>
</v-app-bar>
</template>