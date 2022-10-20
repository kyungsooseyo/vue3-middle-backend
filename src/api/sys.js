import request from '@/utils/request'
export const userLogin = (data) => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
