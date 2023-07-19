<script setup>
import { watch, onBeforeMount, inject } from 'vue';
import { useTheme } from 'vuetify'

const toggleDrawer = inject('isDrawerOpen');
const theme = useTheme();
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';

watch(()=> theme.global.name.value, (newTheme)=>{
  localStorage.setItem('theme', newTheme)
});

onBeforeMount(()=>{
  const storedTheme = localStorage.getItem('theme');
  theme.global.name.value = storedTheme
    if(storedTheme == null){
      theme.global.name.value = 'light'
    }
});
</script>
<template>
<v-navigation-drawer v-model="toggleDrawer" class="bg-bgColor" >
    <v-list>
        <v-list-subheader color="white">Menu</v-list-subheader>
        <v-list-item prepend-icon="mdi-home" color="secondary" href="#">
          <router-link
          to="/" 
          style="text-decoration: none; color: #FFFF;"
          >
          Home
          </router-link>
        </v-list-item>
        <v-list-group>
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Reports"
            prepend-icon="mdi-chart-bar">
          </v-list-item>
        </template>
        <v-list-item href="#">Send Report</v-list-item>
        <v-list-item href="#">Visualize All Reports</v-list-item>
      </v-list-group>
      <v-list-item prepend-icon="mdi-account" 
        to="users"
        >
        Users
      </v-list-item>
      <v-list-item prepend-icon="mdi-cog"
        href="#"
        >
        Settings
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item
    >
    Dark mode
      <v-switch  prepend-icon="mdi-theme-light-dark"
         @change="toggleTheme()" color="success"/>
    </v-list-item>
  </v-list>
  </v-navigation-drawer>
 
</template>