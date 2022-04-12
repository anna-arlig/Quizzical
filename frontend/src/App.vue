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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap");

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
h3,
h4 {
  font-family: "Shrikhand", cursive;
  text-decoration: none;
}

p,
input,
label,
button,
select {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}
</style>
