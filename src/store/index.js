import Vue from 'vue'
import Vuex from 'vuex'

// 基于vue的插件, 在模块化的使用中, 需要 Vue.use 一下
Vue.use(Vuex)

// 存放数据的
const state = {
  list: [
    { id: 1, name: '吃饭', flag: false },
    { id: 2, name: '睡觉', flag: true },
    { id: 3, name: '打cc', flag: false }
  ]
}

// 存放操作数据的方法的
// mutations中所有的方法的第一个参数, 都是state
const mutations = {
  delTodo (state, id) {
    state.list = state.list.filter(item => item.id !== id)
  },
  addTodo (state, todoName) {
    state.list.unshift({
      id: +new Date(),
      name: todoName,
      flag: false
    })
  },
  changeState (state, id) {
    // 根据 id 找到对应的 项, 让 flag 取反
    // find / findIndex
    const todo = state.list.find(item => item.id === id)
    todo.flag = !todo.flag
  },
  editTodo (state, payload) {
    // 根据 id 找到对应的项, 设置对应的 name
    // payload => { id: xxx, name: xx }
    const todo = state.list.find(item => item.id === payload.id)
    todo.name = payload.name
  },
  clearTodo (state) {
    // 留下所以未完成的
    state.list = state.list.filter(item => !item.flag)
  }
}

// getters: 可以理解为就是基于 state 的计算属性
// 在getters中, 可以派生出一些基于 state 的属性
const getters = {
  // getters 中的函数第一个参数都是 state
  todoLength (state) {
    return state.list.length
  },
  isShowFooter (state) {
    return state.list.length > 0
  },
  leftCounts (state) {
    // 未完成的个数
    return state.list.filter(item => !item.flag).length
  },
  isShowClear (state) {
    // 只要有一个已完成, 就要显示
    return state.list.some(item => item.flag)
  }
}

// actions 和 mutations 都是提供方法的
// mutations 必须是同步的, 可以直接修改 state 的数据
// actions 可以是异步的, 但是不能直接修改 state 的数据, 可以提交mutation
const actions = {
  // 所有 actions 中函数的第一个参数, 都是 context => 上下文, 就是 store 对象
  // this.$store.commit('..', xxxx)
  // store.commit('..', xxxx)
  // context.commit('...', xxxx)
  clearTodoAction (context) {
    setTimeout(() => {
      context.commit('clearTodo')
    }, 1000)
  }
}

// 创建仓库
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true
})

export default store
