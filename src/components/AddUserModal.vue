<script setup>
import { inject } from 'vue';

const required = inject('required')
const onSubmit = inject('submitFunction')
const validationItens = inject('validationItens')

</script>
<template>
    <v-card-title>
        <v-btn 
        tonal 
        size="small" 
        color="secondary"
        @click="validationItens.dialog = true"
        >
          + Add new user
        </v-btn>
        <v-dialog v-model="validationItens.dialog">
        <v-card>
          <v-form 
            v-model="validationItens.form"
            @submit.prevent="onSubmit">
          <v-card-title>
            <span class="text-h5">Create User</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
              cols="12"
              sm="8"
              md="6"
              >
              <v-text-field
              v-model="validationItens.firstName"
              label="Legal first name*"
              :rules="[required]"
              required
              clearable
              :readonly="validationItens.loading"
              ></v-text-field>
            </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="6"
                >
                <v-text-field
                v-model="validationItens.lastName"
                label="Legal last name*"
                :rules="[required]"
                required
                clearable
                :readonly="validationItens.loading"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="8"
                md="6">
                <v-text-field
                v-model="validationItens.email"
                label="Email*"
                :rules="[required]"
                required
                clearable
                :readonly="validationItens.loading"
                ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="8"
              md="6"
              >
              <v-text-field
              v-model="validationItens.password"
              label="Password*"
              type="password"
              :rules="[required]"
              required
              clearable
              :readonly="validationItens.loading"
              ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            sm="6"
          >
          <v-text-field
          v-model="validationItens.role"
          label="Role*"
          required
          clearable
          :readonly="validationItens.loading"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <small>*Indicates required field</small>
  </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn
        color="accent"
        variant="text"
        @click="validationItens.dialog = false"
      >
      Close
      </v-btn>
      <v-btn
        :disabled="!validationItens.form"
        :loading="validationItens.loading"
        color="accent"
        variant="text"
        type="submit"
        >
        Save
        </v-btn>
      </v-card-actions>
    </v-form>
    </v-card>
  </v-dialog>
</v-card-title>
</template>