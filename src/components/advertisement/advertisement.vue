<template>
  <div class="ad">
    <img :src="advertisement" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    advertisement: {
      // 默认图片
      default: require("../../imges/44f2f1b1-5697-4bc4-bca4-4c86384f3c50.png"),
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.ad {
  width: 1200px;
  margin: 30px auto;
  img {
    width: 100%;
  }
}
</style>