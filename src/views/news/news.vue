<template>
  <div>
    新闻页面:{{ this.$route.query.name }}
  </div>
</template>

<script>
export default {
  name: 'FetvPcHeadLinenews',

  data() {
    return {

    };
  },

  mounted() {

  },
  created() {
    console.log(this.$route.query.name);
  },

  methods: {

  },
};
</script>

<style scoped>

</style>