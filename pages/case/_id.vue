<template>
  <div>
    <div class="content">
      <!-- <h2>News-Content{{$route.params.id}}</h2>-->
      <ul >
        <nuxt-link tag="li"  v-for="(item,index) in caseList" :key="index" :to="'/caseDetail/'+item.id" >
          <div class="fl"><img :src="item.outImg" alt=""></div>
          <div class="fr">
            <h3>案例简介:</h3>
            <p>{{item.outline}}</p>
            <a href="#">案例详情</a>
          </div>
        </nuxt-link>
      </ul>
      <el-pagination
        class="pull-right clearfix page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="pageSizesList"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next"
        :total="pageCount">
      </el-pagination>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
   data(){
       return{
         caseList:[],
         classId: this.$route.params.id,
         pageSizesList: [5, 10, 20, 30, 50],
         currentPage: 1,
         pageSize: 5,
         pageCount: 0,

       }
   },
    methods:{
      getAndDraw(){
        console.log(this.id)
        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News',{
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          pageCount: this.pageCount,
          classId:this.classId})
          .then((res)=>{
            if (res.data.length > 0 ) {
              this.caseList=res.data
              this.pageCount= res.total

            } else {
              this.caseList=[]
              this.pageCount= 0
            }

          })
      }
    },
    handleSizeChange(val) {

      this.pageSize=val;//获取page-sizes里的每页显示几条数据的值，赋给我们自定义的每页显示数量的变量pageNum

      this.getAndDraw();//展示页面信息


    },
    //改变页码
    handleCurrentChange(val) {

      this.currentPage = val;

      this.getAndDraw();//确定当前页面后刷新页面


    },
    watch: {
      "$route": function(){
        //路由变化会触发
        this.classId=this.$route.params.id,
        this.getAndDraw()
      }
    },
    created(){
      this.getAndDraw()
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .content{position: relative;overflow: hidden;
  ul{width:100%;overflow: hidden}
  li{overflow:hidden;display: inline-block;width:49%;margin-right:10px;margin-bottom: 28px;border:1px solid #ccc;box-sizing: border-box;padding:12px 18px;
    background:#fff;
  .fr{width:30%;padding-left:15px;box-sizing: border-box;position: relative;height:348px;
  h3{font-size: 16px;color:#666;padding-bottom: 25px;}
  p{font-size: 16px;color:#999;line-height: 25px;text-indent: 2em;height:98px;
    overflow: hidden;}
  a{position: absolute;bottom:0;left:50%;margin-left:-50px;display: inline-block;width:100px;height:32px;line-height: 32px;border-radius: 5px;background: #ffc601;text-align: center;color:#fff}
  a:hover{box-shadow: 0 0 5px 2px rgba(0,0,0,0.5);}
  }
  img{display: inline-block;width:384px;height:345px;}
  }

  }
  .page{text-align:center;
  span{display: inline-block;width:60px;height: 30px;line-height: 30px;border:1px solid #ccc;font-size: 16px}
  span:hover{background: #4c9bd6;color:#fff}
  }
</style>
