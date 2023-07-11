<script>
</script>
<template>
<div>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
                <v-badge dot color="warning">
                <v-icon icon="mdi-bell-outline" size="large"/>
                </v-badge>
            </v-btn>
        </template>
        <v-card min-width="300px" max-width="400px" max-height="200px">
            <v-list nav>
                <v-list-item append-icon="mdi-email-open" lines="one">
                    <v-list-item-title>View Read (0)</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item prepend-icon="mdi-tag-arrow-up"
                            append-icon="mdi-email-open-outline"
                            to="/" class="text-subtitle-2 text-md-subtitle-1"> +30% sales in July
                        <div class="text-caption mb-1"> Tue, July 14</div>
                        <div class="text-medium-emphasis text-caption">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo blanditiis reprehenderit accusamus, assumenda id provident voluptas neque labore! Voluptatibus, non.</div>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item prepend-icon="mdi-finance"
                            append-icon="mdi-email-open-outline"
                            to="/" class="text-subtitle-2 text-md-subtitle-1"> Week Finance relatory is out now
                        <div class="text-caption mb-1"> Sun, July 3</div>
                        <div class="text-medium-emphasis text-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deleniti?</div>
                </v-list-item>
            </v-list>
        </v-card>
    </v-menu>
</div>
</template>