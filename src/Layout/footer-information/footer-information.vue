<template>
  <div class="footer">
    <!-- 底部友情链接栏 -->
    <div class="link-bar">
      <div class="link">
        <el-link :underline="false">&emsp;友情链接:&emsp;</el-link>
        <el-link :underline="false">&emsp;教育部&emsp;</el-link>
        <el-link :underline="false">&emsp;国家广播电视台&emsp;</el-link>
        <el-link :underline="false">&emsp;福建省教育厅&emsp;</el-link>
        <el-link :underline="false">&emsp;福建省广播电视台&emsp;</el-link>
        <el-link :underline="false">&emsp;中国教育电视台&emsp;</el-link>
        <el-link :underline="false">&emsp;福建文艺网&emsp;</el-link>
      </div>
    </div>
    <!-- 底部文字栏 -->
    <div class="text-bar">
      <div class="text-bar-item">
        福建教育网职业道德监督、违法和不良信息举报电话：
        <el-link :underline="false" type="primary">0591-87091983</el-link>
        &emsp;举报邮箱：
        <el-link :underline="false" type="primary">fetv2020@163.com</el-link>

      </div>
      <div class="text-bar-item">
        福建省新闻道德委举报电话：
        <el-link :underline="false" type="primary">0591-87275327</el-link>
        &emsp;涉未成年人不良信息举报电话：
        <el-link :underline="false" type="primary">0591-87091983</el-link>
        &emsp;传真：
        <el-link :underline="false" type="primary">0591-87802248</el-link>
      </div>
      <div class="text-bar-item">
        互联网新闻信息服务许可证编号
        <el-link :underline="false" type="primary">(35120190012)</el-link>
        信息网络传播视听节目许可证号<el-link :underline="false" type="primary">(1309391)</el-link>
        广播电视节目制作经营许可证（闽）字
        第<el-link :underline="false" type="primary">00026号</el-link> 闽ICP备
        <el-link :underline="false" type="primary">05027762号-1</el-link>
      </div>
      <div class="text-bar-item">
        &emsp;<img src="../../imges/blue.png" alt="">
        &emsp;<img src="../../imges/gonganbaobei.png" alt="">
        &emsp;<img src="../../imges/children.png" alt="">
        &emsp;<img src="../../imges/message.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FetvPcFooter',

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
.footer {
  margin-top: 68px;
}

.link-bar {
  height: 68px;
  background-color: #f0f0f0;
  line-height: 63px;

  .link {
    display: flex;
    justify-content: center;
  }
}

.text-bar {
  font-size: 14px;

  .text-bar-item {
    height: 50px;
    text-align: center;
    line-height: 50px;

    img {
      height: 40px;
    }

  }
}

::v-deep .el-row--flex.is-justify-center {
  text-align: center;
}
</style>