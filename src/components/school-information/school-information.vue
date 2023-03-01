<template>
  <div>
    <!-- 院校模块 -->
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
          <el-carousel-item>
            <div class="school" v-for="item in list" :key="item.src">
              <div class="item">
                <span>
                  <el-image style="width: 248px; height: 141px" :src="item.src"></el-image>
                </span>
                <span style="width: 317px;">
                  <div class="name">
                    <div>{{ item.name }}</div>
                    <div class="button"><i class="el-icon-arrow-right"></i></div>
                  </div>
                  <el-divider class="line"></el-divider>
                  <div class="text">{{ item.title }}</div>
                </span>

              </div>
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
        <div class="classroom">
          <div class="img-item">
            <div v-for="item in teacher" :key="item.src">
              <el-image style="width: 270px; height: 150px; margin-left: 15px;" :src="item.src"></el-image>
            </div>
          </div>
          <div class="link-box">
            <div class="link" v-for="item in teacher" :key="item.src">
              {{ item.title }}
              <div class="circle"></div>
            </div>
          </div>

        </div>
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
      list: [
        {
          src: require('../../imges/9475c5ea-2cc5-4ecf-9375-08d8d9e8abb3.png'),
          name: "泉州工程职业技术学院",
          title: `泉州工程职业技术学院于2013年11月经福建省人民政府批准设立。学校由南安市属国有企业泉州市南翼置业发展集团有限责任公司全资子公司南安市宏翔教育投资有限公司举办。南翼集团下辖宏翔教育投资有限公司、南安城建集团等17家子公司，总资产约187亿元，形成以房地产开发、教育产业投资经营、港务码头建设经营、文化旅游、供应链金融、医疗康养产业投资运营、物业管理、城市综合开发等八大主要业务板块，可为学生提供广阔实习、实训平台及就业渠道
  学校坐落于海上丝绸之路起点、中国著名侨乡南安市，依山傍水，风光旖旎，校区现有占地面积350多亩，建有教学楼、办公楼、图书馆、实验室、实训楼、学生宿舍楼、教师公寓、食堂共8.3万平方米。优美的校园环境，一流的教学设施，吸引了广大莘莘学子到学校求学。南翼集团将继续加大投入，进一步改善教学、科研、学习和生活条件，形成功能突出、实践研发基地定位明确的校园功能布局。
  学校充分发挥毗邻福建最大的光电信息产业基地、机械装备制造基地、成辉国际电商园等区位优势，先后与泉州、南安市近100家企业建立校企合作关系，搭建了广阔的毕业生就业合作平台。学校还积极引进优质的教育教学资源，与国内知名企业签订了“产学研用创”合作协议，进一步提升了学校的办学水平。
学校实施人才强校和特色兴校战略，致力构建一支素质优良、结构合理、爱岗敬业、专兼结合的“双师型”教师队伍，为每个专业配备两名副高职称以上和企业技术骨干的专业带头人，以及多名中级职称以上的“双师型”专业骨干教师，学生不仅获得坚实的理论知识，还可得到丰富的实践训练。
学校目前设有汽车工程系、机械工程系、建筑工程系、经济管理系、信息工程系、航空旅游系等六个系，开设有空中乘务、飞机机电设备维修、人工智能技术应用、软件技术、大数据技术、工业机器人技术、机电一体化技术、汽车制造与试验技术、大数据与财务管理、建设工程管理、建筑装饰工程技术、药品经营与管理等12个专科专业。随着办学规模不断发展壮大，学校将持续优化专业结构设置，有效对接区域经济社会发展。`

        },
        {
          src: require('../../imges/9475c5ea-2cc5-4ecf-9375-08d8d9e8abb3.png'),
          name: "泉州工程职业技术学院",
          title: '大雾弥漫宛如仙境 福建福州化身“天空之城阿巴阿巴阿巴阿巴阿巴”'
        },
        {
          src: require('../../imges/9475c5ea-2cc5-4ecf-9375-08d8d9e8abb3.png'),
          name: "泉州工程职业技术学院",
          title: '大雾弥漫宛如仙境 福建福州化身“天空之城阿巴阿巴阿巴阿巴阿巴”'
        },
      ],
      teacher: [
        {
          src: require('../../imges/3c81b3cd-564d-4cde-9d10-a51effa3e904.png'),
          title: '大雾弥漫宛如仙境 福建福州化身“天空之城”'
        },
        {
          src: require('../../imges/4f194a67-07d1-4006-80d2-885f41b06fac.png'),
          title: '大雾弥漫宛如仙境 福建福州化身“天空之城”'
        },
        {
          src: require('../../imges/4b3a023b-a39e-4d65-aea2-f8108a360e94.png'),
          title: '大雾弥漫宛如仙境 福建福州化身“天空之城 大雾弥漫宛如仙境 福建福州化身“天空之城大雾弥漫宛如仙境 福建福州化身“天空之城”'
        },
        {
          src: require('../../imges/e6b38618-99f7-4102-9d6a-437ae241bc75.png'),
          title: '大雾弥漫宛如仙境 福建福州化身“天空之城”'
        },
      ]
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

  .head {
    margin-bottom: 45px;
  }

  .left {

    // background-color: pink;
    .school {
      height: 155px;

      .item {
        height: 141px;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .line {
          width: 253px;
          height: 1px;
          background: #eeeeee;
          margin: 10px 0;
        }

        .name {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .button {
            position: relative;
            width: 5px;
            height: 5px;
            margin-right: 20px;
            // margin-right: 10px;
            background-color: #cdcdcd;
            /* Green */
            border: none;
            color: white;
            padding: 9px 9px;
            border-radius: 50%;

            /* make the button round */
            i {
              position: absolute;
              top: 1px;
              left: 2px;
              z-index: 6;

            }
          }
        }

        .text {
          width: 266px;
          font-size: 14px;
          font-family: NotoSansHans-Regular;
          font-weight: 300;
          color: #777777;
          line-height: 40px;
          overflow: hidden;
          /* 隐藏溢出的内容 */
          white-space: nowrap;
          /* 阻止文本换行 */
          text-overflow: ellipsis;
          /* 在末尾显示省略号 */
        }

      }


    }

  }

  .right {
    // background-color: skyblue;

    .classroom {
      // .img {
      width: 100%;
      height: 451px;
      padding-top: 10px;
      background-color: rgb(255, 255, 255);

      .img-item {
        width: 584px;
        height: 315px;
        display: flex;
        flex-wrap: wrap;

      }

      .link-box {
        height: 127px;
        overflow: hidden;

        .link {
          width: 400px;
          padding-left: 30px;
          line-height: 40px;
          position: relative;
          font-size: 15px;
          font-weight: 700;
          overflow: hidden;
          /* 隐藏溢出的内容 */
          white-space: nowrap;
          /* 阻止文本换行 */
          text-overflow: ellipsis;

          .circle {
            position: absolute;
            top: 15px;
            left: 13px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid gray;
          }
        }
      }


      // }
    }
  }
}
</style>