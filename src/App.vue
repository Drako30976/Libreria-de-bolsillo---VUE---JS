<template>
  <div id="app" v-cloak>
    <h1>Libreria de bolsillo</h1>
    <div id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/generos">Generos</router-link></li>
        <li><router-link to="/contacto">Contactanos</router-link></li>
    </ul>
    </div>
    <router-view/>
  </div>

</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}


#nav a {
  font-weight: bold;
  color: rgb(0, 0, 0);

}

#nav a.router-link-exact-active {
  color: white;
}

ul{
  list-style: none;
  margin: 50px;
}
ul li{ 
  background: rgb(224, 97, 38);
  display: inline-block;
  font-size: 1em;
  border: solid 3px grey;
  border-radius: 5px;
  padding: 8px;
  margin: 20px 50px;
  width: 150px;
}
h1{
  font-size: 3em;
  padding: 10px;
  font-family:Georgia, 'Times New Roman', Times, serif;
  color: rgb(90, 38, 38);
  text-shadow: 2px 2px 2px rgb(68, 66, 66);
}
</style>
