<template>
  <div id="app">
    <h1 class="text-center">Vue.js Todo App</h1>
    <div class="container">
      <div class="row justify-content-md-center">
        <TodoList v-bind:todos="todos"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
  name: "app",
  components: {
    TodoList
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo A",
          project: "Project A",
          done: false
        },
        {
          id: 2,
          title: "Todo B",
          project: "Project B",
          done: true
        },
        {
          id: 3,
          title: "Todo C",
          project: "Project C",
          done: false
        },
        {
          id: 4,
          title: "Todo C",
          project: "Project C",
          done: false
        }
      ]
    };
  }
};
</script>
