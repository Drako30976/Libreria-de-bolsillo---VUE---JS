<template>
    <div class="container">
        <div class="ver">
            <h2 v-show="local.length > 0">Gracias Por Subscribirte !</h2>
            <div class="lista" v-for="item in local" :key="item.fecha">
                <p>Muchas gracias <span>{{ item.nombre }}</span>, ahora que estas subscrito, te enviaremos notificaciones a tu correo, <span>{{ item.correo }}</span>, para mantenerte actualizado sobre material nuevo de tu, o tus generos favoritos, <span class="normal" v-for="(x, index) in item.selected" :key="index"> {{x}}.</span></p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'VerDatos',
    data: function () {
        return {
            local: [],
        }
    },
    mounted: function () {
        this.ver_local();
    },
    methods: {
        ver_local: function () {

            if (localStorage.dato) {
                this.local = JSON.parse(localStorage.getItem("dato"))
            }
        },
    }
}
</script>
  
<style>
span{
font-weight: bold;
color: blue;
}
</style>
  