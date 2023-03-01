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
        <div class="more-button">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FetvPcLayout",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
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