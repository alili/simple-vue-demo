import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

import Listen from './pages/Listen'
import Record from './pages/Record'
// 开启debug模式
Vue.config.debug = false

var router = new VueRouter()
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
  '/Listen': {
    name: 'Listen',
    component: Listen
  },
  '/Record': {
    name: 'Record',
    component: Record
  }
})
router.redirect({
  '*': '/Listen'
})
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, 'app')
