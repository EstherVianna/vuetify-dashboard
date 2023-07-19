<script setup>
import AddUserModal from '@/components/AddUserModal.vue';

</script>
<template>
<v-spacer></v-spacer>
<v-container>
  <v-card min-width="200px" max-width="1000px" class="border mb-5 ma-auto">
    <div class="d-flex justify-space-between">
      <v-card-title>Users</v-card-title>
      <add-user-modal/>
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
            <td>
              <v-chip
              color="info"
              variant="outlined"
              label
              >
              CEO
            </v-chip>
            </td>
            <td class="d-flex mt-2">
              <v-btn color="accent" class="mr-2">Send email</v-btn>
              <v-btn icon="mdi-pencil" size="small" color="accent" class="mr-2"></v-btn>
            </td>
          </tr>
          <tr>
            <td>Sarah Thompson</td>
            <td>sarah.thompson@example.com</td>
            <td>
              <v-chip
              color="info"
              variant="outlined"
              label
              >
              Marketing Manager
            </v-chip>
            </td>
            <td class="d-flex mt-2">
              <v-btn color="accent" class="mr-2">Send email</v-btn>
              <v-btn icon="mdi-pencil" size="small" color="accent" class="mr-2"></v-btn>
              <v-btn icon="mdi-delete-outline" size="small" color="accent"></v-btn>
            </td>
          </tr>
          <tr>
            <td>David Anderson</td>
            <td>david.anderson@example.com</td>
            <td>
              <v-chip
              color="info"
              variant="outlined"
              label
              >
              HR Coordinator
            </v-chip>
            </td>
            <td class="d-flex mt-2">
              <v-btn color="accent" class="mr-2">Send email</v-btn>
              <v-btn icon="mdi-pencil" size="small" color="accent" class="mr-2"></v-btn>
              <v-btn icon="mdi-delete-outline" size="small" color="accent"></v-btn>
            </td>
          </tr>
          <tr>
            <td>Michele Williams</td>
            <td>michele.williams@example.com</td>
            <td>
              <v-chip
              color="info"
              variant="outlined"
              label
              >
              TI Manager
              </v-chip>
            </td>
            <td class="d-flex mt-2">
              <v-btn color="accent" class="mr-2">Send email</v-btn>
              <v-btn icon="mdi-pencil" size="small" color="accent" class="mr-2"></v-btn>
              <v-btn icon="mdi-delete-outline" size="small" color="accent"></v-btn>
            </td>
          </tr>
          <tr>
            <td>Jonathan Rays</td>
            <td>Jonathan.rays@example.com</td>
            <td>
              <v-chip
              color="info"
              variant="outlined"
              label
              >
              Sales Representative
            </v-chip>
            </td>
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