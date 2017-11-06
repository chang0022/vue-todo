<template>
  <div class="card mb-3" style="width: 20rem;">
        <div class="card-body">
            <h4 class="card-title">{{todo.title}}</h4>
            <p class="card-text">{{todo.project}}</p>
        </div>
        <div class="card-footer clearfix">
                <span class="float-right">
                    <i class="fa fa-pencil-square-o"></i>
                </span>
            </div>
        <div class="btn btn-outline-success" v-show="todo.done">完成</div>
        <div class="btn btn-outline-danger" v-show="!todo.done">待完成</div>
    </div>
</template>
<script>
export default {
  props: ['todo']
}
</script>

