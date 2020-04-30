<template>
  <div class="tasks">
    <h1>Your Tasks</h1>

    <div v-if="tasks.length">
      <app-task v-for="task in tasks" :task="task" :key="task.id"></app-task>
    </div>

    <p v-else>No Tasks</p>

    <div class="description">
      <p>There you can see your tasks. They have "active" status by default.</p>
      <p>To see full description click on the arrow</p>
      <p>If you clicked on arrow, you can edit, complete and delete your task.</p>
    </div>
  </div>
</template>

<script>
import Task from "@/views/Task.vue";

export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    }
  },
  components: {
    appTask: Task
  }
};
</script>

<style scoped lang="scss">
.tasks {
  max-width: 900px;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  margin-top: 30px;
  & h1 {
    text-align: center;
    font-size: 40px;
    color: rgb(19, 136, 107);
  }
  & p {
    font-size: 30px;
    text-align: center;
    margin-top: 100px;
  }
}
.description {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 700px;
  margin-top: 50px;
  & p {
    line-height: 25px;
    font-size: 15px;
    margin: 0;
  }
}
</style>