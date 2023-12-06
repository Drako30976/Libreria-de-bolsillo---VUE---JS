<template>
  <div class="cuentos">
    <div v-if="i == '1'" class="left">
      <h2>El cazador</h2>
      <img src="../assets/terror1.jpg" alt="Terror" />

      <div class="texto">
        <p>
          Una vez un cazador estaba yendo a un lugar al que siempre iba a cazar,
          pero mientras iba por la ruta, detectó una zona que parecía tener
          abundantes presas. El hombre estacionó su auto, bajó y comenzó a
          caminar por el bosque.No vio ningún animal y, de un momento a otro,
          apareció una neblina muy espesa que no le permitía ver bien. El
          cazador se sintió desorientado y empezó a tener miedo. Siguió
          caminando hasta que pudo distinguir una luz, se acercó a aquella luz y
          se dio cuenta de que era la luz de una cabaña. Cuando entró en la
          cabaña, la niebla se disipó, pero el hombre saltó del susto por al ver
          los cuadros aterradores con caras de personas en las cuatro paredes.
          De pronto, lo invadió un terrible cansancio y se tiró en el sillón
          para dormir. Al despertar, abrió los ojos lentamente, volvió a mirar
          los cuadros y gritó de horror: no eran pinturas sino ventanas con
          personas que lo miraban.
        </p>
      </div>
    </div>

    <div v-else-if="i == '2'" class="left">
      <h2>La habitación del hotel</h2>

      <img src="../assets/terror2.jpg" alt="La habitación del hotel" />
      <div class="texto">
        <p>
            "Cierta vez un hombre estaba manejando de noche en la ruta, vio un hotel al costado del camino y decidió detenerse para descansar un poco. Llegó a la recepción, se registró y la recepcionista le dio la llave de su cuarto pero le advirtió: 'en tu piso hay una habitación que no tiene número, no mires por el cerrojo ni golpees la puerta'. El hombre llegó a su piso y cuando pasó por al lado de la puerta sin número, sintió un escalofrío. Entró a su habitación, cenó, miró la televisión y, de repente, tuvo mucha curiosidad por lo que había en esa habitación. Salió de su cuarto, se acercó a la habitación misteriosa, miró por el cerrojo y vio que había una mujer vestida de blanco, pero que estaba de espaldas y todo el cuarto era rojo. Pegó un grito, se fue a su cuarto y no pudo dormir en toda la noche. Al día siguiente, antes de irse, pasó a dejar las llaves por la recepción y no pudo evitar decirle a la recepcionista: 'Miré por el cerrojo'. '¿Y qué viste?'' le dijo ella. 'Vi a una mujer'. La recepcionista le respondió: 'Te dije que no miraras, allí se murió una mujer en extrañas circunstancias y su fantasma vive en esa habitación hasta hoy. Todos los que miraron por el cerrojo aparecerieron muertos a los pocos días'",
        </p>
      </div>
    </div>

    <div v-else-if="i == '3'" class="left">
      <h2>El duende</h2>

      <img src="../assets/terror3.jpg" alt="El duende" />
      <div class="texto">
        <p>
            "Un hombre y una mujer buscaban un hogar donde vivir. Después de mucho buscar, encontraron una casa a buen precio, con algunos problemas estructurales que fueron reformando de a poco. Todas las noches a las doce sonaba el timbre, pero cuando iban a la puerta no había nadie. Un día, el hombre se quedó viendo por la mirilla y se dio cuenta de que el timbre se presionaba solo: nadie lo apretaba. Los días seguían pasando y ocurría siempre lo mismo. Una vez, una amiga de la mujer fue a visitarla y, cuando salió sola al jardín, vio a un duende que la saludó y se fue corriendo. La mujer no le creyó a su amiga, pero lo mismo le sucedió a otra amiga y la mujer comenzó a dudar. Habló con su esposo, pero él no le creyó. Un día el hombre estaba cocinando, abrió el horno para sacar la comida y cuando la apoyó sobre la mesada, se dio cuenta de que habían desaparecido todos los platos y los cubiertos. El hombre se dio vuelta y vio al pequeño duende con los platos y los cubiertos en sus manos.",
        </p>
      </div>
    </div>

    <div v-else-if="i == '4'" class="left">
      <h2>Mañana, cuando despierte</h2>

      <img src="../assets/amor1.jpg" alt="Mañana, cuando despierte" />
      <div class="texto">
        <p>
            "La incertidumbre no me deja dormir. Éste sería un domingo cualquiera, si no fuese porque el día que le sigue no será un lunes normal. Probablemente me toque guardar en la memoria esta fecha para la posteridad o se convierta en un recuerdo que no pueda..."
        </p>
      </div>
    </div>

    <div v-else-if="i == '5'" class="left">
      <h2>El escondite de las palabras</h2>

      <img src="../assets/amor2.jpg" alt="El escondite de las palabras" />
      <div class="texto">
        <p>
            "Las dos familias se encontraban reunidas en el salón, a la espera. La luz del domingo comenzaba a apagarse, mientras se encendía la conversación, hasta que los primeros gritos desde la habitación contigua se colaron entre la celulosa de las paredes. Entonces todos comprendieron que no habría boda"
        </p>
      </div>
    </div>

    <div v-else-if="i == '6'" class="left">
      <h2>Por un último adiós</h2>

      <img src="../assets/amor3.jpg" alt="Por un último adiós" />
      <div class="texto">
        <p>
            "El reloj de la estación marcaba las nueve y dos minutos. El frío de diciembre acompañaba una noche que amenazaba lluvia y la tibia luz de una farola añadía pinceladas de tristeza a la escena. En el solitario andén, sólo Mario tenía motivos para esperar al tren"
        </p>
      </div>
    </div>

    <div v-else-if="i == '7'" class="left">
      <h2>Fotosíntesis</h2>

      <img src="../assets/humor1.jpg" alt="Fotosíntesis" />
      <div class="texto">
        <p>
            "Antes de que empiecen los ronquidos y no pueda concentrarme, intentaré describir el objeto que tengo delante. A veces lo parece, pero no es una maceta. Es algo voluminoso que mira el televisor y en ocasiones se mueve e incluso se desplaza. «Padre -le digo-, ¿por qué no sale un poco a tomar el fresco?»."
        </p>
      </div>
    </div>

    <div v-else-if="i == '8'" class="left">
      <h2>Ejemplaridad</h2>

      <img src="../assets/humor2.jpg" alt="Ejemplaridad" />
      <div class="texto">
        <p>
            "Jeremías Mousgekiwen, víctima de la escalada de buenismo social, no se conformó con aplaudir a los ocho. Hizo los recados a las abuelas de su bloque, grabó tutoriales de ejercicio en la rueda de su jaula, cooperó con una asociación vecinal pelando pipas para los más necesitados, donó su cuerpo a la ciencia, participó en un proyecto de mejunjes moleculares y acabó en un banco de alimentos. Estaba rico."
        </p>
      </div>
    </div>

    <div v-else-if="i == '9'" class="left">
      <h2>Barranquismo</h2>

      <img src="../assets/humor3.png" alt="Barranquismo" />
      <div class="texto">
        <p>
            "«Madre, ¿seguro que no quiere ingresar en la residencia?». «¡Que no hija; otra vez! ¡Si se os ocurre encerrarme allí, me muero!». Agarré la silla, empujé con todas mis fuerzas y, en el borde del barranco, la arrojé al vacío. Total, el cargo de conciencia iba a ser el mismo, ¿no era mejor ahorrarse los tediosos trámites?"
        </p>
      </div>
    </div>

    <button @click="$router.go(-1)">Volver</button>
  </div>
</template>

<script>
export default {
  name: "VistaGeneros",
  data: function () {
    return {
      i: "",
    };
  },
  mounted: function () {
    this.recuperar();
  },

  methods: {
    recuperar: function () {
      this.i = this.$route.params.id;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.cuentos {
  color: rgb(58, 56, 56);
}
.left img {
  border-radius: 5%;
  margin: 10px;
}
.texto {
    font-family:'Times New Roman', Times, serif;
    word-spacing: 5px;
    line-height: 30px;
}

.left {
  overflow: auto;
}
button{
    width: 150px;
    font-size: 1.2em;
    border-radius: 5px;
    background-color: rgb(79, 99, 189);
}
</style>
