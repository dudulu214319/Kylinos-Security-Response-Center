<template>
  <div class="tophead">
    <div class="toplogo"><img src="../../static/images/kylin_logo.png" alt=""></div>
    <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal" @select="handleSelect" router text-color="#fff"
  active-text-color="#ffffff">
        <template v-for="item in topNav">
            <el-submenu :index="item.value" :key="item.value" v-if="item.children">
              <template slot="title">
                <span :class="['iconfont', item.icon]" style="padding:0px 5px"></span>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item :index="child.value" v-for="child in item.children" :key="child.value" @click="handleNav(child)">
                {{ child.name }}
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="item.value" :key="item.value" @click="handleNav(item)" v-else>
              <span :class="['iconfont', item.icon]" style="padding:0px 5px"></span>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </template>
    </el-menu>

    <div class="rightbtn">
        <span class="el-icon-user-solid" style="padding:0px 5px;color:#ffffff"></span>
        <span style="color:#ffffff">{{username}}</span>
        <span class="iconfont icon-denglu" style="color:#ffffff;padding:0px 5px" @click="loginout"></span>   
    </div>
   
  </div>

</template>

<script>
import topNav from '@/utils/config.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      topNav: null,
      activeIndex: '1',
      username:window.sessionStorage.getItem('username'),
    }
  },
  created() {
    this.topNav = topNav
  },
  computed: {
    defaultActive: function () {
    
      return this.$route.path.replace("/", "");

    },
  },

  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
     handleOpen(key, keyPath) {

    },
    handleClose(key, keyPath) {

    },

    handleNav(item) {
      this.$router.push({
        path: item.url,
      });
    },
    loginout(){
       window.sessionStorage.clear();
       this.$router.push({
          path: "/login"
        });
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.tophead {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #04152D;
  .toplogo {
    margin: 20px;
    width: 87px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .rightbtn{
    text-align: center;
  }
}
</style>
