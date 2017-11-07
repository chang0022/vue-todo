<template>
  <div class="card mb-3" style="width: 20rem;">
        <div v-show="!isEditing">
            <div class="card-body">
                <h4 class="card-title">{{todo.title}}</h4>
                <p class="card-text">{{todo.project}}</p>
            </div>
            <div class="card-footer clearfix">
                <span class="float-right" @click="showForm">
                    <i class="fa fa-pencil-square-o"></i>
                </span>
                <span class="float-right mr-3" @click="deleteTodo(todo)">
                    <i class="fa fa-trash-o"></i>
                </span>
            </div>
        </div>
        <div v-show="isEditing">
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" class="form-control" v-model="newTitle">
                    </div>
                    <div class="form-group">
                        <label>Project</label>
                        <input type="text" class="form-control" v-model="newProject">
                    </div>
                    <button type="button" class="btn btn-outline-secondary" @click="hideForm(), editTodo(todo)">确定</button>
                </form>
            </div>
        </div>
        <div class="btn btn-outline-success" v-show="!isEditing && todo.done">完成</div>
        <div class="btn btn-outline-danger" v-show="!isEditing && !todo.done" @click="completeTodo(todo)">待完成</div>
    </div>
</template>
<script>
import sweetalert from "sweetalert";

export default {
  props: ["todo"],
  data() {
    return {
      isEditing: false,
      newTitle: this.todo.title,
      newProject: this.todo.project
    };
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    editTodo(todo) {
      const newTodo = {};
      newTodo.title = this.newTitle;
      newTodo.project = this.newProject;
      this.$store.dispatch("editTodo", { todo, newTodo });
    },
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
          this.$store.dispatch("deleteTodo", todo);
          sweetalert(
            "删除!",
            `Your To-Do ${todo.title} has been deleted.`,
            "success"
          );
        }
      });
    },
    completeTodo(todo) {
      this.$store.dispatch("completeTodo", todo);
      sweetalert("成功!", "To-Do 完成!", "success");
    }
  }
};
</script>

