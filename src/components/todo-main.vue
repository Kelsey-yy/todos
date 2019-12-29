<template>
  <section class="main todo-main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{ completed: item.flag, editing: item.id === now }" v-for="item in list" :key="item.id">
        <div class="view">
          <input @change="changeState(item.id)" class="toggle" type="checkbox" :checked="item.flag"/>
          <label @dblclick="showEdit(item.id)">{{ item.name }}</label>
          <button @click="delTodo(item.id)" class="destroy"></button>
        </div>
        <input @keyup.enter="editTodo(item.id, $event)" class="edit" :value="item.name" />
      </li>
    </ul>
  </section>
</template>

<script>
// mapState 用于映射 vuex 中的 state的
// mapMutations 用于映射 vuex 中的 mutations 的, 可以给组件映射方法
// mapMutations(不常用): 必须在方法中, 只进行了 mutation 的提交, 才能简写

import { mapState, mapMutations } from 'vuex'
// vuex的数据, 应该交给vuex自己去改
export default {
  data () {
    return {
      now: -1
    }
  },
  computed: {
    // list () {
    //   return this.$store.state.list
    // }
    ...mapState(['list'])
  },
  methods: {
    // delTodo (id) {
    //   // 将对应id的项, 从list中移出
    //   // 提交mutation
    //   this.$store.commit('delTodo', id)
    // },
    // changeState (id) {
    //   this.$store.commit('changeState', id)
    // },
    ...mapMutations(['delTodo', 'changeState']),
    showEdit (id) {
      this.now = id
    },
    editTodo (id, e) {
      // console.log(id, e.target.value)
      this.$store.commit('editTodo', {
        id,
        name: e.target.value
      })
      this.now = -1
    }
  }
}
</script>

<style>

</style>
