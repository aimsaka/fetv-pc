import request from "../utils/request";
// 查询新闻列表
export const queryNewInformationList = (columnId) => {
    return request({
        methods: 'get',
        url: `/index/fetv/column?columnId=${columnId}`
    })
}
// 查询新闻信息
export const queryNewInformation = (informationId) => {
    return request({
        method: 'get',
        url: `/index/fetv/information?informationId=${informationId}`
    })
}
// 推荐新闻
export const recommendNews = () => {
    return request({
        method: 'get',
        url: '/index/fetv/information/thirtyInformation'
    })
}
// 最新新闻
export const latestNews = () => {
    return request({
        method: 'get',
        url: '/index/fetv/information/RecentInformation'
    })
}
// 今日新闻
export const todayNews = () => {
    return request({
        method: 'get',
        url: '/index/fetv/information/TodayInformation'
    })
}