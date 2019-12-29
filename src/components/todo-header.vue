<template>
  <header class="header todo-header">
    <h1>todos</h1>
    <input @keyup.enter="addTodo" v-model="todoName" class="new-todo" placeholder="What needs to be done?" autofocus />
  </header>
</template>

<script>
export default {
  data () {
    return {
      todoName: ''
    }
  },
  methods: {
    addTodo () {
      if (this.todoName.trim() === '') return
      this.$store.commit('addTodo', this.todoName)
      this.todoName = ''
    }
  }
}
</script>

<style>

</style>
