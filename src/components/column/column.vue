<template>
  <div class="column">
    <layout class="head">
      <template #title>
        专题·栏目
      </template>
      <template #describe>
        自办原创本土节目
      </template>
    </layout>
    <div class="img">
      <div class="item" v-for="(item, index) in src" :key="index">
        <img :src="item" alt="">
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
  name: 'FetvPcColumn',

  data() {
    return {
      src: [
        require('../../imges/fjjy.png'),
        require('../../imges/xckp.jpg'),
        require('../../imges/fwgdn.png')
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
.column {
  margin-top: 20px;

  .img {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    .item {
      width: 388px;
      height: 214px;

      img {
        width: 388px;
        height: 214px;
      }
    }
  }
}
</style>