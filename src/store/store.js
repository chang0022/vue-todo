import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
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
    },
    mutations: {
        ADD_TODO(state, todo) {
            state.todos.push(todo);
        },
        EDIT_TODO(state, {todo, newTodo}) {
            const todoIndex = state.todos.indexOf(todo);
            state.todos[todoIndex].title = newTodo.title;
            state.todos[todoIndex].project = newTodo.project;
        },
        DELETE_TODO(state, todo) {
            const todoIndex = state.todos.indexOf(todo);
            state.todos.splice(todoIndex, 1);
        },
        COMPLETE_TODO(state, todo) {
            const todoIndex = state.todos.indexOf(todo);
            state.todos[todoIndex].done = true;
        },
    },
    actions: {
        addTodo({commit}, todo) {
            commit('ADD_TODO', todo);
        },
        editTodo({commit}, {todo, newTodo}) {
            commit('EDIT_TODO', {todo, newTodo});
        },
        deleteTodo({commit}, todo) {
            commit('DELETE_TODO', todo);
        },
        completeTodo({commit}, todo) {
            commit('COMPLETE_TODO', todo);
        }
    },
    getters: {
        newTodo: state => state.newTodo,
        todos: state => state.todos
    }
});