<script setup>
import TheHeader from '@/components/Header/TheHeader.vue';
import { ref, reactive, provide, computed } from 'vue'

const isDrawerOpen = ref(false);
provide('isDrawerOpen', isDrawerOpen);

const validation = reactive({
  firstName: 'Kaleb',
  lastName: 'Jhonson',
  email: '',
  password:'',
  role:'CEO',
  reportTitle:'',
  reportContent:'',
  reportFiles: [],
  reportIndex: 0,
  reportData: [],
  reportDate: new Date().toLocaleString().slice(0, 10),
  loading: false,
  form: false,
  dialog: false,
});

const onSubmit = (v)=> {
  if(!validation.form) return 
   validation.loading= true, setTimeout(()=> (validation.loading = false), 500)
};

const required = (v)=> {
  return !!v || 'Field is required'
};

const user = computed(()=> `${validation.firstName} ${validation.lastName}`);

provide('required', required);
provide('submitFunction', onSubmit);
provide('validationItens', validation);
provide('user', user)

</script>
<template>
<v-app>
  <the-header/>
  <router-view/>
</v-app>
</template>