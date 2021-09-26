<template>
<div class="all">
   <div class="center">
     <div class="left">
       <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="昵称" prop="name">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-input v-model="form.birthday"></el-input>
        </el-form-item>
        <el-form-item label="团队">
          <el-input v-model="form.team"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
       </el-form>
     </div>
     <div class="right">
       <el-form ref="form" :model="form" label-width="80px" ::rules="rules">
        <el-form-item label="电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="微信">
          <el-input v-model="form.weixin"></el-input>
        </el-form-item>
        <el-form-item label="QQ">
          <el-input v-model="form.qq"></el-input>
        </el-form-item> 
        <el-form-item >
          <el-button class="btn" type="primary" @click="onSubmit()" >更新信息</el-button>
        </el-form-item>
       </el-form>
     </div> 
   </div>
</div>
</template>

<script>
import {usergetapi,userupdataapi} from "@/api/index.js";
export default {

  data() {
    return {
      form: {},
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
    sessionStorage.setItem('username','董威龙');
    this.userget();
  },
  computed: {

  },

  methods: {
    onSubmit(){
      let user ={
        oldname: sessionStorage.getItem("username"),
        form: this.form,
      };
      this.$refs.form&&
      this.$refs.form.validate(valid =>{
              if(valid){
                userupdataapi(user)
                .then(res=> {
                  if (res.responsecode==0){
                    this.$message({
                      message: res.responsemsg,
                      type: 'success'
                    });          
                    sessionStorage.setItem("username",this.form.name);
                  };
                  if (res.responsecode==1){
                    this.$message.error(res.responsemsg);
                    this.form.name=sessionStorage.getItem("username");
                  }                
                      }).catch(() => {});
              }else{
                this.$message({
                      message: res.responsemsg,
                      type: 'warning'
                });
                return false;
              }
      }).catch(()=>{})
    },
    userget(){
      let data = {
        name: sessionStorage.getItem("username")
      }
      usergetapi(data)
        .then(res=> {
          this.form = res[0];
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
      .left{
        width: 40%;
        margin: auto;
        /deep/.el-input__inner{
          background-color: #F2F2F2;
        }
      }
      .right{
        width: 40%;
        margin: auto;
        /deep/.el-input__inner{
          background-color: #F2F2F2;
        }
      }
    }
}
</style>