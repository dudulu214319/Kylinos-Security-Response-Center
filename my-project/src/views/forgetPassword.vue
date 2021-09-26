<template>
  <div class="forgetPassword">
    <img src="../../static/images/log-back.png" alt="" />
    <div class="forgetPasswordcontent" style="width: 100%">
      <div class="contenttop">
        <div class="left">
          <div class="logo">
            <img src="../../static/images/kylin_logo.png" alt="" />
          </div>
          <div class="footer">版权所有@麒麟软件有限公司</div>
        </div>
        <div class="right">
          <div style="width: 90%; margin: 40% auto">
            <div class="title">麒麟安全应急响应中心</div>
            <div class="desc">
              感 谢 您 积 极 为 国 产 操 作 系 统 贡 献 安 全 力 量
            </div>
            <el-form
              ref="forgetPasswordform"
              :model="forgetPasswordform"
              label-width="80px"
              :rules="rules"
            >
              <el-form-item label="用户名" prop="name">
                <el-input v-model="forgetPasswordform.name"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="forgetPasswordform.email"></el-input>
              </el-form-item>
              <el-form-item label="新的密码" prop="password">
                <el-input v-model="forgetPasswordform.password" type="password"></el-input>
              </el-form-item>
              <el-form-item label="重复密码" prop="password2">
                <el-input v-model="forgetPasswordform.password2" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="forgetPasswordbtn"
                  style="width: 206px"
                  >找回密码</el-button
                >
              </el-form-item>
              <el-form-item>
                <el-button type="text" @click="gologin"
                  >已有账户，跳转登录</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { forgetPasswordapi } from "@/api/index.js";
export default {
  data() {
    return {
      forgetPasswordform: {
        name: "",
        password: "",
        password2: "",
        email:"",
      },
      rules: {},
    };
  },
  created() {},
  computed: {},

  methods: {
    forgetPasswordbtn() {
      this.$refs.forgetPasswordform &&
        this.$refs.forgetPasswordform.validate((valid) => {
          if (valid) {
            if(this.forgetPasswordform.password != this.forgetPasswordform.password2){
              this.$message.error("两次输入密码不同");
              return false;
            }
            let obj = {
              email: this.forgetPasswordform.email,
              password:this.forgetPasswordform.password,
              name:this.forgetPasswordform.name,
            };
            forgetPasswordapi(obj)
              .then((res) => {
                if (res.responsecode == 1) {
                  this.$message({
                  message: "密码修改成功",
                  type: 'success'
                  }); 
                  this.$router.push({
                    path: "/login",
                  });
                } else {
                  this.$message.error(res.responsemsg);
                }
              })
              .catch(() => {
              });
          } else {
            return false;
          }
        });
    },
    gologin() {
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.forgetPassword {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .forgetPasswordcontent {
    widows: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    .contenttop {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 100%;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        .logo {
          width: 179px;
          height: 107px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .footer {
          width: 100%;
          text-align: center;
        }
      }

      .right {
        width: 40%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.32);
        text-align: center;
        color: #ffffff;
        .title {
          font-size: 32px;
          font-weight: 500;
          color: #ffffff;
          line-height: 45px;
          margin: 30px 0px;
          opacity: 1;
        }
        .desc {
          font-size: 21px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 29px;
          margin: 30px 0px;
        }
      }
      /deep/ .el-form-item__label {
        color: #ffffff;
      }
    }
  }
}
</style>
