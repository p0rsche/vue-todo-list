<template>
  <v-app>
    <v-main>
      <TodoList/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoList from './components/TodoList.vue';

export default Vue.extend({
  name: 'App',

  created() {
    this.$store.dispatch('fetchTodos');
  },

  components: {
    TodoList,
  },
});
</script>
