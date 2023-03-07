<template>
  <div>
    <!-- 院校模块 -->
    <div class="w content">
      <!-- 左边栏 -->
      <div class="layout left">
        <layout class="head">
          <template #title> 院校信息 </template>
          <template #describe> 展现校园风采 传承大学之道 </template>
        </layout>
        <!-- 左边栏内容 -->
        <el-carousel height="480px" indicator-position="none">
          <el-carousel-item>
            <!-- 循环渲染的盒子 -->
            <div
              class="school"
              v-for="item in list"
              :key="item.schoolId"
              @click="go(item.schoolId)"
            >
              <!-- 链接 -->
              <el-link :underline="false" target="_blank">
                <div class="item">
                  <span>
                    <!-- 图片部分 -->
                    <el-image
                      style="width: 248px; height: 141px"
                      :src="item.firstImage"
                    ></el-image>
                  </span>
                  <span style="width: 317px">
                    <!-- 文字部分 -->
                    <div class="name">
                      <div>{{ item.schoolName }}</div>
                      <div class="button">
                        <i class="el-icon-arrow-right"></i>
                      </div>
                    </div>
                    <el-divider class="line"></el-divider>
                    <div class="text">{{ item.schoolAddress }}</div>
                  </span>
                </div>
              </el-link>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 右边栏 -->
      <div class="layout right">
        <layout class="head">
          <template #title> 云中课堂 </template>
          <template #describe> 云教学 让知识传播更广泛 </template>
        </layout>
        <div class="classroom">
          <div class="img-item">
            <div v-for="item in teacher" :key="item.src">
              <el-link
                :underline="false"
                href="https://element.eleme.io"
                target="_blank"
              >
                <el-image
                  style="width: 270px; height: 150px; margin-left: 15px"
                  :src="item.src"
                ></el-image>
              </el-link>
            </div>
          </div>
          <div class="link-box">
            <div class="link" v-for="(item, index) in teacher" :key="index">
              <el-link
                :underline="false"
                href="https://element.eleme.io"
                target="_blank"
              >
                {{ item.title }}
                <div class="circle"></div>
              </el-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import layout from "../layout/layout.vue";
import { schoolListAPI } from "../../api";
export default {
  components: {
    layout,
  },
  name: "FetvPcSchoolInformation",

  data() {
    return {
      list: [],
      teacher: [
        {
          src: require("../../imges/3c81b3cd-564d-4cde-9d10-a51effa3e904.png"),
          title: "大雾弥漫宛如仙境 福建福州化身“天空之城”",
        },
        {
          src: require("../../imges/4f194a67-07d1-4006-80d2-885f41b06fac.png"),
          title: "大雾弥漫宛如仙境 福建福州化身“天空之城”",
        },
        {
          src: require("../../imges/4b3a023b-a39e-4d65-aea2-f8108a360e94.png"),
          title:
            "大雾弥漫宛如仙境 福建福州化身“天空之城 大雾弥漫宛如仙境 福建福州化身“天空之城大雾弥漫宛如仙境 福建福州化身“天空之城”",
        },
        {
          src: require("../../imges/e6b38618-99f7-4102-9d6a-437ae241bc75.png"),
          title: "大雾弥漫宛如仙境 福建福州化身“天空之城”",
        },
      ],
    };
  },
  async created() {
    const res = await schoolListAPI();

    this.list = this.addFile(res.rows);

    console.log(this.list, "333");
  },
  mounted() {},

  methods: {
    go(schoolId) {
      this.$router.push({
        path: "/Introduction",
        query: { schoolId: schoolId },
      });
    },
    addFile(obj) {
      for (let key in obj) {
        if (typeof obj[key] == "object") {
          this.addFile(obj[key]);
        } else if (key == "firstImage") {
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
  display: flex;
  justify-content: space-between;

  .layout {
    width: 584px;
    height: 591px;
  }

  .head {
    margin-bottom: 45px;
  }

  .left {
    // background-color: pink;
    .school {
      height: 155px;

      .item {
        height: 141px;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .line {
          width: 253px;
          height: 1px;
          background: #eeeeee;
          margin: 10px 0;
        }

        .name {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .button {
            position: relative;
            width: 5px;
            height: 5px;
            margin-right: 20px;
            // margin-right: 10px;
            background-color: #cdcdcd;
            /* Green */
            border: none;
            color: white;
            padding: 9px 9px;
            border-radius: 50%;

            /* make the button round */
            i {
              position: absolute;
              top: 1px;
              left: 2px;
              z-index: 6;
            }
          }
        }

        .text {
          width: 266px;
          font-size: 14px;
          font-family: NotoSansHans-Regular;
          font-weight: 300;
          color: #777777;
          line-height: 40px;
          overflow: hidden;
          /* 隐藏溢出的内容 */
          white-space: nowrap;
          /* 阻止文本换行 */
          text-overflow: ellipsis;
          /* 在末尾显示省略号 */
        }
      }
    }
  }

  .right {
    // background-color: skyblue;

    .classroom {
      // .img {
      width: 100%;
      height: 451px;
      padding-top: 10px;
      background-color: rgb(255, 255, 255);

      .img-item {
        width: 584px;
        height: 315px;
        display: flex;
        flex-wrap: wrap;
      }

      .link-box {
        height: 127px;
        overflow: hidden;

        .link {
          width: 400px;
          padding-left: 15px;
          line-height: 40px;
          position: relative;
          font-size: 15px;
          font-weight: 700;
          overflow: hidden;
          /* 隐藏溢出的内容 */
          white-space: nowrap;
          /* 阻止文本换行 */
          text-overflow: ellipsis;

          .el-link--default {
            padding-left: 30px !important;
          }

          .circle {
            position: absolute;
            top: 15px;
            left: 13px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid gray;
          }
        }
      }

      // }
    }
  }
}
</style>