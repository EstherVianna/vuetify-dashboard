<script setup>
import { provide } from 'vue';
import { inject } from 'vue';

const required = inject('required')
const onSubmit = inject('submitFunction')
const validationItens = inject('validationItens')

const getReportsData = ()=>{
    validationItens.reportData.push({
    index: ++validationItens.reportIndex,
    title: validationItens.reportTitle,
    content: validationItens.reportContent,
    files: validationItens.reportFiles,
    date: validationItens.reportDate
  });
  validationItens.reportTitle = '';
  validationItens.reportContent = '';
  validationItens.reportFiles = [];
};

</script>
<template>
  <v-main>
    <v-spacer/>
    <v-card
    class="mx-auto pa-4"
    variant="tonal" 
    elevation="8"
    width="99%"
    min-height="100%" 
    >
      <v-card-actions>
        <v-btn
        prepend-icon="mdi-arrow-left"
        variant="plain"
        to="home"
        >
        Back
        </v-btn>
      </v-card-actions>
      <v-form
      v-model="validationItens.form"
      @submit.prevent="onSubmit"
      >
      <p class="d-flex justify-center text-h6 text-lg-h4 mb-4"
      >
        Write reports
      </p>
        <v-text-field 
          variant="outlined"
          color="accent"
          label="Matter"
          maxlength="35"
          counter
          v-model="validationItens.reportTitle"
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
            <v-divider/>
            <v-card-actions>
              <v-btn
              variant="text"
              @click="validationItens.form.reset()"
              >
                Clean 
              </v-btn>
              <v-btn
              color="accent"
              type="submit"
              :disabled="!validationItens.form"
              :loading="validationItens.loading"
              @click.submit="getReportsData"
              to="allreports"
              >
                Submit
            </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</v-main>
</template>