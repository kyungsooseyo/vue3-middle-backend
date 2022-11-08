import request from '@/utils/request'
export const userLogin = (data) => {
  return request({
    url: '/getLogin',
    method: 'get',
    data
  })
}
