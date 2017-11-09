<template>
  <div>
      <h2 v-text="question.title"></h2>
      <h1 v-text="question.body"></h1>
      <button class="button">Edit</button>
      <input type="text" name="title" v-model="question.title">
  </div>
</template>

<script>
export default {
  props:['question']
}
</script>

