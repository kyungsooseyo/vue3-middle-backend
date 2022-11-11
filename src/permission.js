// 路由前置守卫
import router from '@/router/index'
import store from '@/store/index'
// = 白名单
const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {

  // ~ 用户已经登录 不允许进入登录页面
  if (!!store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      //. 如果不存在用户信息 则去获取
      if (!store.getters.hashUerInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    //~ 用户未登录 不允许进入其他页面
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
