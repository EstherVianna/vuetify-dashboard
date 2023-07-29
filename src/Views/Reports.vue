<script setup>
import { inject } from 'vue';

const required = inject('required')
const onSubmit = inject('submitFunction')
const validationItens = inject('validationItens')

</script>
<template>
  <v-main>
    <v-spacer></v-spacer>
    <v-card
    class="mx-auto mt-4 pa-4"
    variant="tonal" 
    elevation="8"
    width="80%"
    min-height="70%" 
    >
    <v-form ref="validationItens.form"
    v-model="validationItens.form"
    @submit.prevent="onSubmit"
    >
      <v-card-title class="text-h4 pa-4">Write reports</v-card-title>
      <v-text-field 
        variant="outlined"
        color="accent"
        label="Matter"
        maxlength="50"
        counter
        v-model="validationItens.title"
        :rules="[required]"
        required
        />
        <v-textarea
        class="mt-3"
        variant="outlined"
        color="accent"
        label="Report"
        counter
        placeholder="Start writing..."
        v-model="validationItens.report"
        :rules="[required]"
        required
        clearable/>
        <v-file-input
          color="accent"
          variant="plain"
          label="File input"
          chips
          multiple
          clearable
          width="50%"/>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
            variant="text"
            @click="validationItens.form.reset()"
            to="/"
            >
            Cancel
          </v-btn>
          <v-btn
          color="accent"
          type="submit"
          :disabled="!validationItens.form"
          :loading="validationItens.loading"
          to="allreports"
          >
          Submit
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</v-main>
</template>