<script setup>
</script>
<template>
<v-col cols="12" md="6" lg="4">
  <v-card class="d-flex flex-column justify-center">
    <v-img 
        src="https://images.pexels.com/photos/7948041/pexels-photo-7948041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" max-height="200px"  class="align-end text-white" cover>
    </v-img>
      <v-card-title>Overall Team Performance</v-card-title>
    <v-card-subtitle 
      class="font-weight-bold text-accent">
      Productivity, Retention, and Satisfaction
    </v-card-subtitle>
    <v-card-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Officia deserunt sequi dolore deleniti obcaecati illum 
      consequuntur maxime optio vitae nisi.
    </v-card-text>
    <v-card-actions class="bg-secondary align-center" >
      <v-btn href="#" size="small" variant="tonal"
            class="flex-md-shrink-1" >
        Productivity
      </v-btn>
      <v-btn href="#" size="small" variant="tonal"
            class="flex-md-grow-1">
        Retention
      </v-btn>
      <v-btn href="#" size="small" variant="tonal"
            class="flex-md-grow-1">
        Satisfaction
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
</template>