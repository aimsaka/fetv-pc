<template>
  <div class="LiveVideo">
    <!-- 直播盒子头部 -->
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <div class="img">
          <el-image style="width: 130px; height: 30px" :src="src"></el-image>
        </div>
      </el-col>

      <el-col :span="2">
        <el-button type="text" style="color: #ffdfaf" @click="$router.push({ path: 'News', query: { name: '直播访谈' } })">
          查看更多
          <div class="el-icon-arrow-right"
            type="success|success_no_circle|info|warn|waiting|cancel|download|search|clear" size="23" color="#ffdfaf">
          </div>
        </el-button>
      </el-col>
    </el-row>
    <!-- 直播盒子线段 -->
    <div class="process">
      <div class="Line">
        <div class="item b1"></div>
        <div class="item b2"></div>
        <div class="item b3"></div>
        <div class="item b4"></div>
      </div>
    </div>
    <!-- 图片 -->
    <div class="img">
      <div class="item" v-for="(item, index) in list" :key="index">
        <el-link :underline="false" :href="item.id">
          <img :src="item.src" />
        </el-link>
        <el-link :underline="false" :href="item.id">
          <div class="title">{{ item.title }}</div>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FetvPcLiveVideo",

  data() {
    return {
      src: require("../../imges/btzzft.png"),
      list: [
        {
          src: require("../../imges/9cdb8cc9-c92f-4951-bc4f-adfeb04fd284.png"),
          title: "大雾弥漫宛如仙境 福建福州化身“天空之城”",
          id: "ClassVideo?tid=1",
        },
        {
          src: require("../../imges/28568f2e-de6e-4caa-833e-2693da8e8b0c.png"),
          title: "福州：春暖花开 出游正当时",
          id: "ClassVideo?tid=3",
        },
        {
          src: require("../../imges/79622e59-7979-4c9e-8576-6bf7b26b8853.jpg"),
          title: "福建宁化：千亩李花怒放 绘就春日“雪景图”",
          id: "ClassVideo?tid=5",
        },
        {
          src: require("../../imges/3f93e3e4-fa98-4088-a114-e9ea36ac8b06.png"),
          title: "福建宁化：千亩李花怒放 绘就春日“雪景图”",
          id: "ClassVideo?tid=4",
        },
      ],
    };
  },

  mounted() { },

  methods: {},
};
</script>

<style lang="scss" scoped>
.LiveVideo {
  position: relative;
  height: 356px;
  background: linear-gradient(to bottom, #080607, #444243);
  margin-top: 10px;
  padding: 30px 50px 0 50px;

  .process {
    height: 63px;

    .Line {
      position: absolute;
      top: 110px;
      left: 150px;
      width: 875px;
      height: 1px;
      background: #434142;

      .item {
        position: absolute;
        top: -7px;
        width: 15px;
        height: 15px;
        background: #434142;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      .b1 {
        left: -5px;
      }

      .b2 {
        left: 291px;
      }

      .b3 {
        left: 584px;
      }

      .b4 {
        left: 865px;
      }
    }
  }

  .img {
    display: flex;
    justify-content: space-between;

    .item {
      width: 252px;
      height: 142px;

      img {
        width: 252px;
        height: 142px;
      }

      .title {
        margin-top: 8px;
        color: rgb(255, 255, 255);
      }

      .title:hover {
        color: rgb(220, 61, 61);
      }
    }
  }
}
</style>