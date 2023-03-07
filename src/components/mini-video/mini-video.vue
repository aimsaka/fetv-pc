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
          <el-image style="width: 383px; height: 214px; margin-left: 15px;" :src="item.image"></el-image>
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
import { miniVideoImage } from "../../api/imges";
export default {
  components: {
    layout
  },
  name: 'FetvPcMiniVideo',

  data() {
    return {
      list: []
    };
  },

  mounted() {

  },

  methods: {
    async schoolList() {
      try {
        const res = await miniVideoImage("1")
        // console.log(res.rows[0].informationApiList);
        this.list = res.rows[0].informationApiList
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this.schoolList()
  }

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