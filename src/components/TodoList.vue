<template>
  <v-card class="mx-auto" max-width="500">
    <v-progress-circular
      v-if="isLoading"
      :size="50"
      :width="7"
      color="green"
      indeterminate
    ></v-progress-circular>
    <v-list v-else>
      <v-list-item>
        <v-text-field
          type="text"
          label="Add new todo"
          clear-icon="mdi-close-circle"
          v-model="todoText"
          :append-outer-icon="'mdi-send'"
          @click:clear="clearTodo"
          @click:append-outer="saveTodo"
          @keyup.enter="saveTodo"
          clearable
        ></v-text-field>
      </v-list-item>
      <TodoItem v-for="(todo, i) in todos" :key="i" :item="todo" />
    </v-list>
  </v-card>
</template>

<script lang="ts">
import TodoModel from "@/models/todo.model";
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";
import uuid from "../helpers/uuid";

@Component({
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters(["todos", "isLoading"]),
  },
  methods: {},
})
export default class App extends Vue {
  private todoText = "";

  public clearTodo() {
    this.todoText = "";
  }

  public saveTodo() {
    const todo: TodoModel = {
      id: uuid(),
      text: this.todoText,
      isCompleted: false,
      createdAt: new Date(),
    };
    this.$store.dispatch("addTodo", todo);
    this.clearTodo();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
