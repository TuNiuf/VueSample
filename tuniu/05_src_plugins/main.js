/*
* 该文件是整个项目的入口文件
* */
//引入vue
import Vue from 'vue'
//引入app组件，它是所有组件的父组件
import App from './App.vue'
//引入插件
import plugins from './plugins'
//关闭vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(plugins)
//创建vue实例对象
new Vue({
  //下面这行代码
  render: h => h(App),
}).$mount('#app')
