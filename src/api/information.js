import request from "../utils/request";
// 查询新闻列表
export const queryNewInformation = (num,size) => {
    return request({
        methods: 'get',
        url: `/fetv/information/list?pageNum=${num}&pageSize=${size}`
    })
}


// 查询新闻列表
export const queryAirClassroom = (name,num,size) => {
    return request({
        methods: 'get',
        url: `/fetv/information/list?columnTitle=${name}&pageNum=${num}&pageSize=${size}`
    })
}