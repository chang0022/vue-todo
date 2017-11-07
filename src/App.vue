<template>
  <div id="app">
    <h1 class="text-center">Vue.js Todo App</h1>
    <div class="container">
      <div class="row justify-content-md-center">
        <TodoList v-bind:todos="todos"/>
      </div>
      <div class="row justify-content-md-center">
        <CreateTodo/>  
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";

export default {
  name: "app",
  components: {
    TodoList,
    CreateTodo
  },
  data() {
    return {
      todos: this.$store.getters.todos
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
      sweetalert('成功!', 'To-Do 添加', 'success');
    }
  }
};
</script>
