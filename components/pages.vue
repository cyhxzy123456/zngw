<template>
  <div>
    <el-pagination
      class="pull-right clearfix"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="pageSizesList"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next"
      :total="pageCount">
    </el-pagination>

  </div>
</template>

<script type="text/ecmascript-6">
  import axios from '../plugins/axios'
    export default {
    data(){

        return{
          tableData: [],//返回的结果集合
            currentPage: 1,
            pageSize: 5,
           pageCount: 0,//数据的总数,

            /*pageSizesList: [10, 15, 20, 30, 50],:page-sizes="pageSizesList"  @size-change="handleSizeChange"*/
        }
    },
      methods:{
        getAndDraw(val){
          this.$axios.post(`http://apiweb.ziniusoft.com/Main/Api/News`)
            .then((res) => {
              console.log(res.total)
              this.pageCount= res.total
            })
            .catch((e) => {
              error({statusCode: 404, message: '获取用户失败'})
            })
        },
       /* handleSizeChange(val){
          var likeThis=this;
          var pageSize = `${val}`;
          this.currentPage=1
          this.pageSize= parseInt(pageSize);
          console.log('pageSize: '+pageSize);
          this.$nextTick(() =>
            this.getAndDraw(1,pageSize,function (resp) {
              likeThis.pageCount = resp.total;
            })
          )
        },*/
        //改变页码
        handleCurrentChange(val){
          var pageSize=this.pageSize;
          var currentPage=this.currentPage
          console.log('pageSize:'+this.pageSize)
          this.getAndDraw(parseInt(currentPage),parseInt(pageSize));
        },

        },
      created(){
        this.getAndDraw()
      }



        }


</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
