<script setup>
import AddUserModal from '@/components/AddUserModal.vue';

</script>
<template>
<v-main>
  <v-card class="ma-auto"
  variant="tonal"
  elevation="8"
  width="99%"
  min-height="100%">
    <v-card-actions>
        <v-btn
        prepend-icon="mdi-arrow-left"
        variant="plain"
        to="home"
        >
        Back
        </v-btn>
    </v-card-actions>
    <p class="d-flex justify-center text-h6 text-lg-h4 my-2"
    >
    Users
  </p>
    <div class="d-flex justify-space-between">
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
            <v-btn
            class="mr-2"
            color="accent"
            >
            Send email
            </v-btn>
            <v-btn
            class="mr-2"
            icon="mdi-pencil"
            size="small"
            color="accent"/>
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
            <v-btn
            class="mr-2"
            color="accent"
            >
            Send email
            </v-btn>
            <v-btn
            class="mr-2"
            icon="mdi-pencil"
            size="small"
            color="accent"/>
            <v-btn
            icon="mdi-delete-outline"
            size="small"
            color="accent"/>
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
            <v-btn
            class="mr-2"
            color="accent"
            >
            Send email
            </v-btn>
            <v-btn
            class="mr-2"
            icon="mdi-pencil"
            size="small"
            color="accent"/>
            <v-btn
            icon="mdi-delete-outline"
            size="small"
            color="accent"/>
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
            <v-btn
            class="mr-2"
            color="accent"
            >
            Send email
            </v-btn>
            <v-btn
            class="mr-2"
            icon="mdi-pencil"
            size="small"
            color="accent"/>
            <v-btn
            icon="mdi-delete-outline"
            size="small"
            color="accent"/>
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
            <v-btn
            class="mr-2"
            color="accent"
            >
            Send email
          </v-btn>
            <v-btn
            class="mr-2"
            icon="mdi-pencil"
            size="small"
            color="accent"/>
            <v-btn
            icon="mdi-delete-outline"
            size="small"
            color="accent"/>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</v-main>
</template>