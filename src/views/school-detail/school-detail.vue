<template>
  <div class="school-introduction">
    <!-- 顶部样式 -->
    <topnav></topnav>
    <div class="content">
      <!-- 面包屑 -->
      <bread-crumb
        :message="{ path: 'Introduction', title: '学校' }"
      ></bread-crumb>
      <!-- 学校介绍 -->
      <div class="school-introduction">
        <div class="left">
          <img src="../../imges/fwgdn.png" alt="" />
        </div>
        <div class="right">
          <div class="school-detail">
            <div class="school-name">泉州工出技术学院</div>
            <div class="school-lable">
              <ul>
                <li>重点大学</li>
                <li>测试</li>
              </ul>
            </div>
          </div>
          <div class="school-motto"><span>淡泊名利 无以致远</span></div>
          <div class="school-nature">
            <div>学校性质 <span>重点大学</span></div>
            <div>学校官网<span>sadasdasdqwd</span></div>
            <div>学校电话<span>156156156156165</span></div>

            <div>
              院校地址<span
                >福建省泉州市南安科技教育园区学园中路霞东彬星988号</span
              >
            </div>
          </div>
          <div class="school-introduce">
            简介：
            泉州工程职业技术学院于2013年11月经福建省人民政府批准设立。学校由南安市属国有企业泉州市南翼置业发展集团有限责任公司全资子公司南安市宏翔教育投资有限公司举办。南翼集团下辖宏翔教育投资有限公司、南安城建集团等17家子公司，总资产约187亿元，形成以房地产开发、教育产业投资经营、港务码头建设经营、文化旅游、供应链金融、医疗康养产业投资运营、物业管理、城市综合开发等八大主要业务板块，可为学生提供广阔实习、实训平台及就业渠道。
            学哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼校坐落于海上丝绸之路起点、中国著名侨乡南安市，依山傍水，风光旖旎，校区现有占地面积350多亩，建有教学楼、办公楼、图书馆、实验室、实训楼、学生宿舍楼
          </div>
        </div>
      </div>
      <!-- 学校风光 -->
      <div class="school-scenery">
        <div class="scenery">
          校园风光<img src="../../imges/1ggdfx.png" alt="" />
        </div>
        <div class="school-image">
          <img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
        </div>
      </div>
    </div>
    <!-- 底部样式 -->
    <footer-information></footer-information>
  </div>
</template>

<script>
import FooterInformation from "../../Layout/footer-information/footer-information.vue";
import topnav from "../../Layout/topnav/topnav.vue";
import BreadCrumb from "../breadCrumb/breadCrumb.vue";
export default {
  components: { topnav, BreadCrumb, FooterInformation },
};
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 0 auto;
  .school-introduction {
    display: flex;
    .left {
      width: 660px;
      height: 416px;
      img {
        width: 100%;
      }
    }
    .right {
      width: 550px;
      height: 420px;
      margin-left: 40px;
      .school-detail {
        border-bottom: solid 1px #f4f4f4;
        .school-name {
          font-family: NotoSansHans-Bold;
          font-size: 30px;
          font-weight: 600;
          font-stretch: normal;
          line-height: 22px;
          letter-spacing: 0px;
          color: #000000;
        }
        .school-lable {
          padding: 10px 0;
          li {
            display: inline-block;
            width: 85px;
            height: 30px;
            background-color: #ffffff;
            border-radius: 6px;
            border: solid 1px #ba0825;
            opacity: 0.3;
            font-family: NotoSansHans-Regular;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 30px;
            letter-spacing: 0px;
            color: #ba0825;
            margin-right: 5px;
            text-align: center;
          }
        }
      }
      .school-motto {
        font-family: NotoSansHans-Regular;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #808080;
      }
      .school-nature {
        div {
          display: inline-block;
          width: 250px;
          height: 30px;
          font-family: NotoSansHans-Bold;
          font-size: 14px;
          font-weight: 600;
          font-stretch: normal;
          // line-height: 40px;
          letter-spacing: 0px;
          color: #000000;
          span {
            margin-left: 19px;
            font-family: NotoSansHans-Regular;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: #3d6cba;
          }
        }
      }
      .school-introduce {
        margin-top: 23px;
        width: 507px;
        height: 190px;
        font-family: NotoSansHans-Regular;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #808080;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 8;
        text-overflow: ellipsis;
      }
    }
  }
  .school-scenery {
    padding: 23px 0px;
    margin: 33px 0px 0px;
  }
}
</style>