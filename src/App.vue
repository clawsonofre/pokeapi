<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <div></div>
    <!--Arreglar para que el footer se vea bien, no se ve completo -->
    <Footer class="mt-5"></Footer>
  </div>
</template>
<script>
// importamos los componentes Header y Footer a nuestro componente principal
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer
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
