<template>
  <div class="bottom"><img v-lazy="{ nolazy }" :data-src="src" alt="" /></div>
  <!-- 自定义指令lazy data-src为暂存真实图片连接，到自定义指令时赋值给src -->
</template>

<script>
export default {
  props: {
    lazy: {
      type: Boolean,
      default: true,
    },
    src: {
      type: String,
      default: "../../images/children.png",
    },
    computed: {
      nolazy() {
        return !this.lazy;
      },
    },
  },
  directives: {
    lazy: {
      bind(el, binding) {
        const { nolazy } = binding.value;
        if (nolazy) return (el.src = el.dataset.src);
        const placehold = "../../images/logo.png";
        el.src = placehold;
        const obServer = new IntersectionObserver((entires) => {
          // 判断某个元素有没有出现在视图中
          if (entires[0].intersectionRatio <= 0) return;

          el.src = el.dataset.src;
          obServer.unobserve(el);
        });
        obServer.observe(el);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  position: fixed;
  bottom: 10px;
  right: 0;
}
</style>