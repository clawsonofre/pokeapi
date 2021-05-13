<template>
  <div id="modalCharapterPokemon">
    <div class="infoPokemon" style="font-size: 15px">
      <b-badge pill :variant="colorRandom()">N° {{ datosPokemon.id }}</b-badge>
      <br />
      <div class="imagenPokemon">
        <img :src="spriteNormal + datosPokemon.name + '.png'" />
        <img :src="spriteShiny + datosPokemon.name + '.png'" />
      </div>
      <br />
      <br />

      <b-badge pill variant="info">
        <span style="font-size: 20px">{{ datosPokemon.name }}</span>
      </b-badge>
    </div>
    <br />
    <div class="tableType" style="font-size: 16px">
      Types:
      <span>
        <b-badge
          :variant="colorRandom()"
          style="margin-left: 5px"
          pill
          v-for="tipo in datosPokemon.types"
          :key="tipo.type.name"
          >{{ tipo.type.name }}</b-badge
        >
      </span>
    </div>
    <br />
    <div class="tableAbility" style="font-size: 16px">
      Abilities:
      <b-badge
        style="margin-left: 5px"
        pill
        :variant="colorRandom()"
        v-for="abilidad in datosPokemon.abilities"
        :key="abilidad.ability.name"
        >{{ abilidad.ability.name }}</b-badge
      >
    </div>
    <br />

    <div
      class="row align-items-center"
      type="none"
      v-for="stats in datosPokemon.stats"
      :key="stats.id"
    >
      <div class="col-4">
        <b-badge pill aria-valuenow="200" variant="success">{{
          stats.stat.name
        }}</b-badge>
      </div>
      <div class="col-8">
        <b-progress
          :variant="colorRandom()"
          show-progress
          animated
          :value="stats.base_stat"
        ></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spriteNormal: "https://img.pokemondb.net/sprites/home/normal/",
      spriteShiny: "https://img.pokemondb.net/sprites/home/shiny/",
      error: false,
      bars: ["success", "info", "warning", "danger", "primary"],
    };
  },
  methods: {
    // creamos un metodo para realizar el cambio de colores aleatorios en las variantes y los progress bars
    colorRandom: function () {
      var colors = Math.floor(Math.random() * this.bars.length);
      return this.bars[colors];
    },
  },
  props: {
    datosPokemon: "",
  },
};
</script>
<style>
#modalCharapterPokemon,
h1,
h5 {
  font-family: verdana;
  width: 100%;
}

.infoPokemon,
.tableStats {
  text-align: center;
}
.imagenPokemon img {
  justify-content: right;
  width: 40%;
  max-width: 100%;
}
.tableType,
.tableAbility {
  text-align: left;
  color: black;
}
.Progress {
  height: auto;
  width: 100%;
}

p:first-letter,
b:first-letter,
h1:first-letter,
h5:first-letter,
span::first-letter {
  text-transform: uppercase;
}
</style>