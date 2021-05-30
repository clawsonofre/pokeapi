<template>
  <div id="PokemonCharapter">
    <div class="PokemonInfo">
      <b-badge pill :variant="randomColor()">N° {{ pokemonData.id }}</b-badge>
      <br />
      <div class="PokemonSprite">
        <img :src="spriteNormal + pokemonData.name + '.png'" />
        <img :src="spriteShiny + pokemonData.name + '.png'" />
      </div>
      <br />
      <br />

      <b-badge pill variant="info">
        <span class="PokemonName">{{ pokemonData.name }}</span>
      </b-badge>
    </div>
    <br />
    <div class="PokemonTableType">
      Types:
      <span>
        <b-badge
          class="PokemonBadge"
          :variant="randomColor()"
          pill
          v-for="type in pokemonData.types"
          :key="type.type.name"
          >{{ type.type.name }}</b-badge
        >
      </span>
    </div>
    <br />
    <div class="PokemonTableAbility">
      Abilities:
      <b-badge
        class="PokemonBadge"
        pill
        :variant="randomColor()"
        v-for="ability in pokemonData.abilities"
        :key="ability.ability.name"
        >{{ ability.ability.name }}</b-badge
      >
    </div>
    <br />

    <div
      class="row align-items-center"
      type="none"
      v-for="stats in pokemonData.stats"
      :key="stats.id"
    >
      <div class="col-4">
        <b-badge pill aria-value now="200" variant="success">{{
          stats.stat.name
        }}</b-badge>
      </div>
      <div class="col-7">
        <b-progress
          class="PokemonProgressBar"
          :variant="randomColor()"
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
  name: 'poke-modal',
  data() {
    return {
      spriteNormal: "https://img.pokemondb.net/sprites/home/normal/",
      spriteShiny: "https://img.pokemondb.net/sprites/home/shiny/",
      error: false,
      bars: ["success", "info", "warning", "danger", "primary"]
    };
  },
  props: {
    pokemonData: {
      type: Object,
      required: true
    }
  },
  methods: {
    // creamos un metodo para realizar el cambio de colores aleatorios en las variantes y los progress bars
    randomColor: function() {
      var colors = Math.floor(Math.random() * this.bars.length);
      return this.bars[colors];
    }
  }
};
</script>
<style scoped>
#PokemonCharapter {
  font-family: verdana;
  width: 100%;
}
.PokemonInfo {
  text-align: center;
  font-size: 15px;
}
.PokemonName {
  font-size: 20px;
}
.PokemonSprite img {
  justify-content: right;
  width: 40%;
  max-width: 100%;
}
.PokemonBadge {
  margin-left: 5px;
}
.PokemonTableType,
.PokemonTableAbility {
  text-align: left;
  color: black;
  font-size: 16px;
}
.PokemonProgressBar {
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