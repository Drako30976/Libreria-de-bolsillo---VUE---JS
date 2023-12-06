<template>
    <div class="generos">
      <h2>Los generos mas vistos</h2>
       <DetallesGeneros/>
    </div>
  </template>
  
  <script>
  import DetallesGeneros from '@/components/ComponenteGeneros.vue'
  
  export default {
    name: 'generosList',
    components: {
        DetallesGeneros
    }
  }
  </script>
  