import Vue from 'vue'
import App from './App.vue'
import store from './store'
import hello from './hello/hello.js'
// import TodoHeader from './components/todo-header.vue'
import './styles/base.css'
import './styles/index.css'

Vue.config.productionTip = false

// 如何注册自己的全局组件
// import Hello from './components/Hello.vue'
// Vue.component('hello', 组件对象)
// Vue.component('hello', Hello)

// 其实 Vue.use 就是在进行一些全局组件的注册, 以及一些其他的全局初始化
// 会在 插件内部的 install 方法被调用时, 处理
Vue.use(hello)

// Vue.component('todo-header', TodoHeader)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
