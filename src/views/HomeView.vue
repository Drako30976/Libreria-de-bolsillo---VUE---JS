<template>
  <div class="home">
    <h2>Sobre Nosotros</h2>
     <ComponentePresentacion/>
  </div>
</template>

<script>

import ComponentePresentacion from '@/components/ComponentePresentacion.vue'

export default {
  name: 'HomeView',
  components: {
    ComponentePresentacion
  }
}
</script>
