<template>
  <div>
    <h6 class="text-center">已完成: {{todos.filter(todo => {return todo.done === true}).length}}</h6>
    <h6 class="text-center">待完成: {{todos.filter(todo => {return todo.done === false}).length}}</h6>
    <Todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" v-bind:key="todo.id" :todo.sync="todo"/>
  </div>
</template>
<script>
import sweetalert from "sweetalert";
import Todo from "./Todo";
export default {
  props: ["todos"],
  components: {
    Todo
  },
  methods: {
    deleteTodo(todo) {
      sweetalert({
        title: "确定删除?",
        text: "该 To-DO 将被删除",
        icon: "warning",
        buttons: {
          cancel: {
            text: "取消",
            value: null,
            visible: true,
            closeModal: true
          },
          confirm: {
            text: "确定",
            value: true,
            visible: true,
            closeModal: true
          }
        }
      }).then(value => {
        if (value) {
          const todoIndex = this.todos.indexOf(todo);
          this.todos.splice(todoIndex, 1);
          sweetalert("Deleted!", "Your To-Do has been deleted.", "success");
        }
      });
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
      sweetalert("成功!", "To-Do 完成!", "success");
    }
  }
};
</script>

