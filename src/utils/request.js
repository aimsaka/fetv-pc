// 二次封装axios
import axios from 'axios'
const request = axios.create({
    baseURL: 'http://192.168.110.143:5173/'
})
// 请求拦截器
service.interceptors.request.use(config => {
    return config
})
// 响应拦截器
service.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err)
}
)
// 导出
export default request