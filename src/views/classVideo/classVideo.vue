<template>
  <div class="video">
    <topnav> </topnav>
    <div class="video-detail">
      <div class="video-left">
        <bread-crumb
          :message="{ path: 'ClassVideo', title: '要点聚闻' }"
        ></bread-crumb>
        <video :src="list.video" controls></video>
        <div class="info">
          <div class="title">{{ list.title }}</div>
          <div class="source">
            <span>{{ list.createTime }} 来源:{{ list.source }}</span>
            <img src="../../imges/weixin-23.png" alt="" />
          </div>
        </div>
      </div>
      <div class="video-right">
        <right-logo></right-logo>
      </div>
    </div>
    <footer-information></footer-information>
  </div>
</template>

<script>
import { videoDetailAPI } from "../../api";
import RightLogo from "../../components/right-logo/right-logo.vue";
import FooterInformation from "../../Layout/footer-information/footer-information.vue";
import topnav from "../../Layout/topnav/topnav.vue";
import BreadCrumb from "../breadCrumb/breadCrumb.vue";
export default {
  components: { topnav, BreadCrumb, RightLogo, FooterInformation },
  name: "FetvPcClassVideo",

  data() {
    return {
      list: {},
    };
  },

  async mounted() {
    let id = this.$route.query.tid;
    const res = await videoDetailAPI(id);
    this.list = res.data;
    console.log(this.list);
  },

  methods: {},
};
</script>

<style scoped lang="scss">
.video-detail {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  .video-left {
    width: 800px;
    video {
      width: 100%;
    }
    .info {
      .title {
        height: 50px;
        line-height: 50px;
        font-size: 25px;
        font-weight: 600;
      }
      .source {
        display: flex;
        line-height: 22px;
        letter-spacing: 0px;
        font-size: 14px;
        color: #666666;
        justify-content: space-between;
      }
    }
  }
  .video-right {
    margin-left: 30px;
    width: 350px;
  }
}
</style>