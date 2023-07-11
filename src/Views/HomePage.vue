<script setup>
import CardMain from '../components/CardMain.vue';
import TheHeader from '../components/Header/TheHeader.vue';

import { provide, ref } from 'vue'

const isDrawerOpen = ref(false);
provide('isDrawerOpen', isDrawerOpen);
</script>
<template>
<TheHeader/>
<v-main>
  <v-container>
    <p class="text-subtitle-1 text-md-h4">Visão geral RH</p>
    <v-row class="mt-5" >
        <card-main/>
        <card-main/>
        <card-main/>
        <card-main/>
    </v-row>
  </v-container>
</v-main>
</template>