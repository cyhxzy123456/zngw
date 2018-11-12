<template>
    <div class="content_main">

      <Banner :slides="slides"></Banner>
      <div class="service">
        <div class="wrap">
          <div class="fl">
            <h1 class="fw">提供服务:</h1>
            <h1 class="fwp">股票配资系统建设 、资源整合

              风险把控 、运营指导、技术支持
            </h1>
            <nuxt-link :to="{path:'/service'}" tag="a">查看详情</nuxt-link>
          </div>
          <div class="fr">
            <div style="display: inline-block">
              <p>
                <img :src="weixin_kf" alt="客服微信咨询号">
              </p>
              <span>客服微信咨询号</span>
            </div>

           <div style="display: inline-block">
             <p>
               <a href="http://wpa.qq.com/msgrd?v=3&uin=576847565&site=qq&menu=yes" target="_blank"><img :src="qq_kf" alt="QQ咨询" class="qq-img"></a>
             </p>
             <span>QQ咨询</span>
           </div>
          </div>
        </div>
      </div>
      <div class="solutions">
        <div class="wrap">
          <ul class="solutions_top">
            <li>
              <div class="tit">
                <h2 class="fangan">股票配资四大解决方案</h2>
                <p> Four solutions for stock allocation</p>
              </div>
            </li>
            <li>
              <a href="/solution/manage">
                <img :src="solut1" alt="solut_1">
                <span>股票操盘资管系统</span>
              </a>
            </li>
          </ul>
          <ul class="solutions_bot">
            <li>
              <a href="/solution/mom">
                <img :src="solut2" alt="solut_2">
                <span>mom操盘平台</span>
              </a>
            </li>
            <li>
              <a href="/solution/buy">
                <img :src="solut3" alt="solut_3">
                <span>股票点买系统</span>
              </a>
            </li>
            <li>
              <a href="/solution/charge">
                <img :src="solut4" alt="solut_4">
                <span>股票配资交易系统</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="case">
        <div class="wrap">
          <div class="title">
            <h3>经典案例展示</h3>
          </div>

          <div class="case-main">
            <case-slider :caseSlides="caseList"></case-slider>

          </div>
          <div class="ask"><a href="#">立即咨询</a></div>
        </div>
       </div>
     <div class="partner">
       <div class="wrap">
         <div class="title">
           <h4 class="huoban">合作伙伴</h4>
         </div>
         <div class="inner">
           <ul>
             <li v-for="(partner,index) in partnerList" :key="index" :class="{last:(index+1)%6==0}">
               <img v-bind:src="partner.imgSrc" alt="">
             </li>
           </ul>
         </div>
       </div>
     </div>
      <div class="news">
        <div class="wrap">
          <div class="title">
            <h5>新闻动态</h5>
          </div>
          <div class="inner">
            <index-news :indexList="newsList1" :newsImg="newsImg1" name="疑问解答 ">
               <slot name="title"></slot>
            </index-news>
            <index-news :indexList="newsList2" :newsImg="newsImg2" name="最新热点 ">
              <slot name="title"></slot>
            </index-news>
            <index-news :indexList="newsList3" :newsImg="newsImg3" name="公司资讯 " class="last">
              <slot name="title"></slot>
            </index-news>
            <index-news :indexList="newsList4" :newsImg="newsImg4" name="行业资讯 ">
              <slot name="title"></slot>
            </index-news>
            <index-news :indexList="newsList5" :newsImg="newsImg5" name="运营知识 ">
              <slot name="title"></slot>
            </index-news>
            <index-news :indexList="newsList6" :newsImg="newsImg6" name="投资方向 " class="last">
              <slot name="title"></slot>
            </index-news>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">

