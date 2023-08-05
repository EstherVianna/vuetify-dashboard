<script setup>
import ReportCard from '@/components/ReportCard.vue';
import { inject } from 'vue';

const validationItens = inject('validationItens');
</script>
<template>
<v-main>
    <v-card
    class="mx-auto pa-4"
    variant="tonal" 
    elevation="8"
    width="99%"
    min-height="100%">
        <p
        class="d-flex justify-center text-h6 text-lg-h4"
        >
        All reports
        </p>
        <v-row
        class="mt-5 d-flex"
        >
        <v-col cols="12" md="6" lg="4"
        v-for="report, i in validationItens.reportData">
            <ReportCard :report="report" :key="i" />
        </v-col>
        </v-row>
        <v-card v-if="validationItens.reportData.length == 0" class="mx-auto text-center bg-warning w-50 h-50">
            <p class="d-flex justify-center text-h6"
            >
            There are not reports yet! Please,
            to write a report click on the avatar and then,
            click "write report".
            </p>
        </v-card>
    </v-card>
</v-main>
</template>