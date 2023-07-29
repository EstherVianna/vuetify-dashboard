<script setup>
</script>
<template>
    <div>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-avatar #append image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        size="50" class="mx-10" v-bind="props"> 
                </v-avatar>
        </template>
        <v-card min-width="200px">
            <v-list nav>
                <v-list-item prepend-icon="mdi-account-outline"
                            to="#">
                    <v-list-item-title>My account</v-list-item-title>
                </v-list-item>
                <v-list-item prepend-icon="mdi-file-chart-outline"
                            to="writereport">
                    <v-list-item-title>Write Reports </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card>
        </v-menu>
    </div>
</template>