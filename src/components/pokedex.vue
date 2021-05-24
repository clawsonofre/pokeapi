<template>
  <div id="Pokedex">
    <PokeTitleBall />
    <!-- forms para la busqueda de los pokemons -->
    <div class="container">
      <div class="p-2">
        <div class="search">
          <b-form-input
            @keyup.enter="pokemonSearch"
            class="form-control"
            maxlength="20"
            v-model="pokemonText"
            placeholder="Pokemon / Number (1-898)"
          ></b-form-input>
          <br />
          <!-- Boton que genera la ejecucion del metodo con axios para mostrarme al pokemon-->
          <b-button
            class="images btn btn-primary"
            @click="pokemonSearch"
            variant="primary"
            >Search Pokemon <b-icon-search></b-icon-search
          ></b-button>
        </div>
        <div class="danger">
          <br />
          <PokeError v-if="pokemonError" />
          <div class="box" v-if="pokemonRandom">
            <div>
              <b-card
                align
                img-alt="Image"
                img-top
                tag="article"
                class="card mb-2"
                ><div class="pokemons">
                  <!-- Datos del pokemon encontrado o generado aleatoriamente -->
                  <b-badge pill variant="primary">N° {{ pokemonRandom.id }}</b-badge>
                  <br />
                  <br />
                  <img :src="pokemonSpriteNormal + pokemonRandom.name + '.png'" />
                  <br />
                  <br />
                  <h2 class="pokemons">{{ pokemonRandom.name }}</h2>

                  <!-- Boton que genera el modal donde visualizamos las imagenes, caracteristicas y estatus del pokemon -->
                  <b-button v-b-modal.modal-md variant="primary"
                    >About <b-icon-eye></b-icon-eye
                  ></b-button>
                  <b-modal class="modal-footer1" id="modal-md" size="md">
                    <PokeModal :pokemonData="pokemonRandom" />
                  </b-modal>
                </div>
              </b-card>
            </div>
          </div>
          <br />
          <PokeNota />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// importamos los componentes a usar
import PokeModal from "./PokeModal";
import PokeError from "./PokeError";
import PokeNota from "./PokeNota";
import PokeTitleBall from "./PokeTitleBall";

export default {
  components: {
    PokeTitleBall,
    PokeError,
    PokeModal,
    PokeNota
  },
  data() {
    return {
      pokemonText: "",
      pokemonError: false,
      pokemonRandom: null,
      pokemonSpriteNormal: "https://img.pokemondb.net/sprites/home/normal/"
    };
  },
  methods: {
    // metodo donde realizamos la busqueda en nuestro search o si esta en blanco nos arroja un numero aleatorio
    pokemonSearch: function() {
      if (this.pokemonText === "") {
        this.pokemonText = Math.floor(Math.random() * 807);
      }
      this.axios
        .get("https://pokeapi.co/api/v2/pokemon/" + this.pokemonText)
        .then(response => {
          this.pokemonRandom = response.data;
          this.pokemonError = false;
        })
        // capturamos los errores en tal caso no coincida la busqueda
        .catch(error => {
          if (error.response.status == 404) {
            this.pokemonError = true;
            this.pokemonRandom = null;
          } else {
            if (error.response.status == 500) {
              this.pokemonError = true;
              this.pokemonRandom = null;
            }
          }
        });
      // realizamos una limpieza del campo para que no quede con datos escritos
      if (this.pokemonText != "") {
        this.pokemonText = "";
      }
    }
  }
};
</script>
<style scoped>
#Pokedex {
  font-family: verdana;
}

#Pokedex .PokeTop {
  font-size: 30px;
}

.form-control {
  text-align: center;
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
.container1 {
  font-size: 7px;
  z-index: 1;
  text-align: center;
}
.search .form-control {
  max-width: 90%;
  width: 70%;
  margin: auto;
}
.modal-footer1 {
  justify-content: center;
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