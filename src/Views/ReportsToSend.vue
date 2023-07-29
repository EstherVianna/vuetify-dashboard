<script setup>
import { inject } from 'vue';

const data = inject('validationItens');
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
        My Reports to Send
    </p>
       <v-list 
        v-if="data.reportData.length != 0">
                <v-list-item
                class="bg-accent rounded w-75 mx-auto my-2"
                :key="i"
                v-model="data.reportData"
                v-for="title, i in data.reportData"
                >
                    {{ title.titleList }}
                    <template v-slot:append>
                        <v-btn
                        @click=""
                            icon="mdi-arrow-right"
                            variant="plain"
                        ></v-btn>
                        </template>
            </v-list-item>
            
            </v-list>
            <p v-else
            class="d-flex justify-center text-h6"
            >
                There are not reports yet! Please,
                to write a report click on the avatar and then,
                click "write report".
            </p>
    </v-card>
</v-main>
</template>