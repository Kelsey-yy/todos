<template>
  <div id="app">
    <section class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </section>
  </div>
</template>

<script>
import TodoHeader from './components/todo-header.vue'
import TodoMain from './components/todo-main.vue'
import TodoFooter from './components/todo-footer.vue'
export default {
  components: {
    // 'todo-header': TodoHeader
    // TodoHeader: TodoHeader
    TodoHeader,
    TodoMain,
    TodoFooter
  }
}
</script>

<style lang="less">
</style>
