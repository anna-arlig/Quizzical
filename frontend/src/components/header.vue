<template>
  <div class="header">
    <div class="heading">
      <h1>Quizzical</h1>
    </div>
    <div class="nav">
      <router-link to="/"><h2>Home</h2></router-link>
      <router-link to="/createquiz"><h2>Create a Quiz</h2></router-link>
      <router-link to="/takequiz"><h2>Take a Quiz</h2></router-link>
      <router-link to="/login"><h2>Login</h2></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.heading {
  background-image: url("../assets/headerimg.jpg");
  min-height: 300px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 120px;
  margin: 0px;
  color: #b77754;
  text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px,
    rgb(0, 0, 0) -0.416147px 0.909297px 0px,
    rgb(0, 0, 0) -0.989992px 0.14112px 0px,
    rgb(0, 0, 0) -0.653644px -0.756802px 0px,
    rgb(0, 0, 0) 0.283662px -0.958924px 0px,
    rgb(0, 0, 0) 0.96017px -0.279415px 0px;
}

.nav {
  background-color: #96ab98;
  margin: 0px;
  display: flex;
  justify-content: space-around;
}

h2 {
  margin: 0px;
  padding: 5px;
  font-size: 35px;
  color: #f1f1f1;
  text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px,
    rgb(0, 0, 0) -0.416147px 0.909297px 0px,
    rgb(0, 0, 0) -0.989992px 0.14112px 0px,
    rgb(0, 0, 0) -0.653644px -0.756802px 0px,
    rgb(0, 0, 0) 0.283662px -0.958924px 0px,
    rgb(0, 0, 0) 0.96017px -0.279415px 0px;
}

h2:hover {
  transform: scale(1.2);
}
</style>
