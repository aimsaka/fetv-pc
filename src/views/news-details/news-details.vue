<template>
  <!-- 新闻详情页 -->
  <div class="news_detail">
    <!-- 顶部公共类 -->
    <topnav></topnav>

    <!-- 左边新闻 -->
    <div class="main">
      <div class="news_left">
        <!-- 面包屑 -->
        <breadCrumb
          class="breadCrumb"
          :message="{ path: 'news?name=头条新闻', title: '头条新闻' }"
        ></breadCrumb>
        <div class="title">
          {{ this.detail.title }}
        </div>
        <div class="publisher">
          <span>{{ detail.publishTime }}</span>
          <span> 来源：{{ detail.resource }}</span>
          <img src="../../imges/weixin-23.png" alt="分享至微信" />
        </div>
        <div class="content">内容</div>
      </div>
      <!-- 右边表格 -->
      <div class="news_right">
        <!-- 来源 -->
        <div class="account">
          <div class="logo"><img src="../../imges/logo.png" alt="" /></div>
          <div class="name">福建教育网</div>
          <div class="text">福建教育电视台主办</div>
        </div>
        <!-- 推荐 -->
        <div class="recommend">
          <span> 其他推荐 </span>
          <img src="../../imges/1ggdfx.png" alt="" />
        </div>
        <!-- 新闻推介列表 -->
        <div class="news_list_item" v-for="index of 10" :key="index">
          <div class="icon"></div>
          <div class="item_title">{{ news_list.title }}</div>
        </div>
        <div class="more" @click="getAnother">换一批</div>
      </div>
    </div>
    <!-- 底部样式 -->
    <footerInformationVue></footerInformationVue>
  </div>
</template>

<script>
import topnav from "../../Layout/topnav/topnav.vue";
import breadCrumb from "../breadCrumb/breadCrumb.vue";
import footerInformationVue from "../../Layout/footer-information/footer-information.vue";
export default {
  name: "FetvPcNewsDetails",

  data() {
    return {
      detail: {
        title:
          '" 福建省 "中小学劳动教育学科义务教育课程方案和课程标准培训班在榕举办',
        publishTime: "2023-02-27 15:04:40",
        resource: "人民网",
      },
      news_list: {
        title: "虎年说“虎”｜一起来看看福建教育这些“虎”（一）",
      },
    };
  },
  components: {
    topnav,
    breadCrumb,
    footerInformationVue,
  },
<<<<<<< HEAD
  mounted() {},
=======

  mounted() { },
>>>>>>> b4c28464c03c847b5b9fe40b848813202841018f

  methods: {
    getAnother() {
      alert(111);
    },
  },
};
</script>

<<<<<<< HEAD
<style scoped lang="scss">
.main {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  .news_left {
    width: 830px;
    margin-top: 15px;
    .title {
      height: 80px;
      font-size: 30px;
      line-height: 40px;
      font-weight: 700;
    }
    .publisher {
      position: relative;
      border-bottom: #f4f4f4 solid 1px;

      height: 88px;
      line-height: 88px;
      font-size: 14px;
      color: #666666;
      img {
        position: absolute;
        right: 15px;
        bottom: 25px;
      }
    }
    .content {
      height: 800px;
      background-color: skyblue;
    }
  }
  .news_right {
    width: 310px;
    margin: 60px 0 0 60px;
    .account {
      height: 230px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px #f4f4f4 solid;
      .logo {
        width: 85px;
        height: 85px;
        border-radius: 50%;
        border: #f4f4f4 solid 1px;
        text-align: center;
        img {
          margin-top: 15px;
          width: 80%;
        }
      }
      .name {
        padding: 15px 0;
        font-weight: 700;
      }
    }
    .recommend {
      margin-top: 60px;
      span {
        padding: 0 10px;
        font-size: 20px;
      }
    }
    .news_list_item {
      height: 50px;
      line-height: 50px;
      display: flex;
      flex: 1;
      align-items: center;
      border-bottom: #f4f4f4 solid 1px;
      .icon {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #b80e2a;
        margin-right: 10px;
      }

      .item_title {
        font-size: 16px;
        font-family: Noto Sans S Chinese;
        font-weight: 400;
        color: #000000;
        // 文字一行 多余省略
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .more {
      text-align: center;
      font-family: NotoSansHans-Regular;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 25px;
      letter-spacing: 0px;
      color: #747e8c;
    }
  }
}
=======
<style scoped>

>>>>>>> b4c28464c03c847b5b9fe40b848813202841018f
</style>