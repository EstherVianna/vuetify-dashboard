<script setup>
import { inject } from 'vue';
defineProps({
    report:{
        type:[Object,Array],
        required: true
    },
});

const validationItens = inject('validationItens');
const user = inject('user');

</script>
<template>

<v-card class="d-flex flex-column justify-center" 
height="230px"
>
    <v-card-title>{{ report.title }}</v-card-title>
    <v-card-subtitle 
    class="font-weight-bold text-accent"
    >
    Author: {{ user }}
        <v-chip
        color="accent"
        label
        size="small"
        >
            {{ validationItens.role }}
        </v-chip>
        <v-spacer/>
        <span class="text-overline">{{ report.date }}</span>
    </v-card-subtitle>
    <v-card-text style="overflow:hidden;"
    >
        {{ report.content }}
    </v-card-text>
    <v-card-actions
    class="bg-secondary align-center">
        <v-btn 
        class="flex-md-shrink-1"
        variant="tonal"
        @click=""
        >
            Expand
        </v-btn>
    </v-card-actions>
</v-card>
</template>