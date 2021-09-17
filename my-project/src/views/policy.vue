<template>
  <div class="subcontent">
    <div class="policy_declaration">
      <div class="policy_declaration_left">
        <el-row>
          <el-col :span="12">
            <span class="menu_name">目录</span>
            <el-menu
              class="sidebar-el-menu"
              active-text-color="red"
              default-active="1"
            >
              <div v-for="item in menuList" :key="item.id">
                <template>
                  <el-menu-item :index="item.id" @click="navClick(item.id)">
                    {{ item.list }}
                  </el-menu-item>
                </template>
              </div>
            </el-menu>
          </el-col>
        </el-row>
      </div>

      <div class="policy_declaration_right">
        <h4 class="right_heard">
          {{ title }}
        </h4>
        <el-divider></el-divider>
        <div class="right_main">
      
          <p v-html="content"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPolicyApi } from "@/api/index.js";
export default {
  data() {
    return {
      id: "",
      menuList: [],
      title: "",
      content: "",
    };
  },
  created() {
    this.getPolicyData();
    this.navClick("1");
  },

  methods: {
    /**
     * 左侧导航栏点击事件
     */
    navClick(val) {
      this.menuList.forEach((item) => {
        if (item.id == val) {
          this.title = item.title;
          this.content = item.contents;
        }
      });
    },

    getPolicyData() {
      let obj = {
        id: this.id,
      };
      getPolicyApi(obj)
        .then((res) => {
          if (res.responsecode == 1) {
            this.menuList = res.result;
          } else {
            this.$messega.error(res.msg);
          }
        })
        .catch(() => {});
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>


<style lang="less" scoped>
.policy_declaration {
  height: 100%;
  display: flex;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  .policy_declaration_left {
    width: 30%;
    text-align: left;
    border-right: 1px solid #e6e6e6;;
    .menu_name {
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      color: #ffffff;
    }
    span {
      width: 200%;
      display: block;
      background: #de0415;
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
  .policy_declaration_right {
    width: 70%;
    display: flex;
    flex-direction: column;
    .right_heard {
      height: 110px;
      font-size: 20px;
      font-weight: 500;
      line-height: 134px;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
    }
    .right_main {
      text-align: left;
      flex: 1;
      overflow: scroll;
      font-size: 16px;
      font-weight: 500;
    }
  }
}


</style>