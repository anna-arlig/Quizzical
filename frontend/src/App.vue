<template>
  <div class="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Shrikhand&display=swap");

html,
body {
  margin: 0px;
}

.app {
  margin-left: 10%;
  margin-right: 10%;
}

h1,
h2,
h3 {
  font-family: "Shrikhand", cursive;
}
</style>
