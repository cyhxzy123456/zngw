<template>
  <div>
    <div class="header">
      <div class="wrap">
        <div class="fl">
          <img :src="logo" alt="">
        </div>
        <ul class="header-list fr">
          <nuxt-link tag="li" exact-active-class="active" to="/">首页</nuxt-link>
          <nuxt-link tag="li" exact-active-class="active" to="/solutions" @mouseover.native="show()"
                     @mouseout.native="hide()">解决方案</nuxt-link>
          <nuxt-link tag="li" exact-active-class="active" to="/case/charge">案例</nuxt-link>
          <nuxt-link tag="li" exact-active-class="active" to="/service">服务</nuxt-link>
          <nuxt-link tag="li" exact-active-class="active" to="/news/solve">新闻</nuxt-link>
          <nuxt-link tag="li" exact-active-class="active" to="/about">关于紫牛</nuxt-link>
          <li class="slide-down" v-show="showSlide"  @mouseover="show()" @mouseout="hide()">
            <nuxt-link tag="p" exact-active-class="active" to="/solution/charge">股票配资系统</nuxt-link>
            <nuxt-link tag="p" exact-active-class="active" to="/solution/manage">股票资管系统</nuxt-link>
            <nuxt-link tag="p" exact-active-class="active" to="/solution/buy">股票点买系统</nuxt-link>
            <nuxt-link tag="p" exact-active-class="active" to="/solution/mom">MOM操盘系统</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <nuxt/>
    <div class="footer">
      <div class="wrap">
        <div class="fl">
          <ul>
            <li>
              <h3>解决方案</h3>
              <nuxt-link tag="p" v-for="(item,index) in solveList" :key="index" :to="item.link">
                {{item.txt}}</nuxt-link>
            </li>
            <li>
              <h3><nuxt-link :to="'/service'">服务</nuxt-link></h3>
            </li>
            <li>
              <h3>新闻资讯</h3>
              <nuxt-link tag="p" v-for="(item,index) in newsList" :key="index"  :to="item.href">
                {{item.txt}}</nuxt-link>
            </li>
            <li>
              <h3><nuxt-link :to="'/about'">关于紫牛</nuxt-link></h3>
            </li>
          </ul>
        </div>
        <div class="fr">
          <ul>
            <li>
              <h3>服务热线</h3>
              <b>028-83579300</b>
              <a href="http://wpa.qq.com/msgrd?v=3&uin=3157441071&site=qq&menu=yes" rel="nofollow"
                 target="_blank"><img :src="qq_kf" alt="qq" class="qq"></a>
            </li>
            <li class="code">
              <img :src="contactImg" alt="">
              <span>扫一扫联系我们</span>
            </li>
            <li class="code">
              <img :src="gzhImg" alt="">
              <span>扫一扫关注我们</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="frendLink">
        <div class="wrap">
          <span><a href="http://www.aabbshop.com/">{{title}}</a></span>
          <span>友情链接 : </span><span v-for="(item,index) in linkList" :key="index"><a
          :href="item.link">{{item.title}}</a></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  /* import Footer from '../components/footer/footer.vue'
   import Head from '../components/header/header.vue'*/
  import qs from 'qs'
  import axios from 'axios'

  export default {
    /*  components:{Footer,Head},*/
    data(){
      return{
        linkList:[],
        logo:require('../static/images/index/logo.png'),
        showSlide:false,
        nowIndex: 0,
        qq_kf:require('../static/images/index/qq_kf.png'),
        solveList:[
          {
            txt:'股票配资交易系统',
            link:'/solution/charge'
          },
          {
            txt:'股票资管系统',
            link:'/solution/manage'
          },
          {
            txt:'股票点买系统',
            link:'/solution/buy'
          },
          {
            txt:'MOM操盘平台',
            link:'/solution/mom'
          }
        ],
        newsList:[
          {
            txt:'疑问解答',
            href:'/news/solve'
          },
          {
            txt:'最新热点',
            href:'/news/hot'
          },
          {
            txt:'公司资讯',
            href:'/news/information'
          },
          {
            txt:'行业资讯',
            href:'/news/trade'
          },
          {
            txt:'运营知识',
            href:'/news/run'
          },
          {
            txt:'投资方向',
            href:'/news/invest'
          }
        ],
        currentPage: 1,
        pageSize: 5,
        pageCount: 0,
        title:'',
        contactImg:require('../static/images/about/contact.jpg'),
        gzhImg:require('../static/images/about/gzh.jpg')
      }
    },

    methods:{
      show (){
        this.showSlide = true
      },
      hide() {
        this.showSlide = false
      },
      select (index) {
        this.nowIndex = index
      },
      getLink(){
        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/FriendshipLink',{currentPage: 1,
          pageSize: 1000,
          pageCount: 0,})
          .then((res)=>{
            this.linkList = res.data

          })
          .catch((err)=>{
            console.log(msg)
          })
      }
    },
    created(){
      this.getLink()
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
  .header{height:85px;line-height: 85px;font-size: 18px;text-align: center;color:#fff;position:
    fixed;top:0;width:100%;z-index: 1000;  background: #fff;
  .fl{width:315px;margin-top:6px;
  img{  display: block;width:100%;margin-top:10px}
  }
  .header-list{position: relative;}
  .header-list li{margin-left:64px;float:left;color:#666 ;cursor: pointer }
  .header-list li.active{color:#fe0126}

  .slide-down{position: absolute;top:60px;left:42px;z-index: 10000;padding-bottom:15px;background:
    #fff;width:190px;
  p{line-height: 30px;font-size: 16px;color:#666;}
  p:hover{color:#fe0126;}
  }
  }
  .footer{width:100%;padding:18px 0 24px;background: #313131;overflow:hidden;    border-bottom: 1px solid
  #fff;
  .wrap{overflow: hidden ;margin:0 auto }
  h3{font-weight: bold;padding-bottom: 16px;font-size: 17px;
  a{color:#9a9a9a;text-decoration: none}
  }
  h3.serv{padding-right: 88px}
  .fl{width:50%;
  li{font-size:16px;float:left;width:25%;color:#9a9a9a}
  li:nth-child(2){padding-left:10px;box-sizing: border-box}
  p{line-height: 25px;cursor: pointer}
  }
  .fr{width:50%;
  img{max-width:100%}
  li{float:left;color:#9a9a9a;margin-left:34px}
  .code img{display: block;width:150px;height:150px;background: #fff}
  .code span{font-size: 12px;padding-top:5px;text-align: center;display: block}
  b{font-size:25px;color:#fff;padding:0 0 18px;display: block}
  .qq{width:198px}
  }
  .frendLink{margin-top:10px;border-top:1px solid #fff;
  a,span{color:#959595;font-size: 12px;padding-right: 5px;}
  }
  }
</style>

