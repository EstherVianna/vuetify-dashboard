<script setup>
import { ref } from 'vue';

const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const password = ref(null);
const role = ref(null);
const loading = ref(false)
const form = ref(false);
const dialog = ref(true)
const onSubmit = (v)=> {
  if(!form.value) return 
   loading.value = true, setTimeout(()=> (loading.value = false), 1000)
}

const required = (v)=> {
  return !!v || 'Field is required'
}

</script>
<template>
<v-container>
  <v-card min-width="200px" max-width="1000px" class="border mb-5 ma-auto">
    <div class="d-flex justify-space-between">
      <v-card-title>Users</v-card-title>
      <v-card-title>
        <v-dialog v-model="dialog">
          <template #activator="{ props }">
            <v-btn v-bind="props" tonal size="small" color="secondary">+ Add new user</v-btn>
        </template>
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
          :rules="[required]"
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
</div>
<v-table>
  <thead>
    <tr>
      <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kaleb Jhonson</td>
            <td>kaleb.ziproceo@example.com</td>
            <td>CEO</td>
            <td class="d-flex mt-2">
              <v-btn color="accent" class="mr-2">Send email</v-btn>
              <v-btn icon="mdi-pencil" size="small" color="accent" class="mr-2"></v-btn>
            </td>
          </tr>
          <tr>
            <td>Sarah Thompson</td>
            <td>sarah.thompson@example.com</td>
            <td>Marketing Manager</td>
            <td class="d-flex mt-2">
              <v-btn color="accent" class="mr-2">Send email</v-btn>
              <v-btn icon="mdi-pencil" size="small" color="accent" class="mr-2"></v-btn>
              <v-btn icon="mdi-delete-outline" size="small" color="accent"></v-btn>
            </td>
          </tr>
          <tr>
            <td>David Anderson</td>
            <td>david.anderson@example.com</td>
            <td>HR Coordinator</td>
            <td class="d-flex mt-2">
              <v-btn color="accent" class="mr-2">Send email</v-btn>
              <v-btn icon="mdi-pencil" size="small" color="accent" class="mr-2"></v-btn>
              <v-btn icon="mdi-delete-outline" size="small" color="accent"></v-btn>
            </td>
          </tr>
          <tr>
            <td>Michele Williams</td>
            <td>michele.williams@example.com</td>
            <td>TI Manager</td>
            <td class="d-flex mt-2">
              <v-btn color="accent" class="mr-2">Send email</v-btn>
              <v-btn icon="mdi-pencil" size="small" color="accent" class="mr-2"></v-btn>
              <v-btn icon="mdi-delete-outline" size="small" color="accent"></v-btn>
            </td>
          </tr>
          <tr>
            <td>Jonathan Rays</td>
            <td>Jonathan.rays@example.com</td>
            <td>Sales Representative</td>
            <td class="d-flex mt-2">
              <v-btn color="accent" class="mr-2">Send email</v-btn>
              <v-btn icon="mdi-pencil" size="small" color="accent" class="mr-2"></v-btn>
              <v-btn icon="mdi-delete-outline" size="small" color="accent"></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>