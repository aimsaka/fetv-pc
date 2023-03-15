<template>
  <div class="school-introduction">
    <!-- 顶部样式 -->
    <topnav></topnav>
    <div class="content">
      <!-- 面包屑 -->
      <bread-crumb
        :message="{ path: 'Introduction', title: '学校' }"
      ></bread-crumb>
      <!-- 学校介绍 -->
      <div class="school-introduction">
        <div class="left">
          <img :src="detail.firstImage" alt="" />
        </div>
        <div class="right">
          <div class="school-detail">
            <div class="school-name">{{ detail.schoolName }}</div>
            <div class="school-lable">
              <ul>
                <li>{{ detail.schoolLabel }}</li>
                <li>测试</li>
              </ul>
            </div>
          </div>
          <div class="school-motto"><span>淡泊名利 无以致远</span></div>
          <div class="school-nature">
            <div>
              学校性质 <span>{{ detail.schoolQuality }}</span>
            </div>
            <div>
              学校官网<span>{{ detail.remark }}</span>
            </div>
            <div>
              学校电话<span>{{ detail.schoolPhone }}</span>
            </div>

            <div>
              院校地址<span>{{ detail.schoolAddress }}</span>
            </div>
          </div>
          <div class="school-introduce">
            简介：
            <span v-html="detail.synopsis"></span>
          </div>
        </div>
      </div>
      <!-- 学校风光 -->
      <div class="school-scenery">
        <div class="scenery">
          校园风光<img src="../../imges/1ggdfx.png" alt="" />
        </div>
        <div class="school-image">
          <img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
        </div>
      </div>
    </div>
    <!-- 底部样式 -->
    <footer-information></footer-information>
  </div>
</template>

<script>
import FooterInformation from "../../Layout/footer-information/footer-information.vue";
import topnav from "../../Layout/topnav/topnav.vue";
import BreadCrumb from "../breadCrumb/breadCrumb.vue";
import { schoolDetailAPI } from "../../api/index";
export default {
  components: { topnav, BreadCrumb, FooterInformation },
  data() {
    return {
      detail: "",
    };
  },
  async created() {
    let schoolId = this.$route.query.schoolId;
    const res = await schoolDetailAPI(schoolId);
    this.detail = this.addFile(res.data);
    console.log(res, "4444");
    // console.log(this.$route.query.schoolId);
  },
  mounted() {},
  methods: {
    addFile(obj) {
      for (let key in obj) {
        if (typeof obj[key] == "object") {
          this.addFile(obj[key]);
        } else if (
          key == "firstImage" ||
          key == "image" ||
          key == "schoolIcon"
        ) {
          obj[key] = "http://192.168.110.143:8080" + obj[key];
        }
      }
      return obj;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 0 auto;
  .school-introduction {
    display: flex;
    .left {
      width: 660px;
      height: 416px;
      img {
        width: 100%;
      }
    }
    .right {
      width: 550px;
      height: 420px;
      margin-left: 40px;
      .school-detail {
        border-bottom: solid 1px #f4f4f4;
        .school-name {
          font-family: NotoSansHans-Bold;
          font-size: 30px;
          font-weight: 600;
          font-stretch: normal;
          line-height: 22px;
          letter-spacing: 0px;
          color: #000000;
        }
        .school-lable {
          padding: 10px 0;
          li {
            display: inline-block;
            width: 85px;
            height: 30px;
            background-color: #ffffff;
            border-radius: 6px;
            border: solid 1px #ba0825;
            opacity: 0.3;
            font-family: NotoSansHans-Regular;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 30px;
            letter-spacing: 0px;
            color: #ba0825;
            margin-right: 5px;
            text-align: center;
          }
        }
      }
      .school-motto {
        font-family: NotoSansHans-Regular;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #808080;
      }
      .school-nature {
        div {
          display: inline-block;
          width: 250px;
          height: 30px;
          font-family: NotoSansHans-Bold;
          font-size: 14px;
          font-weight: 600;
          font-stretch: normal;
          // line-height: 40px;
          letter-spacing: 0px;
          color: #000000;
          span {
            margin-left: 19px;
            font-family: NotoSansHans-Regular;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: #3d6cba;
          }
        }
      }
      .school-introduce {
        margin-top: 23px;
        width: 507px;
        height: 190px;
        font-family: NotoSansHans-Regular;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #808080;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 8;
        text-overflow: ellipsis;
      }
    }
  }
  .school-scenery {
    padding: 23px 0px;
    margin: 33px 0px 0px;
  }
}
</style>