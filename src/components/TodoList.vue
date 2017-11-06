<template>
  <div>
    <h6 class="text-center">已完成: {{todos.filter(todo => {return todo.done === true}).length}}</h6>
    <h6 class="text-center">待完成: {{todos.filter(todo => {return todo.done === false}).length}}</h6>
    <Todo v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo"/>
  </div>
</template>
<script>
import Todo from "./Todo";
export default {
  props: ["todos"],
  components: {
      Todo
  }
};
</script>

