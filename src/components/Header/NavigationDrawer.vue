<script setup>
import { watch, onBeforeMount, inject } from 'vue';
import { useTheme } from 'vuetify'

const toggleDrawer = inject('isDrawerOpen');
const theme = useTheme();
const toggleTheme = 
                  () => theme.global.name.value =
                                                theme.global.current.value.dark ? 'light' : 'dark';

watch(()=> theme.global.name.value, (newTheme)=>{
  localStorage.setItem('theme', newTheme)
});

onBeforeMount(()=>{
  const storedTheme = localStorage.getItem('theme');
  theme.global.name.value = storedTheme
    if(storedTheme == null){
      theme.global.name.value = 'light'
    };
});

const validationItens = inject('validationItens')
const user = inject('user')
</script>
<template>
<v-navigation-drawer
class="bg-bgColor"
v-model="toggleDrawer">
    <v-list class="ma-3">
      <v-spacer/>
        <v-list-item-title 
        class="ml-6 pa-2"
        color="white"
        >
        Hello, {{ user }} 👋
      </v-list-item-title>
        <v-divider/>
        <v-list-item
        prepend-icon="mdi-home"
        color="secondary"
        to="home">
          Home
        </v-list-item>
        <v-list-group>
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Reports"
            prepend-icon="mdi-chart-bar">
          </v-list-item>
        </template>
        <v-list-item 
        to="allreports"
        >
        All Reports
        </v-list-item>
      </v-list-group>
      <v-list-item prepend-icon="mdi-account" 
        to="users"
      >
        Users
      </v-list-item>
      <v-list-item prepend-icon="mdi-cog"
        to="settings"
      >
        Settings
    </v-list-item>
    <v-divider/>
    <v-list-item class="d-flex align-end"
    >
      Dark mode
      <v-switch 
      prepend-icon="mdi-theme-light-dark"
      @change="toggleTheme()"
      color="success"/>
    </v-list-item>
  </v-list>
</v-navigation-drawer>
</template>