<template>
  <div>
    <p>
      NOTE: To search, enter a name or number.
      <br />if the search is blank, a random pokemon will be spawned.
    </p>
  </div>
</template>
<script>
export default {
  name: 'poke-nota',
}
</script>
<style scoped>
p {
  margin-left: 5%;
  margin-right: 5%;
  background-color: white;
  border-radius: 50px;
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
</style>