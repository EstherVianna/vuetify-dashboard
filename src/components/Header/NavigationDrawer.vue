<script setup>
import { inject } from 'vue'
import { useTheme } from 'vuetify'

const toggleDrawer = inject('isDrawerOpen');
const theme = useTheme();
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
    
</script>

<template>
<v-navigation-drawer v-model="toggleDrawer" class="bg-bgColor" >
    <v-list>
        <v-list-subheader color="white">Menu</v-list-subheader>
        <v-list-item prepend-icon="mdi-home" color="secondary" href="#">
          Home
        </v-list-item>
        <v-list-group value="Users">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Reports"
            prepend-icon="mdi-chart-bar">
          </v-list-item>
        </template>
        <v-list-item href="#">Send Report</v-list-item>
        <v-list-item href="#">Visualize All Reports</v-list-item>
      </v-list-group>
      <v-list-item prepend-icon="mdi-account" 
        href="#">Users
      </v-list-item>
      <v-list-item prepend-icon="mdi-cog"
        href="#">Settings
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item> Dark mode
      <v-switch  prepend-icon="mdi-theme-light-dark"
         @change="toggleTheme()" color="success"/>
    </v-list-item>
  </v-list>
  </v-navigation-drawer>
 
</template>