<template>
  <div>
    <div class="main">
      <div class="img-logo">
        <img src="../../imges/search-icon.png" alt="" />
      </div>
      <div class="images">
        <img
          src="../../imges/82282d63-8d79-4046-9f02-46e60060f802.png"
          alt=""
        />
      </div>
      <div class="search">
        <input
          type="text"
          placeholder="请输入内容"
          class="text"
          v-model="keyword"
        />
        <el-button
          type="danger"
          icon="el-icon-search"
          class="btn"
          @click="searchNews"
          >搜索</el-button
        >
        <!-- :disabled="this.keyword == '' ? true : false" -->
      </div>
      <div class="news-box">
        <div
          class="item-box"
          v-for="item in list"
          :key="item.informationId"
          @click="
            $router.push({
              path: 'newsDetails',
              query: { tid: item.informationId },
            })
          "
        >
          <div class="title">{{ item.title }}</div>
          <div class="source">{{ item.source }}</div>
        </div>
      </div>
    </div>
    <footer-information></footer-information>
  </div>
</template>

<script>
import { searchNewsAPI, homeNewsAPI } from "../../api";
import footerInformation from "../../Layout/footer-information/footer-information.vue";
export default {
  components: { footerInformation },
  data() {
    return {
      list: [],
      keyword: "",
    };
  },
  created() {
    this.homeNews();
  },
  methods: {
    async searchNews() {
      if (this.keyword == "")
        return this.$alert("内容不能为空噢", "搜索提醒", {
          confirmButtontext: "确定",
          type: "error",
        });
      const res = await searchNewsAPI(this.keyword);
      this.list = res.data;
      if (this.list == "") {
        return this.$alert("暂无相关新闻", "搜索提醒", {
          confirmButtonText: "确定",
          callback: () => {
            this.homeNews();
            this.keyword = "";
          },
        });
      }
    },
    async homeNews() {
      const res = await homeNewsAPI();
      this.list = res.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 830px;
  margin: 90px auto 30px auto;
  .img-logo {
    width: 400px;
    height: 200px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .images {
    width: 830px;
    height: 120px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .search {
    display: flex;
    align-items: center;
    .text {
      width: 700px;
      height: 57px;
      outline: none;
      padding-left: 20px;
      background-color: #ffffff;

      font-family: NotoSansHans-Regular;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 57px;
      letter-spacing: 0px;
      color: #080808;
      border: solid 1px #bfbfbf;
      //   border-right: none;
    }
    .btn {
      width: 162px;
      height: 57px;
      background-color: #ba0825;
      font-family: NotoSansHans-Bold;
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 22px;
      letter-spacing: 0px;
      color: #ffffff;
      cursor: pointer;
    }
  }
  .news-box {
    width: 830px;
    height: 1088px;
    .item-box {
      cursor: pointer;
      border-bottom: 1px solid #f4f4f4;
      .title {
        width: 100%;
        font-family: NotoSansHans-Bold;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-weight: 700;
        line-height: 68px;
        letter-spacing: 0px;
        color: #000000;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .source {
        width: 516px;
        height: 40px;
        font-family: NotoSansHans-Regular;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #808080;
      }
    }
  }
}
</style>