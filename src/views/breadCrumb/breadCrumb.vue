<template>
  <!-- 导航面包屑 -->
  <el-breadcrumb separator-class="el-icon-arrow-right" class="breadCrumb">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a :href="message.path">{{ message.title }}</a></el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      itemList: [
        { path: "news?name=1", title: 1 },
        { path: "news?name=2", title: 2 },
        { path: "news?name=3", title: 3 },
        { path: "news?name=4", title: 4 },
        { path: "news?name=5", title: 5 },
        { path: "news?name=6", title: 6 },
        { path: "news?name=7", title: 7 },
        { path: "news?name=8", title: 8 },
        { path: "news?name=9", title: 9 },
        { path: "news?name=10", title: 10 },
        { path: "news?name=11", title: 11 },
      ],
    };
  },
  props: ["message"],
  mounted() {},
};
</script>

<style lang="scss" scoped>
.breadCrumb {
  width: fit-content;
  height: 30px;
  line-height: 30px;
  padding: 0 15px;
  background-color: #f8f8f8;
  margin-top: 30px;
  margin-bottom: 25px;
}
</style>