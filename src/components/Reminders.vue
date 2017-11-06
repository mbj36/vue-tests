<template>
  <div>
    <input class="new-reminder" v-model="newReminder">
    <button @click="add">Add Reminders</button>
    <ul v-if="reminders.length">
      <li v-for="reminder in reminders" :key="reminder" v-text="reminder"></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        newReminder:'',
        reminders: []
      }
    }, 
    methods:{
      add(){
        this.reminders.push(this.newReminder)
        this.newReminder = ''
      }
    }
  };
</script>