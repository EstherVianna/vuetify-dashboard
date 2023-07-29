<script setup>
import TheHeader from '@/components/Header/TheHeader.vue';
import { ref, reactive, provide} from 'vue'

const isDrawerOpen = ref(false);
provide('isDrawerOpen', isDrawerOpen);

const validation = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password:'',
  role:'',
  title:'',
  report:'',
  loading: false,
  form: false,
  dialog: false
});

const onSubmit = (v)=> {
  if(!validation.form) return 
   validation.loading= true, setTimeout(()=> (validation.loading = false), 1000)
};

const required = (v)=> {
  return !!v || 'Field is required'
};

provide('required', required);
provide('submitFunction', onSubmit)
provide('validationItens', validation)

</script>
<template>
<v-app>
  <the-header/>
  <router-view>
  </router-view>
</v-app>
</template>


