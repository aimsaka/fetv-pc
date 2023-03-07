import request from "../utils/request";
// 查询新闻列表
export const queryNewInformationList = (columnId) => {
    return request({
        methods: 'get',
        url: `/index/fetv/column?columnId=${columnId}`
    })
}
// 查询新闻信息
export const queryNewInformation = () => {

}