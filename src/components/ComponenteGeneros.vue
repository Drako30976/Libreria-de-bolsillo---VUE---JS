<template>
  <div class="detalles">
    <ol reversed>
      <h3>Terror</h3>
      <li v-for="item in terror" :key="item.id">{{ item.titulo }}
        <router-link :to="'/generos/' + item.id"> Ver Detalle </router-link>
      </li>
    </ol>
    <ol reversed>
      <h3>Romance</h3>
      <li v-for="item in romance" :key="item.id">{{ item.titulo }}
        <router-link :to="'/generos/' + item.id"> Ver Detalle </router-link></li>
    </ol>
    <ol reversed>
      <h3>Humor</h3>
      <li v-for="item in humor" :key="item.id">{{ item.titulo }}
        <router-link :to="'/generos/' + item.id"> Ver Detalle </router-link></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "DetallesGeneros",
  data: function () {
    return {
      terror: [
        {
          id: 1,
          titulo: "El cazador",
        },
        {
          id: 2,
          titulo: "La habitación del hotel",
        },
        {
          id: 3,
          titulo: "El duende",
        },
      ],
      romance: [
        {
          id: 4,
          titulo: "Mañana, cuando despierte",
        },
        {
          id: 5,
          titulo: "El escondite de las palabras",
        },
        {
          id: 6,
          titulo: "Por un último adiós",
        },
      ],
      humor: [
        {
          id: 7,
          titulo: "Fotosíntesis",
        },
        {
          id: 8,
          titulo: "Ejemplaridad",
        },
        {
          id: 9,
          titulo: "Barranquismo",
        },
      ],
    };
  },
};
</script>
<style>
ol {
  display: flex;
  flex-direction: column;
}

ol li {
  padding: 15px;
  list-style: none;
}
ol li a {
  border: none;
}

[v-cloak] > * {
  display: none;
}
</style>
