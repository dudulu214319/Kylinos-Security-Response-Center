<template>
  <div class="login">
    <img src="../../static/images/log-back.png" alt="" />
    <div class="logincontent" style="width:100%">
      <div class="contenttop">
        <div class="left">
          <div class="logo">
            <img src="../../static/images/kylin_logo.png" alt="" />
          </div>
          <div class="footer">版权所有@麒麟软件有限公司</div>
        </div>
        <div class="right">
          <div style="width:90%;margin:40% auto">
            <div class="title">
              麒麟安全应急响应中心
            </div>
            <div class="desc">
              感 谢 您 积 极 为 国 产 操 作 系 统 贡 献 安 全 力 量
            </div>
            <el-form ref="loginform" :model="loginform" label-width="80px" :rules="rules">
              <el-form-item label="用户名" prop="userName">
                <el-input v-model="loginform.userName"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="loginform.password" type="password"></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-checkbox v-model="loginform.checked">记住我</el-checkbox>
                <el-button type="text" @click="registerbtn">注册</el-button>
                <el-button type="text" @click="forgetpasswordbtn">忘记密码</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="loginbtn" style="width:206px">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginapi } from "@/api/index.js";
export default {
data() {
    return {
      loginform: {
        userName: "",
        password: "",
        checked: true
      },
      rules: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: ["blur", "change"]
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  created() {

  },
  computed: {

  },

  methods: {
    loginbtn(){
        this.$refs.loginform &&
        this.$refs.loginform.validate(valid => {
          if (valid) {
            let obj = {
              name: this.loginform.userName,
              password: this.loginform.password
            };
            loginapi(obj)
              .then(res => {
                if (res.responsecode == 0) {
                  sessionStorage.setItem("username", this.loginform.userName);
                  this.$router.push({
                    path: "/home"
                  });
                  this.$message({
                  // message: res.responsemsg,
                  message: "登陆成功",
                  type: 'success'
                    }); 
                } else {
                  this.$message.error(res.responsemsg);
                }
              })
              .catch(() => {
                sessionStorage.setItem("username", this.loginform.userName);
                  this.$router.push({
                    path: "/home"
                  });
                  this.$message({
                  // message: res.responsemsg,
                  message: "登陆成功",
                  type: 'success'
                    }); 
              });
          } else { //没通过表单验证
            return false;
          }
        });
    },
    registerbtn(){
        this.$router.push({
        path: "/register"
      });
    },
    forgetpasswordbtn(){
        this.$router.push({
        path: "/forgetPassword"
      });
    }
  },
};
</script>
<style lang='less' scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .logincontent {
    width: 100%;
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
          margin:30px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .footer {
          width: 100%;
          text-align: center;
          color: white;
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
      /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
        color: white;
      }
    }
  }
}
</style>
