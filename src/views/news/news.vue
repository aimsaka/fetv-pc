<template>
  <div class="main">
    <div class="news_left">
      <breadCrumb
        class="breadCrumb"
        :message="{ path: this.$route.path, title: this.$route.query.name }"
      ></breadCrumb>
      <div class="content" v-for="index of 10" :key="index">
        <div class="title">{{ description[0].title }}</div>
        <div class="time">{{ description[0].publishTime }}</div>
      </div>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
    <div class="news_right">
      <div class="news_table">
        <div class="table">
          即时新闻 <img src="../../imges/1ggdfx.png" alt="" />
        </div>
        <div class="table_title">
          <div class="dash"></div>
          <div class="text">诗意中国——春色满园关不住了</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import breadCrumb from "../breadCrumb/breadCrumb.vue";
export default {
  name: "FetvPcHeadLinenews",
  data() {
    return {
      description: [
        {
          title:
            "习近平：深刻把握雷锋精神的时代内涵 让雷锋精神在新时代绽放更加璀璨的光芒",
          publishTime: "2023-02-24 09:38:59",
        },
      ],
    };
  },
  components: {
    breadCrumb,
  },
  mounted() {},
  created() {
    console.log(this.$route.query.name);
  },

  methods: {},
};
</script>

<style scoped lang="scss">
.main {
  width: 1200px;
  margin: 40px 0 0 170px;
  display: flex;
  justify-content: space-around;

  .news_left {
    width: 870px;
    // height: 1500px;
    display: flex;
    flex-direction: column;
    // flex-direction: row;
    .el-breadcrumb {
      width: 100px;
      height: 30px;
      line-height: 30px;
      padding: 0 15px;
      background-color: #f8f8f8;
      margin-bottom: 30px;
    }
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
  .news_right {
    width: 310px;
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