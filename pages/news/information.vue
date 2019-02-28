<template>
    <div>
      <news-list :classId="classId"></news-list>
    </div>
</template>

<script type="text/ecmascript-6">
  import newsList from '../../components/news-list.vue'
    export default {
      components:{newsList},
      data(){
          return{
            newsList:[],
            pageSizesList: [5, 10, 20, 30, 50],
            currentPage: 1,
            pageSize: 5,
            pageCount: 0,
            title: '紫牛软件-公司资讯',
            keyWords:'紫牛资讯',
            description:'成都紫牛软件公司动态，最新资讯。',
            classId:'information'
          }
      },
      head () {
        return {
          title: this.title,
          meta: [
            { hid: 'keyWords',name:'keyWords', content:this.keyWords},
            { hid: 'description',name:'description', content:this.description}
          ]
        }
      },
      methods:{
        getAndDraw(){
          this.$axios.post(`https://apiweb.ziniusoft.com/Main/Api/News`,
            {
              currentPage: this.currentPage,
              pageSize: this.pageSize,
              pageCount: this.pageCount,
              classId:'information'}
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
        },
        handleSizeChange(val) {
          this.pageSize=val;//获取page-sizes里的每页显示几条数据的值，赋给我们自定义的每页显示数量的变量pageNum
          this.getAndDraw();//展示页面信息
        },
        handleCurrentChange(val) {
           this.currentPage = val;
           this.getAndDraw();//确定当前页面后刷新页面
        },
      },
      created(){
        this.getAndDraw()
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
