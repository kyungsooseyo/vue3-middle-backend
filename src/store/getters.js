import variables from '@/styles/variables.module.scss'
const getters = {
  token: state => state.user.token,
  hashUserInfo: state => {
    //~ 返回值为true表示有用户信息
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: (state) => state.user.userInfo,
  cssVar: (state) => variables
}
export default getters
