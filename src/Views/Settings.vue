<script setup>

</script>
<template>
<v-main>
    <v-container>
        <v-card
        class="d-flex flex-column justify-center align-itens-center ma-auto
        pa-3"
        variant="tonal"
        elevation="8"
        title="General preferences">
        <v-card-actions>
            <v-btn prepend-icon="mdi-arrow-left" variant="plain" to="/">Back</v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-item title="Language">
            <v-select
            :items="['English', 'Indian', 'Portuguese', 'German', 'Spanish', 'French']"
            label="English"
            ></v-select>
        </v-card-item>    
        </v-card>
    </v-container>
</v-main>

</template>