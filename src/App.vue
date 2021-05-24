<template>
  <div id="app">
    <PokeHeader></PokeHeader>
    <router-view></router-view>
    <div></div>
    <!--Arreglar para que el footer se vea bien, no se ve completo -->
    <PokeFooter class="mt-3"></PokeFooter>
  </div>
</template>
<script>
// importamos los componentes Header y Footer a nuestro componente principal
import PokeHeader from "./components/views/PokeHeader";
import PokeFooter from "./components/views/PokeFooter";
export default {
  name: "App",
  components: {
    PokeHeader,
    PokeFooter
  }
};
</script>

<style>
#app {
  background-image: url(./assets/img/background.jpg) ;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 0 auto;
  background-image: 50%;
}
::-webkit-scrollbar {
  display: none;
}

</style>
