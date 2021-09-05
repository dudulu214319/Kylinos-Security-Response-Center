<template>
  <div class="home">
    <div class="backimg" style="">
      <img src="../../static/images/homeback.png" alt="" />
      <div class="titletext">
        <div class="title-top">
          <div class="title">麒麟软件安全应急响应中心</div>
          <div class="english">Kylinos Security Response Center</div>
        </div>
        <el-button class="btn">提交漏洞</el-button>
        <div class="bot-text">诚邀各位安全专家共建国产操作系统安全生态</div>
      </div>
    </div>
    <div class="about">
      <div class="about-english">ABOUT</div>
      <div class="about-title">关于</div>
      <p class="about-content">   KSRC - 麒麟安全应急响应中心（KYLIN SECURITY RESPONSE CENTER）是安全研究者和白帽子们反馈
        麒麟软件产品安全问题和威胁情报的官方途径，我们将致力于保护广大用户的安全，努力提升麒麟产品的整体安全水平。
                KSRC 现在仍然在不断的成长过程中，如果您有好的建议，请通过邮件告诉我们：psirt@kylinos.cn
      </p>
    </div>
    <div class="notice"> 
      <div class="notice-english">NOTICE</div>
      <div class="notice-title">公告</div>
      <div class="notice-content">
        <div class="contentdiv">
          <img src="../../static/images/integral.png" alt="">
          <div class="des-content">漏洞提交奖励政策</div>
          <el-button class="notice-btn">查看详情</el-button>
        </div>
        <div class="contentdiv">
          <img src="../../static/images/workbench.png" alt="">
          <div class="des-content">SRC行业安全测试规范</div>
          <el-button class="notice-btn">查看详情</el-button>
        </div>
        <div class="contentdiv">
          <img src="../../static/images/editor.png" alt="">
          <div class="des-content">漏洞审核标准</div>
          <el-button class="notice-btn">查看详情</el-button>
        </div>
      </div>

    </div>
    <div class="footer">
      津ICP备15002470号-1   版权所有©麒麟软件

    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  created() { },
  computed: {},

  methods: {}
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .backimg {
    width: 100%;
    height: 535px;
    background: #04152d;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .titletext {
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      position: absolute;
      top: 0%;
      // margin: auto;
    }
    .title-top {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .title {
      width: 872px;
      height: 100px;
      font-size: 72px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 100px;
      // margin: 20px;
    }
    .english {
      width: 615px;
      height: 43px;
      font-size: 36px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #ffffff;
      line-height: 43px;
      //  padding: 20px;
    }
    .btn {
      width: 359px;
      height: 85px;
      background: #d0161b;
      border-color: #d0161b;
      // border-radius: 40px;
      color: #ffffff;
      font-size: 36px;
    }
    .bot-text {
      width: 405px;
      height: 28px;
      font-size: 20px;
      color: #ffffff;
      line-height: 24px;
    }
  }
  .about {
   
    
    .about-content {
      width: 1287px;
      margin: auto;
      text-align: left;
      font-size: 22px;
      font-weight: 400;
      color: #04152d;
      line-height: 40px;
      word-wrap:break-word;
      padding: 80px 0px;
      text-indent: 3em;
      white-space: pre-wrap;
    }
  }
  .notice{
    width:100%;
    height: 415px;
    background: #F9F9F9;
    .notice-content{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      margin: 50px auto;
      .contentdiv{
      height: 210px;
      width: 230px;
      // border:1px solid #ccc;
      img{
        width: 114px;
        height: 114px;
      }
      .des-content{
        font-size: 22px;
        font-weight: 400;
        color: #333333;
        line-height: 22px;
        padding: 5px;
      }
      .notice-btn{
        width: 120px;
        height: 42px;
        background: #D0161B;
        // border-radius: 21px;
        font-size: 16px;
        color: #FFFFFF;
        margin:10px 0px
      }
    }
    }
    
  }
  .footer{
    width: 100%;
    height: 140px;
    text-align: center;
    line-height: 140px;
    // vertical-align: middle;
  }
  .notice-english ,.about-english {
    font-size: 72px;
    font-family: Arial-Black, Arial;
    font-weight: 900;
    color: rgba(4, 21, 45, 0.06);
    line-height: 101px;
    width: 100px;
    margin-left: 35%;
    padding: 60px 0px;
  }
  .notice-title,.about-title {
      font-size: 48px;
      font-weight: 500;
      color: #04152d;
      line-height: 67px;
      position: relative;
      margin-top:-170px;
    }
}
</style>
