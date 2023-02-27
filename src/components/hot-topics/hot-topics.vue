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
</style>