<template>
   <el-container class='content'>
      <el-header style="height: fit-content;">
          <topnav></topnav>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view />
        </keep-alive>
      </el-main>
    </el-container> 
</template>

<script>
import topnav from '../components/topnav.vue'
export default {
components: {
    topnav,
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
    padding: 0px;
    color: #333;
    text-align: center;
    line-height: 80px;
  }
  .el-main {
    background-color: #E9EEF3;
    padding: 0px;
    color: #333;
    text-align: center;
    height: 100%;
  }
</style>

