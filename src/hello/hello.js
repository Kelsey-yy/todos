import HelloComponent from './Hello.vue'

// hello插件
const hello = {
  // 将来这个 hello 插件, 被Vue.use时, 会自动调用内部的 install 方法, 进行全局组件的一些注册
  install: function (Vue) {
    Vue.component('hello', HelloComponent)
  }
}

export default hello
