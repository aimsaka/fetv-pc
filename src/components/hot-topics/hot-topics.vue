<template>
  <div>
    <layout class="head">
      <template #title>
        热点专题
      </template>
      <template #describe>
        全景解读 深度关注
      </template>
    </layout>

    <div class="content">
      <div class="block" v-for="(item, index) in list" :key="index">

        <el-link :href="item.url" :underline="false" style="font-size: 18px;">
          <div class="lattice">
            <el-image style="width: 383px; height: 214px" :src="item.src"></el-image>
          </div>
        </el-link>
        <el-link :href="item.url" :underline="false" style="font-size: 18px; font-weight: 600;">
          {{ item.title }}
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
  name: 'FetvPcHotTopics',

  data() {
    return {
      list: [{
        src: require('../../imges/095715e6-e6ff-48b5-b9e3-74a04c00fed1.jpg'),
        title: '庆祝党的二十大',
        url: 'News?name=庆祝党的二十大'
      },
      {
        src: require('../../imges/a9a8f658-765f-4817-ae21-82d947cd5378.jpg'),
        title: '庆祝党的二十大',
        url: "News?name=庆祝党的二十大"
      },
      {
        src: require('../../imges/490c54f1-09e6-460d-939e-325cd54619ab.png'),
        title: '庆祝党的二十大',
        url: "News?name=庆祝党的二十大"
      },
      {
        src: require('../../imges/79622e59-7979-4c9e-8576-6bf7b26b8853.jpg'),
        title: '庆祝党的二十大',
        url: "News?name=庆祝党的二十大"
      },
      {
        src: require('../../imges/a9a8f658-765f-4817-ae21-82d947cd5378.jpg'),
        title: '庆祝党的二十大',
        url: "News?name=庆祝党的二十大"
      },
      {
        src: require('../../imges/f1732b9b-0500-4b27-a05d-7d6a9387ea55.jpg'),
        title: '庆祝党的二十大',
        url: "News?name=庆祝党的二十大"
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
  // margin: 10px, 15px;
  padding: 23px 0;
}

.content {
  display: flex;
  flex-wrap: wrap;

  .block {
    // padding-left: 12.5px;
    padding-right: 25.5px;
    cursor: pointer;

    el-link {
      font-weight: 700;
      font-size: 20px;
    }
  }

  .block:nth-child(3n) {
    padding-right: 0px;
  }
}
</style>