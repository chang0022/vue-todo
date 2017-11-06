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
                        <input type="text" class="form-control" v-model="todo.title">
                    </div>
                    <div class="form-group">
                        <label>Project</label>
                        <input type="text" class="form-control" v-model="todo.project">
                    </div>
                    <button type="button" class="btn btn-outline-secondary" @click="hideForm">确定</button>
                </form>
            </div>
        </div>
        <div class="btn btn-outline-success" v-show="!isEditing && todo.done">完成</div>
        <div class="btn btn-outline-danger" v-show="!isEditing && !todo.done" @click="completeTodo(todo)">待完成</div>
    </div>
</template>
<script>
export default {
  props: ["todo"],
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteTodo(todo) {
      this.$emit("delete-todo", todo);
    },
    completeTodo(todo) {
      this.$emit("complete-todo", todo);
    }
  }
};
</script>

