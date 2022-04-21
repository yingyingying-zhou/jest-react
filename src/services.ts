import axios from "axios"

// 传入回调函数
export const fetchDataOne = (fn) => {
  axios.get('https://bird.ioliu.cn/v2/?url=https://music.163.com/store/api/searchsuggest/get?type=1&search=%E5%8F%A4%E6%9D%A5').then(res => {
    fn(res.data)
  })
}

// 返回promise
export const fetchDataTwo = () => {
  return axios.get('https://bird.ioliu.cn/v2/?url=https://music.163.com/store/api/searchsuggest/get?type=1&search=%E5%8F%A4%E6%9D%A5')
}

// 返回403
export const fetchDataThree = () => {
  return axios.get('https://m10.music.126.net/20200114152235/1231231')
}


export const test = {
  async fetchPostsList(callback) {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      return callback(res.data);
    })
  }
}