<script setup>

</script>
<template>
<v-main>
    <v-card
    class="mx-auto ma-auto"
    variant="tonal"
    elevation="8"
    width="99%"
    min-height="100%">
        <p
        class="d-flex justify-center text-h6 text-lg-h4 my-2"
        >
        General Preferences
        </p>
        <v-card-actions>
            <v-btn
            prepend-icon="mdi-arrow-left"
            variant="plain"
            to="home"
            >
            Back
            </v-btn>
        </v-card-actions>
        <v-divider/>
        <v-card-item title="Language">
        <v-select
        :items="['English', 'Indian', 'Portuguese', 'German', 'Spanish', 'French']"
        label="English"
        />
        </v-card-item>
    </v-card>
</v-main>
</template>