<template>
  <div class="header-container">
    <el-row>
      <el-col :span="12">
        <img src="../../imges/search-icon.png" class="logo" />
      </el-col>
      <el-col :span="12">
        <div class="header-container-right">
          <p class="time">
            {{ time }}
          </p>
          <div class="date">{{ date }} {{ dey }}</div>
          <el-input
            v-model="input"
            placeholder="搜索"
            prefix-icon="el-icon-search"
          ></el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-container {
  // background-color: cadetblue;
  margin: 0 auto;
  width: 1200px;
  height: 149px;

  .logo {
    width: 400px;
    height: 80px;
    margin-top: 35px;
  }

  .header-container-right {
    float: right;
    text-align: right;
  }

  .time {
    font-family: digifaw, serif;
    font-size: 24px;
    // font-weight: 600;
    color: #34363f;
    line-height: 20px;
    margin-top: 22px;
  }

  .date {
    font-size: 12px;
    margin-bottom: 30px;
  }
}
</style>