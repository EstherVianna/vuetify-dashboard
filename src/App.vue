<script setup>
import TheHeader from '@/components/Header/TheHeader.vue';
import { provide, ref } from 'vue'

const isDrawerOpen = ref(false);
provide('isDrawerOpen', isDrawerOpen);

</script>
<template>
<v-app>
  <the-header/>
  <router-view>
  </router-view>
</v-app>
</template>


