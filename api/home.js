// // 引入请求
import request from '@/utils/request.js'
// 获取首页数据
export const getData = data => {
  return request({
    url: '/page/detail',
    method: 'GET',
    data
  })
}