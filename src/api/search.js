import request from "../utils/request";
// 模糊查询新闻
export const searchNews = (keyword) => {
    return request({
        method: 'get',
        url: `/index/fetv/information/getSearchTitle?title=${keyword}`
    })
}
// 默认十条新闻
export const homeNews = () => {
    return request({
        method: 'get',
        url: `/index/fetv/information/Search`
    })
}