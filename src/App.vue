<template>
  <div id="app">
    <h1 class="text-center">Vue.js Todo App</h1>
    <div class="container">
      <div class="row justify-content-md-center">
        <TodoList v-bind:todos="todos"/>
      </div>
      <div class="row justify-content-md-center">
        <CreateTodo v-on:create-todo="createTodo"/>  
      </div>
    </div>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
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
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
       sweetalert('成功!', 'To-Do 添加', 'success');
    }
  }
};
</script>
