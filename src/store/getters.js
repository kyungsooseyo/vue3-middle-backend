const getters = {
  token: state => state.user.token,
  hashUserInfo: state => {
    //~ 返回值为true表示有用户信息
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: (state) => state.user.userInfo,
}
export default getters
