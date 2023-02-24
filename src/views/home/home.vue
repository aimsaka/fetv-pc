<template>
  <div class="homo">
    <!-- 头条新闻 -->
    <div class="headline">
      <div class="head-text">
        福建省召开国家 “双高计划” 建设工作推进会
      </div>
      <div>
        省委教育工委、省教育厅开展春季学期开学专项督导
      </div>
      <div>
        第二届中国基础教育论坛暨中国教育学会第三十四次学术年会召开
      </div>
    </div>
    <!-- 新闻内容 -->
    <div class="news-details">
      <!-- 左边栏 -->
      <div class="left">
        <!-- //轮播图 -->
        <div class="block">
          <el-carousel height="507px" width="806px" interval="4000" indicator-position="none">
            <el-carousel-item v-for="(item, index) in list" :key="index">
              <img :src=item.src alt="">
              <div class="title"><span><span>{{ index + 1 }}</span>/3</span>{{ item.title }}</div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 右边栏 -->
      <div class="right">
        <div slot="header" class="clearfix">
          <div class="head-text">
            要闻聚焦
            <div class="line"></div>
          </div>

          <div class="head-mark">
            <el-divider></el-divider>
            <div>每日最新教育资讯</div>
          </div>

        </div>
        <el-card class="box-card">
          <div class="headline-news"> <img src="../../imges/新.png" />省关工委2023年全体委员会议召开</div>
          <div v-for="(item, index) in newsList" :key="index" class="text item">
            <el-link target="_blank" :href="item.src">
              &nbsp;<span class="point"></span>&nbsp; <img src="../../imges/shipin.png" alt="" v-if="item.switch">&nbsp;
              {{ item.title }}
            </el-link>
          </div>

        </el-card>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'FetvPcHome',

  data() {
    return {
      list: [{
        src: require('../../imges/161b2574-dd97-490c-8a71-fcb8e7f11ac4.jpg'),
        title: '大雾弥漫宛如仙境 福建福州化身“天空之城”'
      },
      {
        src: require('../../imges/b986c848-6565-4abf-8402-a7acb7838268.jpg'),
        title: '福州：春暖花开 出游正当时'

      },
      {
        src: require('../../imges/d9aea775-eaa2-4ded-9261-be3ae08374b6.jpg'),
        title: '福建宁化：千亩李花怒放 绘就春日“雪景图”'
      }],

      newsList: [
        {
          title: '厦二十大精神走深走hhhhhhhhhhhhhhhhhhhhhhhhhhhhh实',
          src: '/NewsDetails?tid=1',
          switch: false
        },
        {
          title: '厦二十大精神走深走hhhhhhhhhhhhhhhhhhhhhhhhhhhhh实',
          src: '/NewsDetails?tid=2',
          switch: false
        },
        {
          title: '厦二十大精神走深走hhhhhhhhhhhhhhhhhhhhhhhhhhhhh实',
          src: '/NewsDetails?tid=3',
          switch: false
        },
        {
          title: '厦二十大精神走深走hhhhhhhhhhhhhhhhhhhhhhhhhhhhh实',
          src: '/NewsDetails?tid=4',
          switch: false
        },
        {
          title: '厦二十大精神走深走hhhhhhhhhhhhhhhhhhhhhhhhhhhhh实',
          src: '/NewsDetails?tid=5',
          switch: true
        },
        {
          title: '厦二十大精神走深走hhhhhhhhhhhhhhhhhhhhhhhhhhhhh实',
          src: '/NewsDetails?tid=6',
          switch: false
        }

      ]
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
.headline {
  // align-items: center;
  text-align: center;
  font-size: 18px;
  line-height: 35px;
  font-weight: 550;

  .head-text {
    color: #ba0825;
    font-size: 34px;
    line-height: 68px;
    font-weight: 700;
  }
}

.news-details {
  width: 1200px;
  // background-color: rgb(238, 25, 25);
  margin: 0 auto;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;


  .left {
    .block {
      width: 806px;
      position: relative;

      img {
        width: 100%;
      }

      .title {
        height: 70px;
        width: 100%;
        position: absolute;
        bottom: 0px;
        right: 0px;
        background-color: rgb(0, 0, 0, 0.45);
        text-align: center;
        color: rgba(255, 255, 255, 0.647);
        font-size: 24px;
        line-height: 70px;

        span {
          position: absolute;
          top: 25px;
          left: 75px;
          line-height: 25px;
          font-size: 30px;
          font-weight: 800;

          span {
            position: absolute;
            top: -2px;
            left: -27px;
            font-size: 34px;
          }
        }

      }
    }
  }

  .right {
    width: 380px;
    height: 507px;
    // background-color: pink;

    .text {
      font-size: 14px;
      color: #000;
    }

    .item {
      height: 35px;
      // margin-bottom: 14px;
      align-items: center;
      line-height: 35px;
      // align-items: baseline;
      display: flex;
      justify-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      /* 限制在一个块元素显示的文本的行数 */
      -webkit-box-orient: vertical;
      /* 垂直排列 */
      word-break: break-all;
      /* 内容自动换行 */
      // text-overflow: ellipsis;
      // white-space: nowrap;

      img {
        width: 17px;
        // align-items: baseline
      }
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both
    }

    .clearfix {
      width: 380px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      line-height: 40px;
    }

    .head-text {
      line-height: 25px;
      // width: 64px;
      font-size: 20px;
      font-weight: 700;

      .line {
        margin-top: 11px;
        background-color: #ba0825;
        height: 4px;
        width: 100%;
      }
    }

    .head-mark {
      width: 232px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      font-family: Noto Sans S Chinese;
      font-weight: 300;
      font-style: italic;
      color: #777777;
      line-height: 40px;

      el-divider {
        width: 90px;
      }
    }

    .box-card {
      height: 100%;
      border-top: none;
      box-shadow: 0px 6px 6px 0px rgba(115, 124, 139, 0.15);

      .headline-news {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;

        img {
          width: 25px;
          margin-right: 6px;
        }
      }
    }
  }
}

::v-deep .el-card__header {
  border-bottom: none;
  border-top: none;
  padding: 0px;
  height: 45px;
}

::v-deep .el-divider {
  width: 90px;
}

::v-deep .el-divider--horizontal {
  margin-top: 21px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.news-details .right .clearfix[data-v-39f87be5]:before {
  display: none;
}
</style>