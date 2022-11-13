import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store/index'
import { isTimeout } from '@/utils/auth';
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use(config => {
  //  =在这里统一注册token
  if (store.getters.token) {
    if (isTimeout()) {
      store.dispatch('user/logout')
      ElMessage({
        message: 'token已过期',
        grouping: true,
        type: 'error',
      })
      return Promise.reject(new Error('token已过期'))
    }
    config.headers['Authorization'] = 'Bearer ' + store.getters.token
  }
  return config
}, error => {
  return Promise.reject(error)
})
service.interceptors.response.use(response => {
  if (response.status === 200) {
    ElMessage({
      message: '请求成功',
      grouping: true,
      type: 'success',
    })
    return response.data
  } else {
    ElMessage.error({
      message: '请求失败',
      grouping: true,
      type: 'error',
    }) // ~ 未知错误
    return Promise.reject(response)
  }
}, error => {
  ElMessage.error({
    message: error.message,
    grouping: true,
    type: 'error',
  })
  return Promise.reject(error)
})
export default service
