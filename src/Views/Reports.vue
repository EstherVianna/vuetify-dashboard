<script setup>
import { provide, inject, watchEffect } from 'vue';

const required = inject('required')
const onSubmit = inject('submitFunction')
const validationItens = inject('validationItens')

const getReportsData = ()=>{
  // const titleList = '';
  // const reportContent = '';
  // const reportFiles = '';
  validationItens.reportData.push({
    index: ++validationItens.index,
    titleList: validationItens.title,
    report: validationItens.reportContent,
    reportFiles: validationItens.file
  });
  validationItens.title = '';
  validationItens.reportContent = '';
  validationItens.file = [];
};

provide('data', validationItens.reportData)

</script>
<template>
  <v-main>
    <v-spacer></v-spacer>
    <v-card
    class="mx-auto pa-4"
    variant="tonal" 
    elevation="8"
    width="99%"
    min-height="100%" 
    >
    <v-form ref="validationItens.form"
    v-model="validationItens.form"
    @submit.prevent="onSubmit"
    >
    <p class="d-flex justify-center text-h6 text-lg-h4 mb-4">Write reports</p>
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
        v-model="validationItens.reportContent"
        :rules="[required]"
        required
        clearable/>
        <v-file-input
          color="accent"
          variant="plain"
          label="File input"
          v-model="validationItens.file"
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
          @click="getReportsData"
          >
          Save
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</v-main>
</template>