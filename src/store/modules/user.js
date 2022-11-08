import { userLogin } from '@/api/sys.js'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant/index'
import md5 from 'md5'
import router  from '@/router/index'
// ~ userRouter好像只能写在setUp里面
// const userRouter1 = useRouter()
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    // ~ 登录请求动作
    login(ctx, userInfo) {
      // console.log("🚀 ~ file: user.js ~ line 10 ~ login ~ userInfo", userInfo)
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        userLogin({ username: username.trim(), password: md5(password) }).then(res => {
          this.commit('user/setToken', res.token)
          router.push('/')
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
