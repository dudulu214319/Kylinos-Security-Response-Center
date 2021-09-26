<template>
  <div class="tophead">
    <div class="top-left-logo">
      <img  src="../../static/images/kylin_logo.png" alt="">
      <div class="t"></div>
    </div>
    <div class="split"></div>
    <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal" @select="handleSelect" router text-color="#fff"
  active-text-color="#ffffff">
        <template v-for="item in topNav">
            <el-menu-item :index="item.value" :key="item.value" @click="handleNav(item)" >
              <span :class="['iconfont', item.icon]" style="padding:0px 5px"></span>
              <span class="Navtext" slot="title">{{ item.name }}</span>
            </el-menu-item>
          </template>
    </el-menu>
    <span class="iconfont icon-yonghu1"></span>
    <p class="yonghu">{{yonghu_name}}</p>
    <el-button @click="Exitbtn" class="right-bt" style="background-color: #04152D; border: #04152D;"><span class="iconfont icon-denglu"></span></el-button>
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
      yonghu_name:''
    }
  },
  created() {
    this.topNav = topNav
    this.yonghu_name = sessionStorage.getItem('username')
  },
  computed: {
    defaultActive: function () {
    
      return this.$route.path.replace("/", "");

    }, 
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
    Exitbtn() {
        this.$router.push({
        path: "/login"
      });
      sessionStorage.removeItem("username")
    }

  }
}
</script>

<style lang="less" scoped>
.tophead {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #04152D;
  border-bottom: 1px dashed #888888;
  .split {
    width: 23%;
  }
  .top-left-logo {
      position: relative;
  }
  img {
    transform: scale(0.05) translate(-50%, -50%);
    position: absolute;
    left: -339%;
    top: -558%;
    z-index: 1;
    filter: grayscale(100%) brightness(5);
      
  }
  .t {
    width: 190px;
    height: 0;
    border-top: 80px solid;
    border-right: 32px solid transparent;
    border-top-color:  #D0161B;
  }
  .toplogo {
    width: 87px;
    height: 52px;
    img {
      margin-left: 40px;
      width: 75%;
      height: 75%;
    } 
  }

  .right-bt {
    // margin-top: 7px;
    padding: 5px 3px;
    margin: 7px 25px 4px 15px;
  }
  .yonghu {
    // width: 5%; 
    white-space:nowrap;
    color: white;
  }
}


</style>
