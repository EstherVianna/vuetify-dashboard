<script setup>
import HomeCards from '@/components/HomeCards.vue';

</script>
<template>
<v-main>
  <v-container>
    <p class="text-subtitle-1 text-md-h4">HR's Overview</p>
    <v-row class="mt-5">
        <home-cards/>
        <home-cards/>
        <home-cards/>
        <home-cards/>
    </v-row>
  </v-container>
</v-main>
</template>