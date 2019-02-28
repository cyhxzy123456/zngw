<template>
  <div class="case-detail content_main">
    <banner-small :banner="banner">
      <a href="#" class="test" slot="banner-bth-blue">免费试用</a>
      <a href="#" class="apply" slot="banner-bth-yellow">立即申请</a>
    </banner-small>
    <div class="wrap">
      <div class="inner" >
        <div class="fl"  >
          <ul>
            <li>
              <h3>{{caseTitle}}</h3>
              <div class="content">
                <div class="detail">
                  <p class="font6">案例详情：</p>
                  <p>{{caseOutline}}</p>
                </div>
              </div>
            </li>
            <li class="other">
              <h3>其他系统推荐</h3>
              <div class="content">
                <nuxt-link tag="p" v-for="(item,index) in navList" :key="index" active-class="active" :to="item.href">
                  {{item.navTxt}}
                </nuxt-link>
              </div>
            </li>
            <li class="recommend">
              <h3>案例推荐</h3>
              <div class="content">
                <ul>
                  <nuxt-link tag="li" v-for="(item ,index) in tipImg" :key="index" :to="item.id"><img :src="item.outImg" alt=""/></nuxt-link>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="fr" v-html="item.content" v-for="(item,index) in caseList" :key="index" >
          {{item.content}}

        </div>
      </div>
      <div class="page" v-for="(item,index) in caseList" :key="index" >
        <!--  <span @click="prevPage(val)"></span>-->
        <span tag="span"  @click="last()">上一个案例</span>
        <nuxt-link tag="span" :to="{path:'/case/'+item.classId}">返回列表</nuxt-link>
        <span tag="span"  @click="next()">下一个案例</span>

      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BannerSmall from '../../components/banner-small.vue'
/*  import axios from '../../plugins/axios.js'*/
  import qs from 'qs'
  import axios from 'axios'
  export default {
    components: {
      BannerSmall},
    data(){
      return{
        title: '',
        keyWords:'cs',
        description:'cs',
        banner:{
          h3:'案例详情',
          p:'案例详情包含产品背景介绍、功能介绍、案例页面查看案例名称等 ',
          url:require('../../static/images/case/case-ban.png')
        },
        caseList:[],
        currentPage: 1,
        pageSize: 5,
        pageCount: 0,
        aid:this.$route.params.id,
        netName:'牛金锁',
        net:'www.njs168.com',
        navList:[
          {
            navTxt:'股票配资交易系统',
            href:'/case/charge'
          },
          {
            navTxt:'股票资管系统',
            href:'/case/manage'
          },
          {
            navTxt:'股票点买系统',
            href:'/case/buy'
          },
          {
            navTxt:'MOM操盘平台',
            href:'/case/mom'
          }
        ],
        tipImg:[
          /*{
            src:require('../static/images/index/case_gltx.png')
          },
          {
            src:require('../static/images/index/case_bnb.png')
          },
          {
            src:require('../static/images/index/case_jyx.png')
          },
          {
            src:require('../static/images/index/case_ngj.png')
          },
          {
            src:require('../static/images/index/case_njs.png')
          },
          {
            src:require('../static/images/index/case_zscp.png')
          },
          {
            src:require('../static/images/index/case_znzx.png')
          }*/
        ],
        prevUrl: '/case',
        backUrl: '/case',
        nextUrl: '/case/charge',
        bqId:this.$route.params.id,
        caseTitle:'',
        caseOutline:'',

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
    async asyncData ({ params }) {
      let { data } = await axios.post('https://apiweb.ziniusoft.com/Main/Api/News',qs.stringify({currentPage: 1, pageSize: 5, pageCount: 0,id:params.id}))
      /*console.log(params.id);*/
      return { caseList: data.data}
    },
    methods:{
        seo(){
          for(let i=0;i<this.caseList.length;i++){
            this.title = this.caseList[i].seoTitle
            this.keyWords = this.caseList[i].seoKeyWords
            this.description = this.caseList[i].seoDescription
            this.caseTitle = this.caseList[i].title
            this.caseOutline = this.caseList[i].outline
          }
        },
      getDetail(){
        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News',{
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          pageCount: this.pageCount,
          id:this.aid})
          .then((res)=>{
            this.caseList = res.data
          })
      },
      getTip(){
          this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News',{
            currentPage: this.currentPage,
            pageSize: this.pageSize,
            pageCount: this.pageCount,
            bqName:"案例推荐"})
            .then((res)=>{
              this.tipImg=res.data

            })
      },

      last(){
        this.$router.push({path: '/caseDetail/'+this.nextPage})
        this.aid=this.nextPage
        this.change()
      },
      next(){
        this.$router.push({path: '/caseDetail/'+this.lastPage})
        this.aid=this.lastPage
        this.change()
      },
      change(){
        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/NewsDetails',{id:this.aid})
          .then((res)=>{
            if(res.last !==""){
              this.lastPage=res.last
            }else{
              return
            }
            if(res.next !==""){
              this.nextPage=res.next
            }else{
              return
            }
          })
      },
    },
    watch: {
      "$route": function(id){
        //路由变化会触发

        this.bqId=this.$route.params.id;

        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News',{
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          pageCount: this.pageCount,
          id:this.aid})
          .then((res)=>{
            this.caseList = res.data
            this.seo()
          })

        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News',{
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          pageCount: this.pageCount,
          bqName:"案例推荐",
          id:this.bqId
        })
          .then((res)=>{
            this.caseList = res.data;
            this.seo()
          })
        this.getTip()

      }
    },
    created(){
      this.seo()
      this.change()
      /* this.getData()*/
     /* this.getDetail()*/
      this.getTip()

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .font6{color:#666!important;}
  .case-detail{
  .inner{padding-top:42px;overflow: hidden;}
  .fl{width:290px;
  li{background: #eee;margin-bottom: 20px;font-size: 16px;
  .content{padding:15px;box-sizing: border-box;}
  h3{height:56px;line-height: 56px;color:#fff;background: #4c9bd6;padding-left:15px;font-size: 20px}
  p{line-height: 30px;font-size: 16px;color:#999}
  }
  li.other{
  p{line-height: 26px;color:#666}
  p:hover{color:#4C9BD6}
  }
  }
  .recommend{
  li{margin:0;border:1px solid #ccc;padding:5px;margin-bottom: 20px;
  img{display: inline-block;width:246px;height:108px}
  }
  }
  .fr{
   }
  }
  .page{text-align: center;
  span{width:162px;height: 60px;line-height: 60px;border:1px solid #ccc;text-align: center;display: inline-block;margin:36px 5px 30px 0;font-size: 16px;color:#010101}
  }
  .page span:hover{border-color:#4C9BD6;color:#4C9BD6}

</style>
