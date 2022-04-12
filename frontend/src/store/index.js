import { createStore } from 'vuex'

export default createStore({
  state: {
    questionsArray: [{
      title: "Hur många bultar finns det i Ölandsbron?",
      firstanswer: "1024",
      firstcorrect: true,
      secondanswer: "1337",
      secondcorrect: false,
      thirdanswer: "bananpaj",
      thirdcorrect: false,},
      {
        title: "Hur många bultar finns det i Ölandsbron?",
        firstanswer: "1024",
        firstcorrect: true,
        secondanswer: "1337",
        secondcorrect: false,
        thirdanswer: "bananpaj",
        thirdcorrect: false,
        
      }]
  },
  mutations: {
    addQuestionToArray(state, question){
      state.questionsArray.push(question)
    }
  },
  actions: {
    addQuestion(context, question){
      context.commit('addQuestion', {question})
    }
  },
  modules: {
  }
})
