// 二次封装axios
import axios from 'axios'
const request = axios.create({
  baseURL: 'http://192.168.1.10:8080',
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
  function removeString(obj) {
    //判断参数是否是数组或对象，如果不是，直接返回原值
    if (!obj || typeof obj !== "object") {
      return obj;
    }
    //遍历对象的属性或元素
    for (let key in obj) {
      //判断属性或元素是否属于对象自身
      // if (obj.hasOwnProperty.call(key)) {
      //判断属性或元素是否是字符串类型
      if (typeof obj[key] === "string") {
        //使用正则表达式匹配目标字符串，并赋值给原属性或元素
        // http://192.168.1.13:8080
        //192.168.1.54:8080
        obj[key] = obj[key].replace(/http:\/\/192\.168\.1\.13:8080/g, "");
        obj[key] = obj[key].replace(/http:\/\/192\.168\.110\.143:8080/g, "");
        obj[key] = obj[key].replace(/http:\/\/192\.168\.1\.18:8080/g, "");
        obj[key] = obj[key].replace(/http:\/\/192\.168\.1\.40:8080/g, "");
        obj[key] = obj[key].replace(/http:\/\/192\.168\.1\.10:8080/g, "");
      } else if (typeof obj[key] === "object") {
        //如果属性或元素是数组或对象类型，就递归调用函数
        removeString(obj[key]);
      }
      // }
    }
    //返回处理后的对象

    return obj;
  }
  // 如果某个属性的值是字符串且包含"/profile"，就在"/profile"前面添加ip地址
  function addPrefix(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'string' && obj[key].includes('/profile')) {
        obj[key] = obj[key].replace(/\/profile/g, 'http://192.168.110.143:8080/profile');
        // obj[key] = obj[key].replace(/\/profile/g, 'http://43.139.172.18:8088/profile');
      } else if (typeof obj[key] === 'object') {
        addPrefix(obj[key]);
      }
    }
    return obj;
  }

  removeString(list)
  addPrefix(list)
  return list;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default request