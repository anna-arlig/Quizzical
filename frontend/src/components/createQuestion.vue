<template>
  <div class="created">
    <p class="title">{{ question.title }}</p>
    <p class="answer">
      {{ question.firstanswer }} - {{ question.firstcorrect }}
    </p>
    <p class="answer">
      {{ question.secondanswer }} - {{ question.secondcorrect }}
    </p>
    <p class="answer">
      {{ question.thirdanswer }} - {{ question.thirdcorrect }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["question"],
};
</script>

<style>
.title {
  font-size: 20px;
}

.answer {
  font-size: 20px;
  margin: 5px;
}

.created {
  background-color: white;
  margin-bottom: 20px;
  padding: 10px;
}
</style>
