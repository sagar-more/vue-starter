<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template v-slot:lead>{{currentQuestion.question}}</template>

      <hr class="my-4" />

      <b-list-group :class="answered ? 'no-events': ''">
        <b-list-group-item
          v-for="(answer, index) in answers"
          :key="answer"
          @click="selectAnswer(index)"
          :class="answeredClass(index)"
        >{{answer}}</b-list-group-item>
      </b-list-group>

      <b-button
        @click="submitAnswer"
        variant="primary"
        :disabled="selectedIndex===null || answered"
      >Submit</b-button>
      <b-button @click="nextQues" variant="success" :disabled="lastQuestion">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    currentQuestion: Object,
    nextQues: Function,
    incrementCorrectCount: Function,
    lastQuestion: Boolean,
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      answered: false,
      shuffledAnswers: [],
    };
  },
  computed: {
    answers() {
      const { incorrect_answers, correct_answer } = this.currentQuestion;
      return [...incorrect_answers, correct_answer];
    },
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.correctIndex = null;
        this.answered = false;
        this.shuffleAnswers();
      },
    },
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    shuffleAnswers() {
      const { incorrect_answers, correct_answer } = this.currentQuestion;
      const answers = [...incorrect_answers, correct_answer];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(correct_answer);
    },
    submitAnswer() {
      const { correctIndex, selectedIndex } = this;
      this.answered = true;
      this.incrementCorrectCount(selectedIndex === correctIndex);
    },
    answeredClass(index) {
      const { answered, correctIndex, selectedIndex } = this;
      if (!answered && selectedIndex === index) {
        return "selected";
      } else if (answered) {
        return correctIndex === index
          ? "correct"
          : selectedIndex === index
          ? "incorrect"
          : "";
      }
    },
  },
};
</script>

<style scoped>
.no-events > * {
  pointer-events: none;
}
.list-group {
  margin-bottom: 15px;
}
.list-group-item:hover:not(.selected) {
  background-color: #eee;
  cursor: pointer;
}
.btn {
  margin: 0 5px;
}
.selected {
  background-color: lightblue;
}
.correct {
  background-color: green;
}
.incorrect {
  background-color: red;
}
</style>