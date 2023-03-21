<template>
  <div>
    <div class="box">
      <div>
        <div slot="header" class="clearfix">
          <div class="head-text">
            <slot name="title"></slot>
            <div class="line"></div>
          </div>

          <div class="head-mark">
            <el-divider></el-divider>
            <div>
              <slot name="describe"></slot>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <div class="more-button">
          <span @click="goPage"><slot name="goPage"></slot></span>
          <span @click="goNav"> <slot name="goNav"></slot></span>
        </div>
      </div>
      <!-- <div class="button" slot="goNav">
        <div class="more-button" @click="goNav">查看更多</div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "FetvPcLayout",
  data() {
    return {};
  },
  props: ["columnTitle"],
  mounted() {},

  methods: {
    goNav() {
      if (this.columnTitle != undefined) {
        this.$router.push({ path: "News", query: { name: this.columnTitle } });
      } else {
        let title = this.$slots.title[0].text;
        this.$router.push({ path: "News", query: { name: title } });
      }
    },
    goPage() {
      let type = { School: "院校信息", AirClassroom: "空中课堂" };
      let columnTitle = this.$slots.title[0].text;
      for (const key in type) {
        if (type[key] == columnTitle) {
          this.$router.push({ path: `${key}` });
        }
      }
      console.log(columnTitle);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  .button {
    width: 100%;
    position: relative;

    .more-button {
      right: 0px;
      top: -30px;
    }
  }
}
</style>