<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const role = ref('');
const loading = ref(false)
const form = ref(false);
const dialog = ref(false)
const onSubmit = (v)=> {
  if(!form.value) return 
   loading.value = true, setTimeout(()=> (loading.value = false), 1000)
};

const required = (v)=> {
  return !!v || 'Field is required'
};

</script>
<template>
    <v-card-title>
        <v-btn 
        tonal 
        size="small" 
        color="secondary"
        @click="dialog = true"
        >
            + Add new user
        </v-btn>
        <v-dialog v-model="dialog">

        <v-card>
          <v-form 
            v-model="form"
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
              v-model="firstName"
              label="Legal first name*"
              :rules="[required]"
              required
              clearable
              :readonly="loading"
              ></v-text-field>
            </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="6"
                >
                <v-text-field
                v-model="lastName"
                label="Legal last name*"
                :rules="[required]"
                required
                clearable
                :readonly="loading"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="8"
                md="6">
                <v-text-field
                v-model="email"
                label="Email*"
                :rules="[required]"
                required
                clearable
                :readonly="loading"
                ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="8"
              md="6"
              >
              <v-text-field
              v-model="password"
              label="Password*"
              type="password"
              :rules="[required]"
              required
              clearable
              :readonly="loading"
              ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            sm="6"
          >
          <v-text-field
          v-model="role"
          label="Role*"
          required
          clearable
          :readonly="loading"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <small>*Indicates required field</small>
  </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="accent"
        variant="text"
        @click="dialog = false"
      >
      Close
      </v-btn>
      <v-btn
        :disabled="!form"
        :loading="loading"
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