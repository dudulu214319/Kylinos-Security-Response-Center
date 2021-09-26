<template>
<div class="all">
   <div class="center">
       <el-form ref="addform" :model="addform" label-width="80px" :rules="rules">
        <el-row :gutter="100">
          <el-col :span="12">
            <el-form-item label="昵称" prop="name">
              <el-input v-model="addform.name" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电话">
              <el-input v-model="addform.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="100">
          <el-col :span="12">
            <el-form-item label="生日" >
                <el-date-picker type="date" placeholder="选择时间" v-model="addform.birthdate" value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
          </el-col>
          
          <el-col :span="12">
            <el-form-item label="微信">
              <el-input v-model="addform.weixin"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="100">
          <el-col :span="12">
            <el-form-item label="团队">
              <el-input v-model="addform.team"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="QQ">
              <el-input v-model="addform.qq"></el-input>
            </el-form-item> 
          </el-col>
        </el-row>
        <el-row :gutter="100">
          <el-col :span="12">
            <el-form-item label="邮箱">
              <el-input v-model="addform.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item >
              <el-button class="btn" type="primary" @click="onSubmit()" >更新信息</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        </el-form>
     
   </div>
</div>
</template>

<script>
import {usergetapi,userupdataapi} from "@/api/index.js";
export default {

  data() {
    return {
      addform: {
        birthdate: "",
        name: "",
        team:"",
        email:"",
        phone:"",
        weixin:"",
        qq:"",

      },
      rules: {
          name: [
            { required: true, 
            message: '名称不能为空',
            trigger: ["blur","change"]},
          ],
          }
    };
  },
  created() {
    // sessionStorage.setItem('username','董威龙');
    this.userget();
  },
  computed: {

  },

  methods: {
    onSubmit(){
      let user ={
        oldname: sessionStorage.getItem("username"),
        addform: this.addform,
      };
      this.$refs.addform&&
      this.$refs.addform.validate(valid =>{
              if(valid){
                userupdataapi(user)
                .then(res=> {
                  if (res.responsecode==1){
                    this.$message({
                      message: res.responsemsg,
                      type: 'success'
                    });          
                    sessionStorage.setItem("username",this.addform.name);
                    this.userget()
                  };
                  if (res.responsecode==0){
                    this.$message.error(res.responsemsg);
                    this.userget()
                  }                
                      }).catch(() => {});
              }else{
                this.$message({
                      message: "名字不能为空",
                      type: 'warning'
                });
                this.userget()
                return false;
              }
      })
    },
    userget(){
      let data = {
        name: sessionStorage.getItem("username")
      }
      usergetapi(data)
        .then(res=> {
          this.addform = res[0];
        })
        .catch(() => {});
    },
  },
};
</script>
<style lang="less" scoped>
.all{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #FAFAFA;
    .center{
      background-color: white;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      position: relative;
      width: 50%;
      height: 50%;
      margin: auto;
      margin-top: 162px;
      // .left{
      //   width: 40%;
      //   margin: auto;
      //   /deep/.el-input__inner{
      //     background-color: #F2F2F2;
      //   }
      // }
      // .right{
      //   width: 40%;
      //   margin: auto;
      //   /deep/.el-input__inner{
      //     background-color: #F2F2F2;
      //   }
      // }
      /deep/.el-input__inner{
          background-color: #F2F2F2;
        }
    }
}
</style>