import Banner from '../components/banner-slider.vue'
import CaseSlider from '../components/case-slider.vue'
import axios from '../plugins/axios'
import IndexNews from '../components/indexNews.vue'
export default {
  components: { Banner,CaseSlider,IndexNews},
  data () {
    return {
      head () {
        return {
          title: "股票配资系统_配资软件开发【紫牛软件】互联网配资交易软件开发公司",
          meta: [
            { hid: 'keyWords',name:'keyWords', content:"配资系统,配资软件,股票配资系统,股票配资软件,股票配资软件开发,股票配资系统开发"},
            { hid: 'description',name:'description', content:"成都紫牛软件致力于为证券交易、运营、金融平台提供互联网解决方案，主要提供股票配资系统开发、股票配资软件等金融类软件开发服务，为金融企业发展赋能。"}
          ]
        }
      },
      nowIndex:0,
      show:true,
      speed: 3000,
      weixin_kf:require('../static/images/about/contact1.jpg'),
      qq_kf:require('../static/images/index/qq-img.png'),
      solut1:require('../static/images/index/solut_1.png'),
      solut2:require('../static/images/index/solut_2.png'),
      solut3:require('../static/images/index/solut_3.png'),
      solut4:require('../static/images/index/solut_4.png'),
      newsImg1:require('../static/images/index/new_01.png'),
      newsImg2:require('../static/images/index/new_02.png'),
      newsImg3:require('../static/images/index/new_03.png'),
      newsImg4:require('../static/images/index/new_04.png'),
      newsImg5:require('../static/images/index/new_05.png'),
      newsImg6:require('../static/images/index/new_06.png'),
      slides: [
        {
          src: require('../assets/images/banner/slider1.png'),
          href: '/'
        },
        {
          src: require('../assets/images/banner/slider2.png'),
          href: '/'
        },
        {
          src: require('../assets/images/banner/slider2.png'),
          href: '/'
        },
        {
          src: require('../assets/images/banner/slider2.png'),
          href: '/'
        }
      ],
      caseList: [
        [
          {
            txt: '析牛策略 http://www.ppxrv.com',
            src: require('static/images/index/case_xncl.png'),
            href:'/caseDetail/181024153006900'
          },

          {
            txt: '牛金所 http://www.njs168.net',
            src:require('../static/images/index/case_njs.png'),
            href:'/caseDetail/181024153006900'

          },
        ],

        //charge

       [ {
         txt: '牛管家 https://www.ngj518.com/',
         src: require('../static/images/index/case_ngj.png'),
         href:'/caseDetail/181024153006900'
       },
         {
           txt: '涨声操盘 http://www.zhangsheng666.com',
           src: require('../static/images/index/case_zscp.png'),
           href:'/caseDetail/181024153006900'
         }],
        [{
          txt: '子牛在线 http://www.zn1788.com',
          src: require('../static/images/index/case_znzx.png'),
          href:'/caseDetail/181024153006900'
        },
          {
            txt: '股昇网 https://www.gushengwang.com/',
            src: require('../static/images/index/case_gsw.png'),
            href:'/caseDetail/181024153006900'
          }],
        [{
          txt: '股临天下 https://www.gltx1688.com/',
          src: require('../static/images/index/case_gltx.png'),
          href:'/caseDetail/181024153006900'
        },
          {
            txt: '交易秀 https://www.jiaoyixiu.com/',
            src:require( '../static/images/index/case_jyx.png'),
            href:'/caseDetail/181024153006900'
          }],

        //mom

        [{
          txt: '赤禹操盘 http://www.cyjr178.com',
          src:require( '../static/images/index/case_cycp.png'),
          href:'/caseDetail/181024153006900'
        },
          {
            txt: '亿富资本&nbsp;&nbsp;&nbsp;&nbsp;https://www.lingmaocp.com',
            src: require('../static/images/index/case_yfzb.png'),
            href:'/caseDetail/181024153006900'
          }],
        [
          {
            txt: '大丰收 http://www.dfscp98.com',
            src: require('../static/images/index/case_dfs.png'),
            href:'/caseDetail/181024153006900'
          },
          {
            txt: '淘财网 http://www.taocai360.com',
            src: require('../static/images/index/case_tcw.png'),
            href:'/caseDetail/181024153006900'
          },
        ],
        [{
          txt: '鑫配网 https://www.ryw168.com/',
          src:require( '../static/images/index/case_xpw.png'),
          href:'/caseDetail/181024153006900'
        },
          {
            txt: '资本立方 http://www.zblf178.com',
            src: require('../static/images/index/case_zblf.png'),
            href:'/caseDetail/181024153006900'
          }],

      //点买

        [{
          txt: '天添赢 http://www.tiantianying188.com',
          src: require('../static/images/index/case_tty.png'),
          href:'/caseDetail/181024153006900'
        },

          {
            txt: '云跟投 http://www.ygt999.com',
            src: require('../static/images/index/case_ygt.png'),
            href:'/caseDetail/181024153006900'
          }],
        [{
          txt: '博牛宝 http://www.bnb18.com/',
          src:require( '../static/images/index/case_bnb.png'),
          href:'/caseDetail/181024153006900'
        },
          {
            txt: '谋略天下 http://www.winwinwin168.com/',
            src: require('../static/images/index/case_mltx.png'),
            href:'/caseDetail/181024153006900'
          }],
        [{
          txt: '钱生钱 http://www.qsq98.com',
          src: require('../static/images/index/case_qsq.png'),
          href:'/caseDetail/181024153006900'
        }]

      ],
      partnerList:[
        {
          imgSrc:require('../static/images/index/partner-1.png'),
          id:'partner1'
        },
        {
          imgSrc: require('../static/images/index/partner-2.png'),
          id:'partner2'
        },
        {
          imgSrc: require('../static/images/index/partner-3.png'),
          id:'partner3'
        },
        {
          imgSrc: require('../static/images/index/partner-4.png'),
          id:'partner4'
        },
        {
          imgSrc: require('../static/images/index/partner-5.png'),
          id:'partner5'
        },
        {
          imgSrc: require('../static/images/index/partner-6.png'),
          id:'partner6'
        },

        {
          imgSrc: require('../static/images/index/partner-8.png'),
          id:'partner8'
        },
        {
          imgSrc: require('../static/images/index/partner-7.png'),
          id:'partner7'
        },
        {
          imgSrc: require('../static/images/index/partner-9.png'),
          id:'partner9'
        },
        {
          imgSrc: require('../static/images/index/partner-10.png'),
          id:'partner10'
        },
        {
          imgSrc: require('../static/images/index/partner-11.png'),
          id:'partner11'
        },
        {
          imgSrc: require('../static/images/index/partner-12.png'),
          id:'partner12'
        },
        {
          imgSrc: require('../static/images/index/partner-14.png'),
          id:'partner14'
        },
        {
          imgSrc: require('../static/images/index/partner-20.png'),
          id:'partner20'
        },
        {
          imgSrc: require('../static/images/index/partner-21.png'),
          id:'partner21'
        },
        {
          imgSrc: require('../static/images/index/partner-16.png'),
          id:'partner16'
        },
        {
          imgSrc: require('../static/images/index/partner-17.png'),
          id:'partner17'
        },
        {
          imgSrc: require('../static/images/index/partner-18.png'),
          id:'partner18'
        },
        {
          imgSrc: require('../static/images/index/partner-24.png'),
          id:'partner24'
        },
        {
          imgSrc:require('../static/images/index/partner-13.png'),
          id:'partner14'
        },

        {
          imgSrc: require('../static/images/index/partner-15.png'),
          id:'partner15'
        },

        {
          imgSrc: require('../static/images/index/partner-22.png'),
          id:'partner22'
        },
        {
          imgSrc: require('../static/images/index/partner-23.png'),
          id:'partner23'
        },
        {
          imgSrc: require('../static/images/index/partner-19.png'),
          id:'partner19'
        },


      ],
      newsList1:[],
      newsList2:[],
      newsList3:[],
      newsList4:[],
      newsList5:[],
      newsList6:[],
      timer:null,
      currentPage: 1,
      pageSize: 5,
      pageCount: 0,
      classId:""
    }
  },
  methods: {
    getData11(){
      /* console.log(this.id)*/
      this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News', {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        pageCount: this.pageCount,
        classId:"solve"
      })
        .then((res)=>{
          this.newsList1 = res.data
        })
    },
    getData12(){
      /* console.log(this.id)*/
      this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News', {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        pageCount: this.pageCount,
        classId:"hot"
      })
        .then((res)=>{
          this.newsList2 = res.data
        })
    },
    getData13(){
      /* console.log(this.id)*/
      this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News', {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        pageCount: this.pageCount,
        classId:"information"
      })
        .then((res)=>{
          this.newsList3 = res.data
        })
    },
    getData14(){
      /* console.log(this.id)*/
      this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News', {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        pageCount: this.pageCount,
        classId:"trade"
      })
        .then((res)=>{
          this.newsList4 = res.data
        })
    },
    getData15(){
      /* console.log(this.id)*/
      this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News', {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        pageCount: this.pageCount,
        classId:"run"
      })
        .then((res)=>{
          this.newsList5 = res.data
        })
    },
    getData16(){
      /* console.log(this.id)*/
      this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/News', {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        pageCount: this.pageCount,
        classId:"invest"
      })
        .then((res)=>{
          this.newsList6 = res.data
        })
    },

  },
    created(){
      this.getData11()
      this.getData12()
      this.getData13()
      this.getData14()
      this.getData15()
      this.getData16()
    }


}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .service{background:url("../static/images/index/service_bg.png") no-repeat top left;overflow:hidden;margin-top:30px;background-size: 58% 100%;}
  .service .fr p{text-align: center;float:left;margin-left:30px;box-shadow: 0 2px 10px 3px rgba(0, 0, 0, 0.15);  width: 198px;  height: 198px;  padding: 15px;  margin-top: 5px;
  margin-bottom: 12px;border-radius: 20px}
  .service .fr p img{display: block;max-width: 165px;max-height: 165px;margin-bottom: 8px;    margin: 0 auto;}
  .service .fr p img.qq-img{padding-top:10px}
  .service .fr span{text-align: center;display: block}
  .service .fl{padding:55px 0;position: relative;width:55%}
  .service .fl .fw{    font-weight: bold;color:#4c9bd6;font-size: 24px;padding-bottom: 25px;}
  .service .fl .fwp{    font-weight: bold;color:#4c9bd6;font-size: 20px;width: 290px;  line-height: 30px;}
  .service .fl a{text-align: center;display: block;width:140px;height: 36px;background: #4C9BD6;border-radius: 5px;line-height: 36px;position: absolute;color:#fff;top:58%;right:50px}
  .service .fl a:hover{box-shadow: 0 1px 3px 2px grey}
  .solutions{padding:48px 0 43px;color:#fff}
  .solutions ul{display: flex;justify-content: space-between}
  .solutions li{height: 284px;position: relative}
  .solutions .solutions_top{padding-bottom: 46px}
  .solutions .solutions_top li{width:45%;}
  .solutions  li span{font-size: 20px;text-align: center;color:#fff;display:block;width:100%;position: absolute;bottom: 0;background: rgba(0,0,0,0.5);height:60px;line-height: 60px;}
  .solutions .solutions_top li:first-child{border:4px solid #bfbfbf;position: relative}
  .solutions .solutions_top .tit{position: absolute;color:#fff;padding:15px 20px 10px;background:#4c9bd6;max-width:367px;right:-70px;top:99px}
  .solutions .solutions_top .tit .fangan{font-size: 30px;color:#fff;padding-bottom: 10px}
  .solutions .solutions_top .tit p{font-size: 14px;color:#fff;}
  .title{padding:40px 0;text-align: center}
  .title h3,  .title h4,  .title h5{padding-bottom: 15px;color:#4c9bd6;border-bottom: 4px solid #4c9bd6;width:260px;margin:0 auto;font-size: 30px}
  .case{background:#eeeeee;padding-bottom: 40px;
    .case-main{;width:1200px;margin:0 auto;position: relative;height:500px}
    .bd{width:100%;position: absolute;padding-left: 15px;
      li{float:left}
    }
  .prev{position: absolute;width:54px;height:54px;background: url("../static/images/index/prev.png") no-repeat;border-radius: 50%;text-align: center;left:-65px;top:50%;margin-top:-27px}
  .next{position: absolute;width:54px;height:54px;background: url("../static/images/index/next.png") no-repeat;border-radius: 50%;text-align: center;right:-65px;top:50%;margin-top:-27px}

  li{position:relative;float:left;margin-right:30px;max-width:48%;box-shadow: 0 0 10px 4px rgba(0,0,0,0.1);
      img{display: inline-block;max-width:100%;height:500px;}
      span{position: absolute;bottom: 0;left:0;text-align:center; color:#fff;height:60px;line-height:60px;background: rgba(0,0,0,0.5);width:100%}
    }
  .slide-page{height:50px;
    background: #000;}
  .ask{width:300px;height:54px;line-height: 54px;border:1px solid #4c9bd6;color:#4c9bd6;text-align: center;margin:40px auto 0;border-radius:10px;
    a{color:#4c9bd6;font-size:24px}
    }
  }

  .partner{overflow: hidden;
  li.last{margin-right:0}
    li{width:179px;height:70px;line-height:70px;border:1px solid #eee;margin:0 25px 30px 0;float:left;  text-align: center;  box-sizing: border-box;text-align: center;
    img{    max-height: 50px;vertical-align: middle}
  }
  }
  .news{overflow: hidden;}
  .news >>> .list:nth-child(3n+3){margin-right:0!important;}
</style>
