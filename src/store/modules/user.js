import { userLogin } from '@/api/sys.js'
import md5 from 'md5'
export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    // ~ 登录请求动作
    login(ctx, userInfo) {
      // console.log("🚀 ~ file: user.js ~ line 10 ~ login ~ userInfo", userInfo)
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        userLogin({ username: username.trim(), password: md5(password) }).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
