import request from "../utils/request";
// 学校列表
export const schoolList = () => {
    return request({
        method: 'get',
        url: '/index/fetv/school/schoolList'
    })
}
// 学校详情
export const schoolDetail = (schoolId) => {
    return request({
        method: 'get',
        url: `/index/fetv/school?schoolId=${schoolId}`
    })
}