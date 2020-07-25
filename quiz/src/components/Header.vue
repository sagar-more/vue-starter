<template>
  <div>
    <b-nav tabs>
      <b-nav-item disabled>
        <b>Fancy Quiz App</b>
      </b-nav-item>
      <b-nav-item disabled>Question: {{index}}/{{totalCount}}</b-nav-item>
      <b-nav-item disabled>Correct: {{correctCount}}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    correctCount: Number,
    totalCount: Number,
  },
};
</script>