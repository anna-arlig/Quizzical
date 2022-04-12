<template>
  <div class="create">
    <h3>Create a Quiz!</h3>
    <createQuestion
      v-for="question in questions"
      :key="question.title"
      :question="question"
    />
    <h3>Add a new question!</h3>
    <form @submit="createQuiz">
      <div class="create">
        <input
          type="text"
          name="title"
          placeholder="Write your question"
          v-model="question.title"
        />
        <input
          type="text"
          name="firstanswer"
          placeholder="Add an answer"
          v-model="question.firstanswer"
          class="answers"
        />
        <label for="firstcorrect">Is this the correct answer?</label>
        <select name="firstcorrect" v-model="question.firstcorrect">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <input
          type="text"
          name="secondanswer"
          placeholder="Add an answer"
          v-model="question.secondanswer"
          class="answers"
        />
        <label for="secondcorrect">Is this the correct answer?</label>
        <select name="secondcorrect" v-model="question.secondcorrect">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <input
          type="text"
          name="thirdanswer"
          placeholder="Add an answer"
          v-model="question.thirdanswer"
          class="answers"
        />
        <label for="thirdcorrect">Is this the correct answer?</label>
        <select name="thirdcorrect" v-model="question.thirdcorrect">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <button class="add" @click="addQuestion">Add a question</button>
      <button @click="submit">Submit quiz</button>
    </form>
  </div>
</template>

<script>
import createQuestion from "../components/createQuestion.vue";
export default {
  components: { createQuestion },
  computed: {
    questions() {
      return this.$store.state.questionsArray;
    },
  },
  data() {
    return {
      question: {
        title: "",
        firstanswer: "",
        firstcorrect: false,
        secondanswer: "",
        secondcorrect: false,
        thirdanswer: "",
        thirdcorrect: false,
      },
    };
  },

  methods: {
    addQuestion() {
      this.$store.dispatch("addQuestion", this.question);
    },
  },
};
</script>

<style>
h3 {
  color: #b77754;
  margin: 20px;
  font-size: 60px;
  text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px,
    rgb(0, 0, 0) -0.416147px 0.909297px 0px,
    rgb(0, 0, 0) -0.989992px 0.14112px 0px,
    rgb(0, 0, 0) -0.653644px -0.756802px 0px,
    rgb(0, 0, 0) 0.283662px -0.958924px 0px,
    rgb(0, 0, 0) 0.96017px -0.279415px 0px;
}

.create {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9f8;
  padding-bottom: 40px;
}

input,
select {
  margin: 10px;
  font-size: 20px;
  padding: 10px;
}

.answers {
  margin-top: 30px;
}

label {
  font-size: 20px;
}

button {
  padding: 10px;
  font-size: 20px;
  margin: 10px;
}
</style>
