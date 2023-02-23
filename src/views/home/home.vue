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
    <!-- //轮播图 -->
    <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FetvPcHome',

  data() {
    return {

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
</style>