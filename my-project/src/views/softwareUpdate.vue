<template>
  <div class="subcontent">
    <div class="softwareUpdate_search">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item prop="keywords">
          <el-input
            class="search_content"
            v-model="searchForm.keywords"
            placeholder="请输入软件包名或修复漏洞"
            clearable
            @clear="search"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="search"
          ></el-button>
        </el-form-item>
        <el-form-item prop="keywords2">
          <el-select
            class="search_content"
            v-model="searchForm.keywords2"
            placeholder="下拉选择危害等级"
            clearable
            @clear="search"
          >
            <el-option label="低危" value="低危"></el-option>
            <el-option label="中危" value="中危"></el-option>
            <el-option label="高危" value="高危"></el-option>
            <el-option label="严重" value="严重"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="bug_num" label="编号"> </el-table-column>
        <el-table-column prop="sofware_name" label="软件包名">
        </el-table-column>
        <el-table-column prop="repair_version" label="修复版本">
        </el-table-column>
        <el-table-column prop="bug_level" label="漏洞等级"> </el-table-column>
        <el-table-column prop="repair_bug" label="修复漏洞">
        </el-table-column>
        <el-table-column prop="date" label="更新时间"> </el-table-column>
        <el-table-column prop="download_link" label="下载链接">
        </el-table-column>
      </el-table>
      <el-pagination
        background
        style="float: right; margin: auto"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.num"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pagination.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getSoftwareUpdateApi } from "@/api/index.js";
export default {
  data() {
    return {
      searchForm: {
        keywords: "",
        keywords2: "",
      },
      tableData: [],
      tag: 0,
      pagination: {
        total: 0,
        num: 1,
        size: 10,
      },
    };
  },
  created() {
    this.getTableData();
  },

  methods: {
    //搜索
    search() {
      this.pagination.num = 1;
      this.getTableData();
      if(this.tag == 1){
        this.$message({
        message: "查询成功",
        type: 'success'
      });
      }
      this.tag = 0;
    },
    //获取表格数据
    getTableData() {
      let obj = {
        keywords: this.searchForm.keywords,
        keywords2: this.searchForm.keywords2,
        pagenum: this.pagination.num,
        pagesize: this.pagination.size,
      };
      getSoftwareUpdateApi(obj)
        .then((res) => {
          if (res.responsecode == 1) {
            console.log(this.value);
            console.log(this.keywords);
            this.tableData = undefined;
            this.tableData = res.result;
            this.pagination.total = res.count;
            this.tag = 1;
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch(() => {});
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagination.size = val;
      this.getTableData();
      this.tag = 0;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagination.num = val;
      this.getTableData();
      this.tag = 0;
    },
  },
};
</script>
<style lang="less" scoped>
.softwareUpdate_search {
  text-align: left;

  white-space:nowrap;
  .search_content {
    width: 220px;
  }
}
</style>
