<template>
  <div>
    <topnav></topnav>
    <div class="w">
      <breadCrumb
        class="breadCrumb"
        :message="{ path: this.$route.path, title: title }"
      ></breadCrumb>

      <content>
        <div
          class="content-item"
          v-for="item in list"
          :key="item.informationId"
        >
          <el-link
            :href="'/ClassVideo?tid=' + item.informationId"
            :underline="false"
          >
            <img :src="item.image" alt="" />
            <div class="content-item-bottom">
              <div class="circle">
                <img src="../../imges/logo.png" alt="" />
              </div>
              <div class="text">
                <div class="text-top">{{ item.title }}</div>
                <div class="text-bottom">{{ item.source }}</div>
                <div class="text-bottom">{{ item.browseNum }}次播放</div>
              </div>
            </div>
          </el-link>
        </div>
      </content>
      <footer-information></footer-information>
    </div>
  </div>
</template>

<script>
import { queryAirClassroom } from "../../api/information";
import FooterInformation from "../../Layout/footer-information/footer-information.vue";
import Topnav from "../../Layout/topnav/topnav.vue";
import breadCrumb from "../breadCrumb/breadCrumb.vue";
export default {
  name: "FetvPcAirclassroom",
  components: {
    breadCrumb,
    Topnav,
    FooterInformation,
  },
  data() {
    return {
      title: "院校信息",
      page: {
        pageNum: 1,
        pageSize: 10,
      },
      list: [],
    };
  },
  created() {
    this.gitList();
  },

  mounted() {},

  methods: {
    async gitList() {
      const arr = await queryAirClassroom(
        this.title,
        this.page.pageNum,
        this.page.pageSize
      );
      console.log(arr.rows);
      this.list = arr.rows;
    },
  },
};
</script>

<style lang="scss" scoped>
content {
  display: flex;
  flex-wrap: wrap;

  .content-item {
    width: 25%;
    height: 300px;

    // background-color: pink;
    // border: 1px solid black;
    box-sizing: border-box;

    img {
      width: 280px;
      height: 178px;
    }

    .content-item-bottom {
      // background-color: skyblue;
      width: 100%;
      height: 41%;
      display: flex;

      .circle {
        margin-top: 20px;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        // background-color: red;

        img {
          width: 36px;
          height: 36px;
        }
      }

      .text {
        margin-top: 20px;
        font-size: 14px;
        color: #606266;

        .text-top {
          width: 220px;
          margin-left: 12px;
          font-size: 15px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #000000;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }

        .text-bottom {
          color: #606266;
          margin-left: 12px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>