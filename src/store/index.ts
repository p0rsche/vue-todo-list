import Vue from 'vue'
import Vuex from 'vuex'
import TodoModel from '@/models/todo.model'
import fetchAllTodos from '../api/todos';
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    todos: Array<TodoModel>(),
    isLoading: true,
  },
  getters: {
    todos: state => state.todos,
    isLoading: state => state.isLoading,
  },
  mutations: {
    addTodo(state, todo: TodoModel) {
      state.todos.push(todo);
    },
    removeTodo(state, id: string) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    toggleCompleted(state, id: string) {
      state.todos = state.todos.map(todo => {
        if(todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    },
    fetchTodos(state, todos: TodoModel[]) {
      state.todos = todos;
    },
    setLoading(state, flag: boolean) {
      state.isLoading = flag;
    }
  },
  actions: {
    addTodo({ commit }, todo: TodoModel) {
      commit('addTodo', todo);
    },
    removeTodo({ commit }, id: string) {
      commit('removeTodo', id)
    },
    toggleCompleted({ commit }, id: string) {
      commit('toggleCompleted', id)
    },
    // mimic backend work
    async fetchTodos({ commit }) {
      commit('setLoading', true);
      try {
        const todos = await fetchAllTodos();
        commit('fetchTodos', todos);
      } catch (e) {
        console.error(e)
      } finally {
        commit('setLoading', false);
      }
    }
  },
  modules: {
  }
})
