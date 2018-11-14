<template>
  <div>
   <!-- <h2>News-Content{{classId}}</h2>-->
    <div class="news-list">
      <ul>
        <nuxt-link  tag="li"  v-for="(item,index) in newsList" :key="index"  :to="'/newsDetail/'+item.id" >
          <div class="fl"><img :src="item.outImg" alt=""></div>
          <div class="fr">
            <div class="top">
              <span class="tit">{{item.title}}</span><span class="date">{{item.addTime}}</span>
            </div>
            <div class="bot">
              <p>{{item.outline}}</p>
            </div>
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
  import axios from '../../plugins/axios.js'
/*  import Pages from '../../components/pages.vue'*/
  import qs from "qs";
  export default {
/*      components:{Pages},*/
    data(){
      return{
        newsList:[],
        classId: this.$route.params.id,
        pageSizesList: [5, 10, 20, 30, 50],
          currentPage: 1,
          pageSize: 5,
          pageCount: 0,

      }
    },
    methods:{
      /*getData(){
        console.log(this.id)
        this.$axios.post('http://apiweb.ziniusoft.com/Main/Api/FriendshipLink',this.newsData)
          .then((res)=>{
            console.log(res.data)
           /!* this.newsList = res.data*!/
          })
      },*/

      getAndDraw(val){
        this.$axios.post(`https://apiweb.ziniusoft.com/Main/Api/News`,
          {
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          pageCount: this.pageCount,
          classId:this.classId}
          )
          .then((res) => {

            /*this.newsList=res.data*/
              if (res.data.length > 0 ) {
                this.newsList=res.data
                this.pageCount= res.total

              } else {
                this.newsList=[]
                this.pageCount= 0
              }
            })

         /* .catch((e) => {
            error({statusCode: 404, message: '获取用户失败'})
          })*/

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
    },
    watch: {
      "$route": function(id){
        //路由变化会触发
        this.classId=this.$route.params.id
        this.getAndDraw()
      }
    },
    created(){
      this.getAndDraw()
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .news-list{padding:28px;border:1px solid #eee;
  li{padding:24px;background: #eee;border-radius: 10px;overflow: hidden;margin-bottom: 15px;
  img{display: inline-block;width:196px;height: 196px;}
  .fr{width:78%}
  .top{font-size: 20px;color:#666;padding-bottom: 20px;border-bottom: 1px solid #eee;
  .date{font-size: 16px;color:#999;float:right}
  }
  .bot{
  p{font-size: 16px;color:#999;line-height: 26px;}
  }
  }
  }
  .page{text-align: center;
  span{display: inline-block;width:60px;height: 30px;line-height: 30px;border:1px solid #ccc;font-size: 16px}
  span:hover{background: #4c9bd6;color:#fff}
  }
  .el-pager li{display: inline-block;width:60px;height: 30px;line-height: 30px;border:1px solid #ccc!important;font-size: 16px}
</style>
