<template>
  <div class="register">
    <img src="../../static/images/log-back.png" alt="" />
    <div class="registercontent" style="width:100%">
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
            <el-form ref="registerform" :model="registerform" label-width="80px" :rules="rules">
              <el-form-item label="用户名" prop="userName">
                <el-input v-model="registerform.userName"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="registerform.email"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="registerform.password"></el-input>
              </el-form-item>
              <el-form-item label="重复密码" prop="copypassword">
                <el-input v-model="registerform.copypassword"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="registerbtn" style="width:206px">注册</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="text" @click="gologin">已有账户，跳转登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { registerapi } from "@/api/index.js";
export default {
  data() {
    let validateNewPassword2 = (rule, value, callback) => {
      if (value !== this.registerform.password) {
        callback(new Error('与原密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerform: {
        userName: "",
        password: "",
        copypassword: '',
        email: ''
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
        ],
        copypassword: [
          {
            required: true,
            message: "请再次输入密码",
            trigger: ["blur", "change"]
          },
          { validator: validateNewPassword2, trigger: 'blur' },
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: ["blur", "change"]
          }
        ],
      }
    };
  },
  created() { },
  computed: {},

  methods: {
    registerbtn() {
      this.$refs.registerform &&
        this.$refs.registerform.validate(valid => {
          if (valid) {
            let obj = {
              name: this.registerform.userName,
              password: this.registerform.password,
              copypassword: this.registerform.copypassword,
              email: this.registerform.email
            };
            registerapi(obj)
              .then(res => {
                if (res.responsecode == 0) {
                  this.$router.push({
                    path: "/login"
                  });
                  this.$message({
                  // message: res.responsemsg,
                  message: "注册成功",
                  type: 'success'
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
        path: "/login"
      });
    },
  }
};
</script>
<style lang="less" scoped>
.register {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .registercontent {
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
