import request from "../utils/request";
// 查询新闻列表
export const queryNewInformation = () => {
    return request({
        methods: 'get',
        url: '/fetv/information/list'
    })
}