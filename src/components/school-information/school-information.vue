<template>
  <div>
    院校模块
    <div class="w content">
      <!-- 左边栏 -->
      <div class="layout left">
        <layout class="head">
          <template #title>
            团校信息
          </template>
          <template #describe>
            展现校园风采 传承大学之道
          </template>
        </layout>
        <el-carousel height="480px" indicator-position="none">
          <el-carousel-item v-for="item in 1" :key="item">
            <div class="school">
              <div class="img"></div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 右边栏 -->
      <div class="layout right">
        <layout class="head">
          <template #title>
            云中课堂
          </template>
          <template #describe>
            云教学 让知识传播更广泛
          </template>
        </layout>
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
  name: 'FetvPcSchoolInformation',

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
.content {
  display: flex;
  justify-content: space-between;

  .layout {
    width: 584px;
    height: 591px;

  }

  .left {
    background-color: pink;

    .head {
      margin-bottom: 25px;
    }
  }

  .right {
    background-color: skyblue;
  }
}
</style>