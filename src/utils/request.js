// 二次封装axios
import axios from 'axios'
const request = axios.create({
  baseURL: 'http://192.168.1.13:8080',
  timeout: 5000 // 超时时间
})
// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  let list = response.data
  function addPrefix(obj) {
    // 遍历对象的所有属性
    for (let key in obj) {
      // 如果属性值是一个对象，递归调用函数
      if (typeof obj[key] === "object") {
        addPrefix(obj[key]);
      }
      // 如果属性名是image，给属性值前面加上字符串
      else if (key === "image" || key === "imageLocation") {
        obj[key] = "http://192.168.1.13:8080" + obj[key];
      }
    }
  }
  addPrefix(list)
  return list;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default request