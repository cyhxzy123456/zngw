<template>
  <div class="content_main">
    <banner-small :banner="banner">
      <a href="http://wpa.qq.com/msgrd?v=3&uin=576847565&site=qq&menu=yes" target="_blank" class="test" slot="banner-bth-blue">联系我们</a>
    </banner-small>
    <div class="wrap">
      <div class="news-nav">
        <ul>
          <nuxt-link tag="li"  v-for="(item,index) in newsNav" :key="index"  :to="item.id" active-class="active">{{item.className}}</nuxt-link>
        </ul>
      </div>

      <nuxt-child></nuxt-child>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import BannerSmall from '../components/banner-small.vue'
  import axios from '../plugins/axios.js'
  /*  import qs from 'qs';*/
  export default {
    components:{BannerSmall},
    data(){
      return{
        banner: {
          h3:'股票配资新闻中心',
          p:'为互联网金融从业人士、股票投资者、股票配资者提供新视野、新动态、新资讯。',
          url:require('../static/images/solve/solve-banner.png')
        },
        newsNav:[
          {className:'疑问解答',id:'solve'},
          {className:'最新热点',id:'hot'},
          {className:'公司资讯',id:'information'},
          {className:'行业知识',id:'trade'},
          {className:'运营知识',id:'run'},
          {className:'投资方向',id:'invest'}
        ],
        data:{
          currentPage: "1",
          pageSize: "10",
          pageCount: "0",
        },
      }
    },
    /* async asyncData ({ params }) {
     let { data } = await axios.post(`http://apiweb.ziniusoft.com/Main/Api/NewsClass`)
     return { newsNav: data}
     }*/
 /*   async asyncData () {
      return this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/NewsClass',this.data).then(res => {
        this.newsNav = res.data.slice(0,6)
      })
    },*/
   /* methods:{

      getData(){
        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/NewsClass',this.data)
          .then((res)=>{

            this.newsNav = res.data.slice(0,6)
          })
      },

    },
    created(){
      this.getData()

    }*/
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .news-nav{margin:50px 0 32px;overflow: hidden;
  li{width:132px;height:55px;line-height: 55px;float:left;background: #eee;color:#666;font-size:20px;text-align: center;cursor: pointer}
   li.active{color:#fff;background: #4c9bd6;}
  }
</style>
