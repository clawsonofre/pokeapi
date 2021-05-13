<template>
  <div id="pokedex">
    <div class="container" style="font-size: 30px">
      Buscar Pokemon en la Pokedex
    </div>
    <!-- Imagen del logo principal, Pokebola -->
    <div>
      <img
        src="../assets/img/pkball.png"
        fluid="responsive image"
        class="pokeball"
        alt="Responsive image"
      />
    </div>
    <!-- forms para la busqueda de los pokemons -->
    <div class="container">
      <div class="p-2">
        <div class="buscador">
          <b-form-input
            @keyup.enter="buscarMostrarPokemon"
            class="form-control"
            maxlength="20"
            v-model="texto"
            style="text-align: center"
            placeholder="Pokemon / Number (1-898)"
          ></b-form-input>
          <br />
<!-- Boton que genera la ejecucion del metodo con axios para mostrarme al pokemon-->
          <b-button
            class="images btn btn-primary"
            @click="buscarMostrarPokemon"
            variant="primary"
            >Buscar <b-icon-search></b-icon-search
          ></b-button>
        </div>
        <div class="danger">
          <br />
          <!-- Condicional con Imagen donde muestra que ha ocurrido un error -->
          <p v-if="error">
            Error al buscar Pokemon
            <br />
            <img style="width: 10vw" src="../assets/img/danger.png" />
          </p>
          <div class="box" v-if="random">
            <div>
              <b-card
                align
                img-alt="Image"
                img-top
                tag="article"
                style="
                  width: 100%;
                  border-radius: 25px;
                  background-color: rgba(100%, 100%, 100%, 0.5);
                "
                class="mb-2"
              >
              <!-- Datos del pokemon encontrado o generado aleatoriamente -->
                <b-badge style="font-size: 10px" pill variant="primary"
                  >N° {{ random.id }}</b-badge
                >
                <br />
                <br />
                <img :src="spriteNormal + random.name + '.png'" />
                <br />
                <br />
                <h2 id="pokemons" class="pokemons">{{ random.name }}</h2>

              <!-- Boton que genera el modal donde visualizamos las imagenes, caracteristicas y estatus del pokemon -->
                <b-button v-b-modal.modal-md variant="primary"
                  >About <b-icon-eye></b-icon-eye
                ></b-button>
                <b-modal class="modal-footer1" id="modal-md" size="lg">
                  <Modal :datosPokemon="random"></Modal>
                </b-modal>
              </b-card>
            </div>
          </div>
          <br />
          <div
            style="
              margin-left: 5%;
              margin-right: 5%;
              background-color: white;
              border-radius: 50px;
            "
          >
            <p>
              NOTA: para buscar ingresa un nombre o número.
              <br />Si dejas la búsqueda en blanco, se generará un pokemon
              aleatorio.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// importamos el archivos que nos mostrara las imagenes y caracteristicas del pokemon encontrado
import Modal from "./modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      texto: "",
      error: false,
      mostrar: "",
      tipoNumero: "",
      random: null,
      spriteNormal: "https://img.pokemondb.net/sprites/home/normal/",
    };
  },
  methods: {
    // metodo donde realizamos la busqueda en nuestro search o si esta en blanco nos arroja un numero aleatorio
    buscarMostrarPokemon: function () {
      if (this.texto === "") {
        this.texto = Math.floor(Math.random() * 807);
      }
      this.axios
        .get("https://pokeapi.co/api/v2/pokemon/" + this.texto)
        .then((response) => {
          this.random = response.data;
          this.error = false;
        })
        // capturamos los errores en tal caso no coincida la busqueda
        .catch((error) => {
          if (error.response.status == 404) {
            this.error = true;
            this.random = null;
          } else {
            if (error.response.status == 500) {
              this.error = true;
              this.random = null;
            }
          }
        });
      // realizamos una limpieza del campo para que no quede con datos escritos
      if (this.texto != "") {
        this.texto = "";
      }
    },
  },
};
</script>
<style>
#pokedex {
  font-family: verdana;
}
img {
  width: 70%;
  height: auto;
}
.box {
  width: 300px;
  margin: 0 auto;
  max-width: 100%;
  z-index: 1;
}
.box h1:first-letter,
h2:first-letter,
h3:first-letter,
h4:first-letter,
h5:first-letter {
  text-transform: uppercase;
}
.pokeball {
  position: relative;
  width: 300px;
  max-width: 80%;
}
.container1 {
  font-size: 7px;
  z-index: 1;
  text-align: center;
}
.buscador .form-control {
  max-width: 90%;
  width: 70%;
  margin: auto;
}
.modal-footer1 {
  justify-content: center;
}
@media only screen and (max-width: 650px) {
  p {
    font-size: 15px;
  }
}
@media only screen and (max-width: 500px) {
  p {
    font-size: 8px;
  }
}
@media only screen and (max-width: 500px) {
  .pokeball {
    width: 180px;
  }
}
*::-webkit-input-placeholder {
  /* Google Chrome y Safari */
  font-size: 15px;
}
</style>