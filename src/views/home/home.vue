<template>
  <div class="homo">
    <!-- 头部 -->
    <header>
      <!-- 头条大字 -->
      <div class="headline">
        <div class="head-text">福建省召开国家 “双高计划” 建设工作推进会</div>
        <div>省委教育工委、省教育厅开展春季学期开学专项督导</div>
        <div>第二届中国基础教育论坛暨中国教育学会第三十四次学术年会召开</div>
      </div>
      <!-- 新闻栏目 -->
      <div class="news-details">
        <!-- 左边栏 -->
        <div class="left">
          <!-- //轮播图 -->
          <div class="block">
            <el-carousel height="507px" width="806px" indicator-position="none">
              <el-carousel-item v-for="(item, index) in list" :key="index">
                <img :src="item.src" alt="" />
                <div class="title">
                  <span
                    ><span>{{ index + 1 }}</span
                    >/3</span
                  >{{ item.title }}
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>

        <!-- 右边栏 -->
        <div class="right">
          <!-- 右边栏头部 -->
          <div slot="header" class="clearfix">
            <div class="head-text">
              要闻聚焦
              <div class="line"></div>
            </div>
            <div class="head-mark">
              <el-divider></el-divider>
              <div>每日最新教育资讯</div>
            </div>
          </div>
          <!-- 右边栏新闻标题栏 -->
          <el-card class="box-card">
            <div
              v-for="item in newsList"
              :key="item.informationId"
              class="text item"
              @click="
                $router.push({
                  path: '/newsDetails',
                  query: { tid: item.informationId },
                })
              "
            >
              <!-- 第一栏显示 -->
              <el-link :href="item.src" target="_blank" :underline="false">
                <div class="headline-news"></div>
              </el-link>
              <el-link
                href="/ClassVideo?tid="
                target="_blank"
                :underline="false"
              >
                <div class="headline-news" v-if="item.index">
                  <img src="../../imges/新.png" />{{ item.title }}
                </div>
              </el-link>
              <!-- 第二栏开始显示 -->
              <el-link
                :href="'/NewsDetails?tid=' + item.informationId"
                target="_blank"
                :underline="false"
              >
                &nbsp;<span class="point"></span>&nbsp;
                <img
                  src="../../imges/shipin.png"
                  alt=""
                  v-if="item.video"
                />&nbsp;{{ item.title }}
              </el-link>
              <div class="more">
                <div class="more-button" @click="toNews">更多内容</div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </header>
    <!-- 内容 -->

    <content>
      <advertisementVue :advertisement="url"></advertisementVue>
      <hotTopics class="w"></hotTopics>
      <liveVideo class="w"></liveVideo>
      <elCol></elCol>
      <advertisementVue></advertisementVue>
      <column class="w"></column>
      <schoolInformation class="x"></schoolInformation>
      <miniVideo class="w"></miniVideo>
    </content>
  </div>
</template>

<script>
import hotTopics from "../../components/hot-topics/hot-topics.vue";
import liveVideo from "../../components/live-video/live-video.vue";
import column from "../../components/column/column.vue";
import schoolInformation from "../../components/school-information/school-information.vue";
import miniVideo from "../../components/mini-video/mini-video.vue";
import advertisementVue from "../../components/advertisement/advertisement.vue";
import elCol from "../../components/el-col/el-col.vue";

import { latestNewsAPI } from "../../api/index";
// import { RecentInformation } from "../../api/home";
export default {
  components: {
    hotTopics,
    liveVideo,
    elCol,
    advertisementVue,
    column,
    schoolInformation,
    miniVideo,
  },
  name: "FetvPcHome",
  data() {
    return {
      url: require("../../imges/82282d63-8d79-4046-9f02-46e60060f802.png"),
      list: [
        {
          src: require("../../imges/161b2574-dd97-490c-8a71-fcb8e7f11ac4.jpg"),
          title: "大雾弥漫宛如仙境 福建福州化身“天空之城”",
        },
        {
          src: require("../../imges/b986c848-6565-4abf-8402-a7acb7838268.jpg"),
          title: "福州：春暖花开 出游正当时",
        },
        {
          src: require("../../imges/d9aea775-eaa2-4ded-9261-be3ae08374b6.jpg"),
          title: "福建宁化：千亩李花怒放 绘就春日“雪景图”",
        },
      ],

      newsList: [],
    };
  },

  methods: {
    toNews() {
      console.log(1);
    },
    async getRecentInformation() {
      // const res = await queryNewInformationAPI("1", "10");
      // console.log(res, "44444");
      // this.newsList = res.rows;
      // this.list = res.rows[0].informationApiList;
    },
  },

  async created() {
    const res = await latestNewsAPI();
    res.rows[0].index = 1;
    this.newsList = res.rows;
    console.log(res, "1111111");
  },
};
</script>

