<template>
  <div class="subcontent notice">
    <div class="flexrow">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
      <el-form-item prop="role_level">
        <el-select v-model="searchForm.role_level" placeholder="请选择危害等级" clearable @clear="search">
          <el-option label="低危" value="1"></el-option>
          <el-option label="中危" value="2"></el-option>
          <el-option label="高危" value="3"></el-option>
          <el-option label="严重" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="keywords">
        <el-input v-model="searchForm.keywords" placeholder="请输入公告名称或编号" clearable @clear="search"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="search" >订阅公告</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="序号"> </el-table-column>
      <el-table-column prop="cve_no" label="漏洞编号"> </el-table-column>
      <el-table-column prop="package_name" label="漏洞公告"> </el-table-column>
      <el-table-column prop="role_level" label="危害等级" > </el-table-column>
      <el-table-column prop="pub_date" label="发布日期"> </el-table-column>
    </el-table>
    <el-pagination style="float:right;margin-top:20px" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagetion.num" :page-sizes="[10, 20, 30, 40]" :page-size="pagetion.size" layout="total, sizes, prev, pager, next, jumper" :total="pagetion.total">
    </el-pagination>
  </div>
</template>

<script>
import { getNoticeApi } from "@/api/index.js";
export default {
  data() {
    return {
      searchForm: {
        keywords: "",
        role_level: ""
      },
      tableData: [],
      pagetion: {
        total: 0,
        num: 1,
        size: 10
      }
    };
  },
  created() { 
    this.getTableData()
  },

  methods: {
    // rolelevelformat(row){
    //   console.log(row,'1111111111')
    //   return row.role_level == 1 ? "低危" :row.role_level == 2 ? "中危" : row.role_level == 3 ? "高危" :row.role_level == 4 ? "严重" :"";
    // },
    //搜索
    search() {
      this.pagetion.num=1
      this.getTableData()
    },
    //获取表格数据
    getTableData() {
      let obj = {
        role_level: this.searchForm.role_level,
        keywords: this.searchForm.keywords,
        pagenum: this.pagetion.num,
        pagesize: this.pagetion.size
      };
      getNoticeApi(obj)
        .then(res => {
          if (res.responsecode == 1) {
            this.tableData = res.result;
            this.pagetion.total=res.count;

          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(() => {
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagetion.size=val
      this.getTableData()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagetion.num=val
      this.getTableData()
    }
  }
};
</script>
<style lang="less" scoped>
.notice {
  text-align: left;
  .flexrow{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
