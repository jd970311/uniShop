// 基于uni.request() 二次封装

// 基准地址
let baseUrl = 'http://cba.itlike.com/public/index.php?s=/api/'
const header = { 'content-type': 'application/json' }
const token = uni.getStorageSync('token')
if (token) {
  header = {
    'content-type': 'application/json',
    'Authorization': 'Bearer ' + token
  }
}
const request = ({
  url,
  method,
  data
}) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + url,
      method: method || 'GET',
      data: data || {},
      header: header,
      success: res => {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
export default request