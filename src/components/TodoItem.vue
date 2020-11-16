<template lang="pug">
    v-list-item
        template(v-slot:default)
            v-list-item-action
                v-checkbox(:input-value="item.isCompleted" @change="toggleCompleted(item.id)")
            
            v-list-item-content
                v-list-item-title(:class="{ strikethrough: item.isCompleted}") {{item.text}}
                v-list-item-subtitle {{item.createdAt | dateFormatter}}
            
            v-list-item-action
            v-icon(color="grey lighten-1" @click="removeTodo(item.id)") mdi-delete
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";
import dateFormatter from "../filters/dateFormatter";

@Component({
  props: ["item"],
  filters: {
    dateFormatter,
  },

  components: {
    TodoItem,
  },
})
export default class App extends Vue {
  public removeTodo(id: string) {
    this.$store.dispatch("removeTodo", id);
  }
  public toggleCompleted(id: string) {
    this.$store.dispatch("toggleCompleted", id);
  }
}
</script>

<style>
.strikethrough {
  text-decoration: line-through;
}
</style>
