<template>
<div class="herolist">
   <div class="top">
     <div class="title">麒麟安全英雄榜</div>
    <div class="tip">感谢各位安全专家长期关注麒麟软件系统安全，帮助KSRC提高麒麟软件整体安全水平，保障国产操作系统生态数亿用户的安全。</div>
   </div>

   <div class="content">
     <div class="left">
       <el-table
      :data="topfour"
      style="width: 100%;"
          :row-style="{height: '86px'}"
      height="100%">
      <el-table-column
        type="index"
        label="排名"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="fields.name"
        label="昵称"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="fields.team"
        label="团队"
        align="center"
        >
      </el-table-column>
      <el-table-column
        type="index"
          :index="qualify"
        label="资质"
        align="center"
       >
      </el-table-column>
      <el-table-column
        prop="fields.credit"
        label="积分"
        align="center"
        >
      </el-table-column>
    </el-table>
      <div class="norm">麒麟软件漏洞奖励标准</div>
      <div class="normcontent">{{norm}}</div>
     </div>

     <div class="right">
    <el-table
      :data="tableData"
      style="width:100%; position: absolute;"
          :row-style="{height: '86px'}"
      height="100%"
      class="hero"
      >
      <el-table-column
        type="index"
        label="积分总榜"
        align="center"
        width="136"
        label-class-name="creditclass">
      </el-table-column>
      <el-table-column
        prop="fields.name"
        label=""
        align="center"
        >
      </el-table-column>
    </el-table>
     </div>
   </div>
</div>
</template>

<script>
import {herolistapi} from "@/api/index.js";
export default {

  data() {
    return {
      tableData: [],
      topfour: [{},{},{},{}],
          norm:  '感谢各位安全专家长期关注麒麟软件系统安全，帮助KSRC提高麒麟软件整体安全水平，保障国产操作系统生态数亿用户的安全。',
        
    };
  },
  created() {
    this.herolist()
  },
  computed: {

  },

  methods: {
    qualify(index){
      let q=['最好','很好','比较好','好'];
      return q[index];
    },
    herolist(){
      let a = 'abab'
      herolistapi(a)
      .then(res=> {
            if (res.responsecode == 1){
                this.tableData=res.result;
                console.log(this.tableData[0].fields);
                let num = Math.min(4,res.size);
                for(var i=0;i<num;i++){
                  this.topfour[i]=res.result[i];
                }
                console.log(this.topfour[0].fields.name);
            }else{
                this.$message.error(res.responsemsg);
            }
        })
        .catch(() => {
      });
    }
  },
};
</script>
<style lang="less" scoped>
.herolist{
  .top{
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  .title{
    width: 168px;
    height: 33px;
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 33px;
    margin: auto;
  }
  .tip{
    width: 795px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
    margin-bottom: 1%;
  }
}
  .content{
    width: 100%;
    height: 870px;
    background: #F5F5F5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    .left{
      width: 45%;
      height: 90%;
      margin-right: 3%;
      display: flex;
      flex-direction: column;
      .norm{
        width: 100%;
        height: 10%;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        text-align: center;
        line-height: 400%;
      }
      .normcontent{
        width: 100%;
        height: 40%;
        background-color: white;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
      }
    }
    .right{
      width: 20%;
      height: 90%;
      position: relative;
      .hero{
        /deep/.creditclass{

          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #000000;
        
      }
      }
      // margin:  auto;
    }
  }
}
</style>

