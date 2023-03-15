import request from "../utils/request";
export const searchNews = (keyword) => {
    return request({
        method: 'post',
        url: `http://localhost:8080/index/fetv/information/getSearchTitle?title=${keyword}`
    })
}