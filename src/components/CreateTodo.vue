<template>
    <div class="mb-5 text-center">
        <button type="button" class="btn btn-light" v-show="!isCreating" @click="openForm"><i class="fa fa-plus"></i></button>
        <div class="card" style="width: 20rem;" v-show="isCreating">
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" v-model="title" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Project</label>
                        <input type="text" v-model="project" class="form-control">
                    </div>
                </form>
                 <div class="btn-group w-100">
                    <button type="button" class="btn btn-outline-primary w-50" @click="createTodo">创建</button>
                    <button type="button" class="btn btn-outline-danger w-50" @click="closeForm">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      project: "",
      isCreating: false
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = true;
    },
    createTodo() {
      if (this.title.length > 0 && this.project.length > 0) {
        const title = this.title;
        const project = this.project;
        this.$emit("create-todo", {
          title,
          project,
          done: false
        });
        this.title = "";
        this.project = "";
        this.isCreating = false;
      }
    }
  }
};
</script>

