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
}
</style>