<style lang="scss" scoped>
.headline {
  // align-items: center;
  text-align: center;
  font-size: 18px;
  line-height: 35px;
  font-weight: 550;

  .head-text {
    color: #ba0825;
    font-size: 34px;
    line-height: 68px;
    font-weight: 700;
  }
}

.news-details {
  width: 1200px;
  // background-color: rgb(238, 25, 25);
  margin: 0 auto;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;

  .left {
    .block {
      width: 806px;
      position: relative;

      img {
        width: 100%;
      }

      .title {
        height: 70px;
        width: 100%;
        position: absolute;
        bottom: 0px;
        right: 0px;
        background-color: rgb(0, 0, 0, 0.45);
        text-align: center;
        color: rgba(255, 255, 255, 0.647);
        font-size: 24px;
        line-height: 70px;

        span {
          position: absolute;
          top: 25px;
          left: 75px;
          line-height: 25px;
          font-size: 30px;
          font-weight: 800;

          span {
            position: absolute;
            top: -2px;
            left: -27px;
            font-size: 34px;
          }
        }
      }
    }
  }

  .right {
    width: 380px;
    height: 507px;

    .clearfix {
      width: 380px;
      height: 40px;
      display: flex;
      // justify-content: space-between;
      line-height: 40px;
    }

    .head-text {
      line-height: 25px;
      // width: 64px;
      font-size: 20px;
      font-weight: 700;

      .line {
        margin-top: 11px;
        background-color: #ba0825;
        height: 4px;
        width: 100%;
      }
    }

    .head-mark {
      width: 232px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      margin-left: 45px;
      font-size: 16px;
      font-family: Noto Sans S Chinese;
      font-weight: 300;
      font-style: italic;
      color: #777777;
      line-height: 40px;

      el-divider {
        width: 90px;
      }
    }

    // background-color: pink;
    .text {
      font-size: 14px;
      color: #000;
    }

    .item {
      margin-top: 14px;

      // display: flex;
      // justify-items: center;
      img {
        width: 17px;
        // align-items: baseline
        vertical-align: text-bottom;
      }
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both;
    }

    .box-card {
      height: 468px;
      border-top: none;
      box-shadow: 0px 6px 6px 0px rgba(115, 124, 139, 0.15);
      position: relative;

      .headline-news {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 6px;

        img {
          width: 25px;
          margin-right: 6px;
        }
      }

      .more {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 60px;
        background-color: #fff;

        .more-button {
          left: 140px;
          top: 15px;
        }
      }
    }
  }
}

::v-deep .el-card__header {
  border-bottom: none;
  border-top: none;
  padding: 0px;
  height: 45px;
}

::v-deep .el-divider {
  width: 90px;
}

::v-deep .el-divider--horizontal {
  margin-top: 21px;
}

::v-deep .el-link {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  /* 限制在一个块元素显示的文本的行数 */
  -webkit-box-orient: vertical;
  /* 垂直排列 */
  word-break: break-all;
}

::v-deep .el-link.el-link--default:hover {
  color: rgb(168, 38, 38);
}

::v-deep .el-card__body {
  padding-top: 7px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.news-details .right .clearfix[data-v-39f87be5]:before {
  display: none;
}

.news_container {
  width: 1200px;
  height: 1050;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  flex-wrap: wrap;

  .chopsticks {
    margin: 30px 0;

    img {
      width: 100%;
    }
  }
}
</style>