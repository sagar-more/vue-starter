<template>
  <div id="app">
    <Header :index="index+1" :correctCount="correctCount" :totalCount="questions.length" />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :nextQues="next"
            :incrementCorrectCount="incrementCorrectCount"
            :lastQuestion="index+1 === questions.length"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header";
import QuestionBox from "./components/QuestionBox";

export default {
  name: "App",
  components: {
    Header,
    QuestionBox,
  },
  data() {
    return {
      questions: [],
      index: 0,
      correctCount: 0,
    };
  },
  methods: {
    next() {
      this.index++;
    },
    incrementCorrectCount(bool) {
      bool && this.correctCount++;
    },
  },
  mounted: function () {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((res) => (this.questions = res.results));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
