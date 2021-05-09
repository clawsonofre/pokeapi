<template>
  <div id="Header">
    <div>
      <b-navbar
        style="z-index: 1005;"
        class="p-1"
        toggleable="sm"
        type="dark"
        variant="dark"
      >
        <router-link to="pokedex">
          <b-navbar-brand>Pokedex</b-navbar-brand>
        </router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </b-navbar>
    </div>
  </div>
</template>

<style>
.dashboard {
z-index: 9999;
}
</style>

