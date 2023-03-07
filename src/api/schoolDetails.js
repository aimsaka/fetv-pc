import request from "../utils/request";
// 查询新闻列表
export const schoolList = (num,size) => {
    return request({
        methods: 'get',
        url: `/fetv/school/list?pageNum=${num}&pageSize=${size}`
    })
}