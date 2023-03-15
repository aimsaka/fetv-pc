<template>
  <div class="main">
    <div class="backTop">
      <img
        v-show="isShow"
        @click="backTop"
        src="../../imges/weixin-23.png"
        alt=""
      />
    </div>
    <!-- 左边内容 -->
    <div class="news_left">
      <breadCrumb
        class="breadCrumb"
        :message="{ path: this.$route.path, title: this.$route.query.name }"
      ></breadCrumb>
      <div
        class="content"
        v-for="item in description"
        :key="item.tid"
        @click="
          $router.push({
            path: '/newsDetails',
            query: { tid: item.informationId },
          })
        "
      >
        <div class="title">{{ description[0].title }}</div>
        <div class="time">{{ description[0].createTime }}</div>
      </div>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
    <!-- 右边新闻内容 -->
    <div class="news_right">
      <div class="news_table">
        <div class="table">
          即时新闻 <img src="../../imges/1ggdfx.png" alt="" />
        </div>
        <div
          class="table_title"
          v-for="item in todays_list"
          :key="item.informationId"
          @click="
            $router.push({
              path: '/newsDetails',
              query: { tid: item.informationId },
            })
          "
        >
          <div class="dash"></div>
          <div class="text">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import breadCrumb from "../breadCrumb/breadCrumb.vue";
import { queryNewInformationListAPI, todayNewsAPI } from "../../api";
export default {
  name: "FetvPcHeadLinenews",
  data() {
    return {
      description: [],
      todays_list: {},
      isShow: false,
    };
  },
  components: {
    breadCrumb,
  },
  computed: {
    type() {
      return this.$route.query.name;
    },
  },
  mounted() {
    this.load(this.type);
    this.$nextTick(() => {
      window.addEventListener("scroll", this.mouseScroll);
    });
  },
  async created() {
    const todayRes = await todayNewsAPI();
    this.todays_list = todayRes.rows;
    console.log(todayRes, "222222");
  },
  watch: {
    type(newVal, oldVal) {
      console.log(newVal, oldVal);
      if (newVal != oldVal) {
        this.load(newVal);
      }
    },
  },
  methods: {
    async load(type) {
      let list = [
        "",
        "头条新闻",
        "要闻聚焦",
        "校园",
        "FETV",
        "招考",
        "空中课堂",
        "家长",
        "师说",
        "职场",
        "微视频",
        "直播访谈",
        "福建教育报道",
      ];
      let index = list.indexOf(type);
      const res = await queryNewInformationListAPI(index);
      this.description = res.rows[0].informationApiList;
      console.log(this.description);
    },
    mouseScroll() {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 50) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    backTop() {
      let scrollTop = document.documentElement.scrollTop;
      const timer = setInterval(() => {
        scrollTop -= 100;
        window.scrollTo(0, scrollTop);
        if (scrollTop <= 0) {
          clearInterval(timer);
        }
      }, 16.7);
    },
  },
};
</script>

<style scoped lang="scss">
.backTop {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
.main {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  .news_left {
    width: 870px;
    // height: 1500px;
    display: flex;
    flex-direction: column;
    // flex-direction: row;
    // .el-breadcrumb {
    //   width: fit-content;
    //   height: 30px;
    //   line-height: 30px;
    //   padding: 0 15px;
    //   background-color: #f8f8f8;
    //   margin-bottom: 30px;
    // }
    .content {
      width: 830px;
      // padding-top: 100px;

      .title {
        width: 100%;
        font-size: 20px;
        font-weight: 700;
        height: 70px;
        line-height: 70px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .time {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #808080;
        border-bottom: 1px solid #f4f0f0;
      }
    }
    .block {
      margin: 50px auto;
    }
  }
  .news_left:hover {
    cursor: pointer;
  }
  .news_right {
    width: 310px;
    margin-top: 70px;
    .table {
      height: 40px;
      font-size: 22px;
      line-height: 40px;
      img {
        margin-left: 15px;
      }
    }
    .table_title {
      display: flex;
      align-items: center;
      flex: 1;
      .dash {
        display: inline;
        width: 10px;
        height: 10px;
        background-color: red;
        border-radius: 50%;
      }
      .text {
        margin-left: 8px;
      }
    }
  }
}
</style>