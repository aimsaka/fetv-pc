import request from "../utils/request";
// 微视频查询图片
export function miniVideoImage(id) {
    return request({
        url: `/index/fetv/column/getVideoBySix?columnId=`+id,
        methods: 'get',
    })
} 
//全部图片查询
export function image(query) {
    return request({
        url:`/index/fetv/image/list`,
        methods: 'get',
        params:query
    })
} 