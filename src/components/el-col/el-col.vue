<template>
  <div class="el">
    <div class="el_row" v-for="item in news_list" :key="item.columnId">
      <div class="el_row_title">
        <img :src="item.url" alt="" />
        <layout class="more" :columnTitle="item.columnTitle">
          <template #goNav>查看更多</template>
        </layout>
      </div>
      <div class="el_row_list">
        <el-link v-for="item2 in item.informationApiList" :key="item2.informationId" class="el_row_list_news"
          :underline="false" @click="
            $router.push({
              path: 'newsDetails',
              query: { tid: item2.informationId },
            })
          " style="font-size: 16px font-weight: 500px;  font-family: NotoSansHans-Regular;">
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

        },
      ],
      image: [
        {
          url: require("../../imges/xiaoyuan.jpg"),
        },
        {
          url: require("../../imges/FETV.jpg"),
        },
        {
          url: require("../../imges/zhaokao.jpg"),
        },
        {
          url: require("../../imges/zhichang.jpg"),
        },
        {
          url: require("../../imges/jiazhang.jpg"),
        },
        {
          url: require("../../imges/shishuo.jpg"),
        }
      ]
    };
  },
  async created() {
    const res = await columnNewsAPI();
    this.news_list = res.rows.slice(0, 6);
    this.news_list.forEach((el, index) => {
      el.url = this.image[index].url
    });
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