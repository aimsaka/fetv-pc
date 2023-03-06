<template>
  <div class="account">
    <div class="logo"><img src="../../imges/logo.png" alt="" /></div>
    <div class="name">福建教育网</div>
    <div class="text">福建教育电视台主办</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.account {
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px #f4f4f4 solid;
  .logo {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    border: #f4f4f4 solid 1px;
    text-align: center;
    img {
      margin-top: 15px;
      width: 80%;
    }
    .name {
      padding: 15px 0;
      font-weight: 700;
    }
  }
}
</style>