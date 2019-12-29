<template>
  <footer class="footer todo-footer" v-show="isShowFooter">
    <span class="todo-count">
      <strong>{{ leftCounts }}</strong> item left
    </span>
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button @click="clearTodo" v-show="isClear" class="clear-completed">Clear completed</button>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// mapGetters 是一个辅助函数, 可以将 vuex中的 getters 直接映射给 组件作为计算属性使用
export default {
  // computed: {
  //   isShowFooter () {
  //     return this.$store.getters.isShowFooter
  //   },
  //   leftCounts () {
  //     return this.$store.getters.leftCounts
  //   },
  //   isShowClear () {
  //     return this.$store.getters.isShowClear
  //   }
  // }

  // 这么写, 没法写自己的计算属性了, 所以需要用到展开运算符处理
  computed: {
    ...mapGetters(['isShowFooter', 'leftCounts']),
    ...mapGetters({
      isClear: 'isShowClear'
    })
  },
  methods: {
    // clearTodo () {
    //   // 提交mutation让vuex自己去清空已完成的内容
    //   this.$store.commit('clearTodo')
    // }
    // ...mapMutations(['clearTodo'])

    // clearTodo () {
    //   // 异步的内容, 需要分发action
    //   this.$store.dispatch('clearTodoAction')
    // }
    ...mapActions({
      clearTodo: 'clearTodoAction'
    })
  }
}
</script>

<style>

</style>
