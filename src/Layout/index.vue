<template>
  <div>
    <!-- 顶部布局 -->
    <topnav></topnav>
    <!-- 内容  (二级路由出口) -->
    <router-view />
    <!-- 底部布局 -->
    <footerInformation></footerInformation>

  </div>
</template>

<script>
import topnav from "./topnav/topnav.vue";
import footerInformation from "./footer-information/footer-information.vue";

export default {

  components: {
    topnav,
    footerInformation,
  },
  name: 'FetvPcIndex',

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

</style>