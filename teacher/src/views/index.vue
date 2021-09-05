<template>
   <el-container style="height:100%;width:100%">
      <el-header height='100px'>
          <topnav></topnav>
      </el-header>
      <el-main>
        <!-- <keep-alive> -->
          <router-view />
        <!-- </keep-alive> -->
      </el-main>
    </el-container> 
</template>

<script>
import topnav from '../components/topnav.vue'

export default {
components: {
    topnav
  },
  data() {
    return {

    };
  },
  created() {

  },
  computed: {

  },

  methods: {
  },
};
</script>
<style scoped>
  .el-header {
    /* background-color: #B3C0D1; */
    background-color: #04152D;
    padding: 0px;
    color: #333;
    text-align: center;
    line-height: 100px;
  }
  .el-main {
    background-color: #ffffff;
    padding: 0px;
    color: #333;
    text-align: center;
    height: 100%;
    width: 100%;
  }
</style>

