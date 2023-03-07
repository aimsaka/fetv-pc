<template>
  <div class="top">
    <!-- 顶部结构 -->
    <div class="topnav">
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
      <!-- 导航栏 -->
      <div class="NavMenu">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#ba0825"
          text-color="#ffdcab"
          active-text-color="#fff"
          router
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="news?name=头条新闻">头条新闻</el-menu-item>
          <el-menu-item index="news?name=要闻聚焦">要闻聚焦</el-menu-item>
          <el-menu-item index="news?name=校园">校园</el-menu-item>
          <el-menu-item index="news?name=FETV">FETV</el-menu-item>
          <el-menu-item index="news?name=招考">招考</el-menu-item>
          <el-menu-item index="news?name=空中课堂">空中课堂</el-menu-item>
          <el-menu-item index="news?name=家长">家长</el-menu-item>
          <el-menu-item index="news?name=师说">师说</el-menu-item>
          <el-menu-item index="news?name=职场">职场</el-menu-item>
          <el-menu-item index="news?name=微视频">微视频</el-menu-item>
          <el-menu-item @click="visable = !visable">更多</el-menu-item>
        </el-menu>
      </div>
      <!-- 更多选项扩展 -->
      <div class="more" v-show="this.visable">
        <div @click="to('直播访谈')">直播访谈</div>
        <div @click="to('福建教育报道')">福建教育报道</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FetvPcTopnav",
  data() {
    return {
      input: "",
      time: new Date().toLocaleTimeString("en-US", { hour12: false }),
      date: new Date().toLocaleDateString(),
      dey: new Date().toLocaleDateString("zh-CN", { weekday: "long" }),
      activeIndex2: "1",
      visable: false,
    };
  },
  components: {
    // flag() {
    //   if
    //   return this.a + this.b
    // }
  },
  mounted() {},
  methods: {
    handleSelect(key) {
      if (key != null) {
        this.visable = false;
      }
    },
    to(e) {
      this.$router.push(`/news?name=${e}`);
      this.visable = false;
      console.log(this.$route.path);
      if (this.$route.query.name === e) {
        console.log("hh");
      }
    },
  },
  created() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString("en-US", { hour12: false });
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.top {
  height: 191px;
}

.topnav {
  width: 100%;
  // background-image: url(https://www.fetv.cn/static/img/bg.a262cf3.png);
  background: url(https://www.fetv.cn/static/img/bg.a262cf3.png) no-repeat;
  background-position: right;
  height: 149px;

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

  .NavMenu {
    // margin: 0px, 20px;
    // padding-left: 500px;
    background-color: #ba0825;

    .el-menu-demo {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  }

  .more {
    display: flex;
    flex: 1;
    margin-left: 150px;
    width: 1234px;
    height: 42px;
    background-color: rgba(255, 248, 249, 0.95);
    font-size: 14px;
    color: #ba0825;

    div {
      cursor: pointer;
      line-height: 42px;
      text-align: center;
      padding: 0 20px;
    }
  }
}

::v-deep .el-input__inner {
  width: 200px;
  height: 42px;
}

::v-deep .el-menu.el-menu--horizontal {
  // padding-left: 50px;
  width: 1200px;
  height: 42px;
  margin: 0px;
  border-bottom: none;
}

::v-deep .el-menu--horizontal > .el-menu-item {
  height: 42px;
  line-height: 42px;
  border-bottom: none;
  font-size: 16px;
  font-weight: 800;
}

::v-deep .el-input__inner:focus {
  border-color: #ba0825;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}

.el-menu::after,
.el-menu::before {
  display: none;
}

@font-face {
  font-family: digifaw;
  src: url("../../common/font/digifaw.ttf");
}
</style>