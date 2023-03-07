import request from "../utils/request";
// 微视频查询图片
export function RecentInformation() {
    return request({
        url: '/index/fetv/information/RecentInformation',
        methods: 'get',
    })
} 