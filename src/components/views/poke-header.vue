<template>
  <div id="PokeHeader">
    <b-navbar class="p-1" toggleable="sm" type="dark" variant="dark">
      <router-link to="pokedex">
        <b-navbar-brand>Pokedex</b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'poke-header',
}
</script>
<style scoped>
#PokeHeader {
  z-index: 1005;
}
</style>