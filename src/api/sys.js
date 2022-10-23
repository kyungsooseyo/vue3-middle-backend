import request from '@/utils/request'
export const userLogin = (data) => {
  return request({
    url: '/login',
    method: 'get',
    data
  })
}
