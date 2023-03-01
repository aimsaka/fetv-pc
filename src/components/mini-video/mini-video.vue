<template>
  <div>
    <layout class="head">
      <template #title>
        微视频
      </template>
      <template #describe>
        讲好我们自己的故事
      </template>
    </layout>

    <div class="content">
      <div class="item" v-for="item in list" :key="item.src">
        <el-link :underline="false" href="https://element.eleme.io" target="_blank">
          <el-image style="width: 383px; height: 214px; margin-left: 15px;" :src="item.src"></el-image>
        </el-link>
        <el-link :underline="false" href="https://element.eleme.io" target="_blank">
          <div style="text-align: center; font-size: 18px; ">{{ item.title }}</div>
        </el-link>

      </div>
    </div>
  </div>
</template>

<script>
import layout from "../layout/layout.vue";
export default {
  components: {
    layout
  },
  name: 'FetvPcMiniVideo',

  data() {
    return {
      list: [
        {
          src: require('../../imges/fac29d61-693e-4eef-97d5-6a3df721e2f4.png'),
          title: '大雾弥漫宛如仙境 福建福州化身“天空之城”'
        },
        {
          src: require('../../imges/2b471dc6-ada1-4863-aff5-502943c500fa.png'),
          title: '大雾弥漫宛如仙境 福建福州化身“天空之城”'
        },
        {
          src: require('../../imges/4c647671375438fd14012ebef7c53038.png'),
          title: '大雾弥漫宛如仙境 福建福州化身“天空之城,”'
        },
        {
          src: require('../../imges/bbcbb8f7664972fc846d3b0ebb87f25c.png'),
          title: '大雾弥漫宛如仙境 福建福州化身“天空之城”'
        },
        {
          src: require('../../imges/990bd1878f0843ba97e0d564f7cfab71.png'),
          title: '大雾弥漫宛如仙境 福建福州化身“天空之城”'
        },
        {
          src: require('../../imges/63bce1ee1cada179346609191c0ed0eb.png'),
          title: '大雾弥漫宛如仙境 福建福州化身“天空之城”'
        },
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
.head {
  margin-top: 40px;
  margin-bottom: 40px;
}

.content {
  display: flex;
  flex-wrap: wrap;

  .item {}
}
</style>