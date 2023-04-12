import { queryNewInformationList, queryNewInformation, recommendNews, latestNews, todayNews, columnNews } from "./news";
import { schoolList, schoolDetail } from './school'
import { searchNews, homeNews } from './search'
import { videoDetail, skyClass } from './video'
// 查询新闻列表
export const queryNewInformationListAPI = queryNewInformationList
// 查询新闻信息
export const queryNewInformationAPI = queryNewInformation
// 推荐新闻
export const recommendNewsAPI = recommendNews
// 最新新闻
export const latestNewsAPI = latestNews
// 今日新闻
export const todayNewsAPI = todayNews
// 学校列表
export const schoolListAPI = schoolList
// 学校详情
export const schoolDetailAPI = schoolDetail
// 模糊查询新闻
export const searchNewsAPI = searchNews
// 默认十条新闻
export const homeNewsAPI = homeNews
// 获取栏目新闻内容
export const columnNewsAPI = columnNews
// 微视频详情
export const videoDetailAPI = videoDetail
// 云中课堂七条新闻
export const skyClassAPI = skyClass