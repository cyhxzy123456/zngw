<template>
  <div>
    <div class="wrap">
      <div class="detail-cont">
        <div class="inner">
          <div class="fl" v-for="(item,index) in newsDetail" :key="index" >
            <div class="tip box">
              <div class="head">
                <span class="tit">{{item.title}}</span><span class="date">{{item.addTime}}</span>
              </div>
              <div class="tip-txt">
                <p>{{item.outline}}</p>
              </div>
            </div>
            <div class="txt box" v-html="item.content">
              <!-- {{item.content}}-->
            </div>
          </div>
          <div class="fr">
            <ul>
              <li class="box">
                <hot-list :hotList="information">
                  <h3 slot="head">最新资讯</h3>
                </hot-list>
              <li class="box">
                <hot-list :hotList="hotList">
                  <h3 slot="head">热门知识</h3>
                </hot-list>
              <li class="box">
                <hot-list :hotList="recommend">
                  <h3 slot="head">相关推荐</h3>
                </hot-list>
              </li>
            </ul>
          </div>
        </div>
        <div class="page" v-for="(item,index) in newsDetail" :key="index" >
          <!--  <span @click="prevPage(val)"></span>-->
          <span tag="span"  @click="last()">上一篇</span>
          <nuxt-link tag="span" :to="{path:'/news/'+item.classId}">返回列表</nuxt-link>
          <span tag="span"  @click="next()">下一篇</span>

        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /*  import BannerSmall from '../../../components/banner-small.vue'*/
  import HotList from '../../components/hot-list.vue'
/*  import axios from '../../plugins/axios'*/
  import qs from 'qs'
  import axios from 'axios'
  export default {
    components:{HotList},
    data(){
      return{
        newsDetail:[],
        information:[],
        hotList:[],
        recommend:[],
        currentPage: 1,
        pageSize: 5,
        pageCount: 0,
        aid: this.$route.params.id,
        bqId: this.$route.params.id,
        title: '',
        keyWords:'',
        description:'',
        lastPage:'',
        nextPage:''
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
    /*async asyncData ({ params }) {
      let [request1Data, request2Data, request3Data] = await Promise.all([
        axios.post('https://apiweb.ziniusoft.com/Main/Api/News',qs.stringify({currentPage: 1, pageSize: 5, pageCount: 0,id:params.id})),
        axios.post('https://apiweb.ziniusoft.com/Main/Api/News',qs.stringify({currentPage: 1, pageSize: 5, pageCount: 0,bqName:'相关推荐'})),
        axios.post('https://apiweb.ziniusoft.com/Main/Api/News',qs.stringify({currentPage: 1, pageSize: 5, pageCount: 0,bqName:'热门知识'})),
      ])
      console.log(request1Data.data.data);
      return {
        newsDetail: request1Data.data,
        recommend: request2Data.data,
        hotList: request3Data.data
      }
    },*/

    /*服务器端渲染获取详情页内容*/
    async asyncData ({ params }) {
      let { data } = await axios.post('https://apiweb.ziniusoft.com/Main/Api/News',qs.stringify({currentPage: 1, pageSize: 5, pageCount: 0,id:params.id}))
      /*console.log(params.id);*/
      return { newsDetail: data.data}
    },

    methods:{
        seo(){
          for(var i=0;i<this.newsDetail.length;i++){
            this.title = this.newsDetail[i].seoTitle
            this.keyWords = this.newsDetail[i].seoKeyWords
            this.description = this.newsDetail[i].seoDescription
          }
        },
      /*正文*/
     /* getData(){
       /!* console.log(this.id)*!/
        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News', {
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          pageCount: this.pageCount,
          id:this.aid})
          .then((res)=>{

            this.newsDetail = res.data
            for(var i=0;i<this.newsDetail.length;i++){
              this.title = this.newsDetail[i].seoTitle
              this.keyWords = this.newsDetail[i].seoKeyWords
              this.description = this.newsDetail[i].seoDescription
            }
          })
      },*/
      /*最新资讯*/
      getInformation(){
        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News', {
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          pageCount: this.pageCount,
        })
          .then((res)=>{
            const arr = res.data
            for(var i=0;i<arr.length;i++){
                if (arr[i].bqName=='案例推荐')
                  arr.splice(i,1);
            }
            /*console.log(arr)*/
            this.information = arr
          })
  },
      /*热门知识*/
      getHot(){
        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News', {
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          pageCount: this.pageCount,
          bqName:'热门知识'
        })
          .then((res)=>{
            this.hotList = res.data
          })
      },
      /*相关推荐*/
      getRecommend(){
        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News', {
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          pageCount: this.pageCount,
          bqName:'相关推荐'
        })
          .then((res)=>{
            this.recommend = res.data
          })
      },
      /*上一篇*/

      last(){
        this.$router.push({path: '/newsDetail/'+this.nextPage})
          this.aid=this.nextPage
        this.change()
      },
      next(){
        this.$router.push({path: '/newsDetail/'+this.lastPage})
          this.aid=this.lastPage
        this.change()
      },
      change(){
        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/NewsDetails',{id:this.aid})
          .then((res)=>{
            if(res.last ===""){
              this.lastPage=this.aid
            }else{
              this.lastPage=res.last
            }
            if(res.next ===""){
              this.nextPage=this.aid
            }else{
              this.nextPage=res.next
            }
          })
      },
    },
    watch: {
      "$route": function(id){
        //路由变化会触发

        this.bqId=this.$route.params.id
        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News', {
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          pageCount: this.pageCount,
          id:this.bqId
        })
          .then((res)=>{
            this.newsDetail = res.data
            this.seo()
           /* this.change()*/
          })

        this.getInformation()
        this. getHot()
        this.getRecommend()

      }
    },
    created(){
      this.seo()
     /* this.getData()*/
      this.getInformation()
      this. getHot()
      this.getRecommend()
      this. change()

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .detail-cont{margin-top:48px;padding:30px 24px;border:1px solid #eee;overflow: hidden;font-size: 16px;color:#999;
  .inner{overflow: hidden}
  .date{float:right;margin-top:5px}
  p{line-height: 30px;}
  .tit{font-size: 20px;color:#666;width: 540px;  display: inline-block;}
  .fl{width:67%;margin-right:22px;
  .txt{line-height: 30px;text-indent: 2em}
  .head{padding-bottom: 20px;border-bottom: 1px solid #ccc;margin-bottom: 20px}
  }
  .fr{width:31%;
  }
  .box{padding:25px;background: #eee;border-radius: 10px;margin-bottom: 22px; }
  }
  .page{text-align: center;
  span{width:162px;height: 60px;line-height: 60px;border:1px solid #ccc;text-align: center;display: inline-block;margin:36px 5px 30px 0;font-size: 16px;color:#010101}
  }
  .page span:hover{border-color:#4C9BD6;color:#4C9BD6}
</style>
