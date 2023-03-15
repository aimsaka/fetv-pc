<template>
  <div class="el">
    <div class="el_row" v-for="(item, index) in news_list" :key="index">
      <div class="el_row_title">
        <img src="../../imges/xiaoyuan.jpg" alt="" />
        <layout class="more"></layout>
      </div>
      <div class="el_row_list">
        <el-link
          v-for="item2 in item.informationApiList"
          :key="item2.informationId"
          class="el_row_list_news"
          :underline="false"
          @click="
            $router.push({
              path: 'newsDetails',
              query: { tid: item2.informationId },
            })
          "
          style="font-size: 16px font-weight: 500px;  font-family: NotoSansHans-Regular;"
        >
          {{ item2.title }}
        </el-link>
      </div>
    </div>
  </div>
</template>

<script>
import layout from "../layout/layout.vue";
import { columnNewsAPI } from "../../api";
export default {
  components: { layout },
  data() {
    return {
      news_list: [
        {
          tid: 32423,
          title: "“福小青”党的二十大精神福建青年宣讲走进乡村 “声”入基层青年",
          url: "NewsDetails?tid=2",
        },
      ],
    };
  },
  async created() {
    const res = await columnNewsAPI();

    this.news_list = res.rows.slice(0, 6);
    console.log(this.news_list, "999");
  },
};
</script>

<style lang="scss" scoped>
.el {
  width: 1200px;

  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .el_row {
    width: 364px;
    height: 480px;
    .el_row_title {
      width: 357px;

      position: relative;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      border-radius: 6px;
      .more {
        position: absolute;
        right: 20px;
        bottom: 18px;
      }
    }
    .el_row_list {
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>