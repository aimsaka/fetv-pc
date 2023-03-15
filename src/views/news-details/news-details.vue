<template>
  <!-- 新闻详情页 -->
  <div class="news_detail">
    <!-- 顶部公共类 -->
    <topnav></topnav>
    <!-- 回到顶部 -->
    <div class="backTop">
      <img
        src="../../imges/children.png"
        alt=""
        v-show="toTopShow"
        @click="TopBotton"
      />
    </div>
    <!-- 左边新闻 -->
    <div class="main">
      <div class="news_left">
        <!-- 面包屑 -->
        <breadCrumb
          class="breadCrumb"
          :message="{ path: 'news?name=头条新闻', title: '头条新闻' }"
        ></breadCrumb>
        <div class="title">
          {{ detail.title }}
        </div>
        <div class="publisher">
          <span>{{ detail.createTime }}</span>
          <span> 来源：{{ detail.source }}</span>
          <img src="../../imges/weixin-23.png" alt="分享至微信" />
        </div>
        <div class="content">{{ detail.content }}</div>
      </div>
      <!-- 右边表格 -->
      <div class="news_right">
        <!-- 来源 -->
        <!-- <div class="account">
          <div class="logo"><img src="../../imges/logo.png" alt="" /></div>
          <div class="name">福建教育网</div>
          <div class="text">福建教育电视台主办</div>
        </div> -->
        <rightLogo></rightLogo>
        <!-- 推荐 -->
        <div class="recommend">
          <span> 其他推荐 </span>
          <img src="../../imges/1ggdfx.png" alt="" />
        </div>
        <!-- 新闻推介列表 -->
        <div
          class="news_list_item"
          v-for="item in news_list"
          :key="item.informationId"
          @click="refresh(item.informationId)"
        >
          <div class="icon"></div>
          <div class="item_title">{{ item.title }}</div>
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
import rightLogo from "../../components/right-logo/right-logo.vue";
import { queryNewInformationAPI, recommendNewsAPI } from "../../api";
export default {
  name: "FetvPcNewsDetails",
  data() {
    return {
      detail: {},
      news_list: {},
      new_totalList: {},
      toTopShow: false,
      page: 0,
    };
  },
  components: {
    topnav,
    breadCrumb,
    footerInformationVue,
    rightLogo,
  },
  mounted() {
    this.$nextTick(function () {
      //修改事件监听
      window.addEventListener("scroll", this.handleScroll);
    });
  },

  methods: {
    async getAnother(id) {
      const arr = this.new_totalList.filter((item) => {
        return item.informationId != id;
      });
      this.news_list = arr.slice(this.page, this.page + 10);
      this.news_list.length == 0
        ? this.$message.error("没有更多新闻啦")
        : (this.page += 10);
    },
    refresh(informationId) {
      this.$router.push({
        path: "/newsDetails",
        query: { tid: informationId },
      });
      window.location.reload();
    },
    TopBotton() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let timer = setInterval(() => {
        scrollTop -= 100;
        window.scrollTo(0, scrollTop);
        if (scrollTop <= 0) {
          clearInterval(timer);
        }
      }, 16.7);
    },
    handleScroll() {
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scrollTop > 50) {
        this.toTopShow = true;
      } else {
        this.toTopShow = false;
      }
    },
  },
  async created() {
    this.page = 0;
    let informationId = this.$route.query.tid;
    console.log(informationId);
    const res = await queryNewInformationAPI(informationId);
    this.detail = res.data;
    const recommendRes = await recommendNewsAPI();
    this.new_totalList = recommendRes.rows;
    this.news_list = this.new_totalList.slice(0, 10);
    this.getAnother(informationId);
  },
};
</script>


<style lang="scss" scoped >
.backTop {
  position: fixed;
  right: 50px;
  bottom: 50px;
}
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
      // background-color: skyblue;
    }
  }
  .news_right {
    width: 310px;
    margin: 60px 0 0 60px;

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
</style>