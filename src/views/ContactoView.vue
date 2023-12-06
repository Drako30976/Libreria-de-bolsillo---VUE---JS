<template>
    <div class="container">
        <p>Puedes suscribirte a nuestra pagina para recibir actualizaciones sobre nuevas historias de tus generos favoritos.
        </p>
        <div class="form">
            <form v-on:submit.prevent>
                <label for="nombre">Nombre completo</label>
                <input type="text" v-model.trim="form_data.nombre" placeholder="Nombre" id="nombre" name="nombre"
                    required />
                <label for="selec">Genero favorito</label>
                <select v-model="form_data.selected" multiple name="selec" id="selec" required>
                    <option value="Terror">Terror</option>
                    <option value="Romance">Romance</option>
                    <option value="Ciencia Ficción">Ciencia Ficción</option>
                    <option value="Aventuras">Aventuras</option>
                    <option value="Comedia">Comedia</option>
                    <option value="Misterio">Misterio</option>
                    <option value="Drama">Drama</option>
                </select>

                <label for="email">Correo Electronico</label>
                <input v-model.trim="form_data.correo" type="email" id="email" name="email" required />

                <div class="center">
                    <button type="submit" @click="guardar(form_data)" class="guardar" value="Guardar">
                        Enviar
                    </button>
                </div>
            </form>
            <p :class="validar === 0 ? 'oculto' : 'nooculto'">Por favor, debes cargar todos los datos para continuar</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactoView",
    data: function () {
        return {
            form_data: {
                nombre: "",
                selected: [],
                correo: "",
            },
            arr: [],
            validar: 0
        };
    },
    methods: {
        guardar: function (form_data) {
            if (form_data.nombre && form_data.selected.length > 0 && form_data.correo) {
                form_data = Object.assign({}, form_data, { fecha: new Date().getTime() });
                this.arr.push(form_data);
                localStorage.setItem("dato", JSON.stringify(this.arr));
                this.$router.push("/ver");
            } else {
                this.validar = 1
            }
        },
    },
};
</script>

<style>
li {
    list-style: none;
}

.form {
    width: 500px;
    background: rgb(70, 121, 197);
    font-family: verdana;
    font-size: 20px;
    text-shadow: 2px 3px 5px grey;
    color: white;
    border-radius: 5px;
    border: 3px solid rgb(37, 34, 34);
}

form {
    width: 500px;
}

select,
label,
input[type="text"],
input[type="email"],
textarea {
    width: 300px;
    display: inline-block;
    padding: 5px;
    margin: 5px 20px;
}

button {
    background-color: white;
    width: 220px;
    display: inline-block;
    padding: 5px;
    margin: 30px 20px;
}

.container>div {
    margin: 0 auto;
    margin-top: 60px;
}

.oculto {
    display: none;
}

.nooculto {
    display: block;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgb(2, 2, 2);
}</style>
