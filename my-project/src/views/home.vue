<template>
  <div class="home">
    <div class="above">
      <img src="../../static/images/homeback.png" alt="">
        <div class="above-img">
          <div class="top-text">
            <p id="yingji-center" >麒麟软件安全应急响应中心</p>
            <p id="eng-center" >Kylinos Security Response Center</p>
          </div>
            <el-button class="btn" @click="btnclick">提交漏洞</el-button>
            <p id="yao">诚邀各位安全专家共建国产操作系统安全生态</p>
        </div>
    </div>

    <div class="middle">
      <p id="guanyu">关于</p>
      <p id="about">ABOUT</p>
      <p id="main-text">KSRC - 麒麟安全应急响应中心（KYLIN SECURITY RESPONSE CENTER）是安全研究者和白帽子们反馈 
        麒麟软件产品安全问题和威胁情报的官方途径，我们将致力于保护广大用户的安全，努力提升麒麟产品的整体安全水平。 
        KSRC 现在仍然在不断的成长过程中，如果您有好的建议，请通过邮件告诉我们：psirt@kylinos.cn</p>
    </div>

    <div class="bottom">
      <p id="gong">公告</p>
      <p id="notice">NOTICE</p>
      <div class="verbose">
        <div class="twb">
          <div class="img-div"><img src="../../static/images/integral.png" alt=""></div>
          <p style="">漏洞提交奖励政策</p>
          <el-button class="small-btn">查看详情</el-button>
        </div>
        <div class="twb">
          <div class="img-div"><img src="../../static/images/workbench.png" alt=""></div>
          <p style="">行业安全测试规范</p>
          <el-button class="small-btn">查看详情</el-button>
        </div>
        <div class="twb">
          <div class="img-div"><img src="../../static/images/editor.png" alt=""></div>
          <p style="">漏洞审核标准</p>
          <el-button class="small-btn">查看详情</el-button>
        </div>
      </div>
    </div>

    <div class="last">
      <p id="bottom-text">津ICP备15002470号-1 版权所有©麒麟软件</p>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {

    };
  },
  created() {

  },
  computed: {

  },

  methods: {
    btnclick(){
      // console.log('dianji')
      this.$router.push({
        path: "/SubmitVulnerability"
      });
    },
  },
};
</script>
<style lang='less' scoped>
.home {
  .above {
      position: relative;
      .above-img {
          width: 100%;
          height: 100%;
          position: absolute; top: 0%;
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
          justify-content:space-around;
          .top-text {
            #yingji-center {
            width: 872px;
            height: 100px;
            font-size: 72px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 100px;
          }
            #eng-center {
            height: 43px;
            font-size: 36px;
            font-family: Helvetica-Bold, Helvetica;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 43px;
            }
         }
        #yao {
          width: 405px;
          height: 28px;
          font-size: 20px;
          font-family: Helvetica;
          color: #FFFFFF;
          line-height: 24px;
        }

        .btn {
            width: 359px;
            height: 85px;
            background-color: #D0161B;
            color: #ffffff;
            font-size: 36px;
            font-family: Helvetica;
            border: 0;
            border-radius: 0;
        }

  }
      
    img {
      object-fit:cover; width:100%;
    }

 }

 .middle {
   height: 370px;
   position: relative;
   background-color: #ffffff;
   #guanyu {
    width: 96px;
    height: 67px;
    font-size: 48px;
    position: absolute; top: 50px; left: 50%; 
    transform: translate(-50%, -50%);
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #04152D;
    line-height: 67px;
   }
   #about {
    // width: 284px;
    height: 101px;
    font-size: 72px;
    position: absolute; top: 63px; left: 40%; 
    transform: translate(-50%, -50%);
    font-family: Arial-Black, Arial;
    font-weight: 900;
    color: rgba(4, 21, 45, 0.06);
    line-height: 101px;
   }
   #main-text {
    width: 1287px;
    height: 116px;
    font-size: 22px;
    position: absolute; top: 175px; left: 50%;
    transform: translate(-50%, -50%);
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #04152D;
    line-height: 40px;
    text-indent: 3em;
    white-space: pre-wrap;
   }
 }

 .bottom {
   height: 415px;
   background: #F9F9F9;
   position: relative;
    #gong {
    width: 96px;
    height: 67px;
    font-size: 48px;
    position: absolute; top: 50px; left: 50%; 
    transform: translate(-50%, -50%);
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #04152D;
    line-height: 67px;
   }
   #notice {
    // width: 284px;
    height: 101px;
    font-size: 72px;
    position: absolute; top: 63px; left: 40%; 
    transform: translate(-50%, -50%);
    font-family: Arial-Black, Arial;
    font-weight: 900;
    color: rgba(4, 21, 45, 0.06);
    line-height: 101px;
   }
   .verbose {
     width: 100%;
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     position: absolute; top: 55%; left: 50%; 
     transform: translate(-50%, -50%);
     .twb {
      display: flex;
      flex-direction:  column;
      justify-content: space-between;
      height: 212px;
        .img-div {
          border:1px dashed #04152D; 
        }
        .small-btn {
          width: 120px;
          height: 42px;
          margin: 5px;
          background-color: #D0161B;
          border-radius: 0px;
          border: 0;
          color: #ffffff;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
        }

     }

   }

 }
 .last {
   height: 140px;
   background-color: #ffffff;
   position: relative;
   #bottom-text {
    width: 400px;
    height: 22px;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 140px; 
    margin: 0 auto;
   }
 }
 
}
</style>

