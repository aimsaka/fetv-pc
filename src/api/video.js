import request from "../utils/request";
// 微视频详情
export const videoDetail = (id) => {
    return request({
        url: `/index/fetv/information/getVideo?informationId=${id}`
    })
}
// 云中课堂七条新闻
export const skyClass = (columnId) => {
    return request({
        url: `/index/fetv/column/getSevenVideoByColumn?columnId=${columnId}`
    })
}