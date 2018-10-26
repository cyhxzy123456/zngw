<template>
    <div class="content_main">

      <Banner :slides="slides"></Banner>
      <div class="service">
        <div class="wrap">
          <div class="fl">
            <h3>提供服务:</h3>
            <p>股票配资系统建设 、资源整合

              风险把控 、运营指导、技术支持
            </p>
            <nuxt-link :to="{path:'/service'}" tag="a">查看详情</nuxt-link>
          </div>
          <div class="fr">
            <p>
              <img :src="weixin_kf" alt="客服微信咨询号">
              <span>客服微信咨询号</span>
            </p>

            <p>
              <img :src="qq_kf" alt="QQ咨询">
              <span>QQ咨询</span>
            </p>
          </div>
        </div>
      </div>
      <div class="solutions">
        <div class="wrap">
          <ul class="solutions_top">
            <li>
              <div class="tit">
                <h3>股票配资四大解决方案</h3>
                <p> Four solutions for stock allocation</p>
              </div>
            </li>
            <li>
              <a href="/s-manage">
                <img :src="solut1" alt="solut_1">
                <span>股票操盘资管系统</span>
              </a>
            </li>
          </ul>
          <ul class="solutions_bot">
            <li>
              <a href="/s-mom">
                <img :src="solut2" alt="solut_2">
                <span>mom操盘平台</span>
              </a>
            </li>
            <li>
              <a href="/s-buy">
                <img :src="solut3" alt="solut_3">
                <span>股票点买系统</span>
              </a>
            </li>
            <li>
              <a href="/s-charge">
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
           <h3>合作伙伴</h3>
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
            <h3>新闻动态</h3>
          </div>
          <div class="inner">
            <ul>
              <li v-for="(news,index) in newsList" :class="{last:(index+1)%3===0}" :key="index">
                <img v-bind:src="news.src" alt="">
                <h3>{{news.h3}}</h3>
                <p><span class="last-new fl">{{news.p1}}</span ><span class="date fr">2017/9/6</span></p>
                <p><span class="last-new fl">{{news.p2}}</span ><span class="date fr">2017/9/6</span></p>
                <p><span class="last-new fl">{{news.p3}}</span ><span class="date fr">2017/9/6</span></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">

import Banner from '../components/banner-slider.vue'
import CaseSlider from '../components/case-slider.vue'

export default {
  components: { Banner,CaseSlider},
  data () {
    return {
      nowIndex:0,
      show:true,
      speed: 3000,
      weixin_kf:require('../static/images/index/weixin_kf.png'),
      qq_kf:require('../static/images/index/qq_kf.png'),
      solut1:require('../static/images/index/solut_1.png'),
      solut2:require('../static/images/index/solut_2.png'),
      solut3:require('../static/images/index/solut_3.png'),
      solut4:require('../static/images/index/solut_4.png'),
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
            src: require('static/images/index/case_xncl.png')
          },

          {
            txt: '牛金所 http://www.njs168.net',
            src:require('../static/images/index/case_njs.png')
          },
        ],

        //charge

       [ {
         txt: '牛管家 https://www.ngj518.com/',
         src: require('../static/images/index/case_ngj.png')
       },
         {
           txt: '涨声操盘 http://www.zhangsheng666.com',
           src: require('../static/images/index/case_zscp.png')
         }],
        [{
          txt: '子牛在线 http://www.zn1788.com',
          src: require('../static/images/index/case_znzx.png')
        },
          {
            txt: '股昇网 https://www.gushengwang.com/',
            src: require('../static/images/index/case_gsw.png')
          }],
        [{
          txt: '股临天下 https://www.gltx1688.com/',
          src: require('../static/images/index/case_gltx.png')
        },
          {
            txt: '交易秀 https://www.jiaoyixiu.com/',
            src:require( '../static/images/index/case_jyx.png')
          }],

        //mom

        [{
          txt: '赤禹操盘 http://www.cyjr178.com',
          src:require( '../static/images/index/case_cycp.png')
        },
          {
            txt: '亿富资本&nbsp;&nbsp;&nbsp;&nbsp;https://www.lingmaocp.com',
            src: require('../static/images/index/case_yfzb.png')
          }],
        [
          {
            txt: '大丰收 http://www.dfscp98.com',
            src: require('../static/images/index/case_dfs.png')
          },
          {
            txt: '淘财网 http://www.taocai360.com',
            src: require('../static/images/index/case_tcw.png')
          },
        ],
        [{
          txt: '鑫配网 https://www.ryw168.com/',
          src:require( '../static/images/index/case_xpw.png')
        },
          {
            txt: '资本立方 http://www.zblf178.com',
            src: require('../static/images/index/case_zblf.png')
          }],

      //点买

        [{
          txt: '天添赢 http://www.tiantianying188.com',
          src: require('../static/images/index/case_tty.png')
        },

          {
            txt: '云跟投 http://www.ygt999.com',
            src: require('../static/images/index/case_ygt.png')
          }],
        [{
          txt: '博牛宝 http://www.bnb18.com/',
          src:require( '../static/images/index/case_bnb.png')
        },
          {
            txt: '谋略天下 http://www.winwinwin168.com/',
            src: require('../static/images/index/case_mltx.png')
          }],
        [{
          txt: '钱生钱 http://www.qsq98.com',
          src: require('../static/images/index/case_qsq.png')
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
          imgSrc: require('../static/images/index/partner-7.png'),
          id:'partner7'
        },
        {
          imgSrc: require('../static/images/index/partner-8.png'),
          id:'partner8'
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

      ],
      newsList:[
        {
          src:require('../static/images/index/new_01.png'),
          h3:'疑问解答',
          p1:'股票配资现在的市场环境好做吗？',
          p2:'股票配资现在的市场环境好做吗？',
          p3:'股票配资现在的市场环境好做吗？'
        },
        {
          src:require('../static/images/index/new_02.png'),
          h3:'最新热点',
          p1:'股票配资现在的市场环境好做吗？',
          p2:'股票配资现在的市场环境好做吗？',
          p3:'股票配资现在的市场环境好做吗？'
        },
        {
          src:require('../static/images/index/new_03.png'),
          h3:'公司资讯',
          p1:'股票配资现在的市场环境好做吗？',
          p2:'股票配资现在的市场环境好做吗？',
          p3:'股票配资现在的市场环境好做吗？'
        },
        {
          src:require('../static/images/index/new_04.png'),
          h3:'行业资讯',
          p1:'股票配资现在的市场环境好做吗？',
          p2:'股票配资现在的市场环境好做吗？',
          p3:'股票配资现在的市场环境好做吗？'
        },
        {
          src:require('../static/images/index/new_05.png'),
          h3:'运营知识',
          p1:'股票配资现在的市场环境好做吗？',
          p2:'股票配资现在的市场环境好做吗？',
          p3:'股票配资现在的市场环境好做吗？'
        },
        {
          src:require('../static/images/index/new_06.png'),
          h3:'投资方向',
          p1:'股票配资现在的市场环境好做吗？',
          p2:'股票配资现在的市场环境好做吗？',
          p3:'股票配资现在的市场环境好做吗？'
        }

      ],
      timer:null
    }
  },

  methods: {


  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .service{background:url("../static/images/index/service_bg.png") no-repeat top left;overflow:hidden;margin-top:30px;background-size: 58% 100%;}
  .service .fr p{text-align: center;float:left;margin-left:30px}
  .service .fr p img{display: block;max-width: 198px;max-height: 198px;margin-bottom: 8px}
  .service .fr p span{text-align: center}
  .service .fl{padding:55px 0;position: relative;width:55%}
  .service .fl h3{    font-weight: bold;color:#4c9bd6;font-size: 24px;padding-bottom: 25px;}
  .service .fl p{    font-weight: bold;color:#4c9bd6;font-size: 20px;width: 290px;  line-height: 30px;}
  .service .fl a{text-align: center;display: block;width:140px;height: 36px;background: #4C9BD6;border-radius: 5px;line-height: 36px;position: absolute;color:#fff;top:58%;right:50px}
  .service .fl a:hover{box-shadow: 0 1px 3px 2px grey}
  .solutions{padding:48px 0 43px;color:#fff}
  .solutions ul{display: flex;justify-content: space-between}
  .solutions li{height: 284px;position: relative}
  .solutions .solutions_top{padding-bottom: 46px}
  .solutions .solutions_top li{width:45%;}
  .solutions  li span{font-size: 20px;text-align: center;color:#fff;display:block;width:100%;position: absolute;bottom: 0;background: rgba(0,0,0,0.4);height:60px;line-height: 60px;}
  .solutions .solutions_top li:first-child{border:4px solid #bfbfbf;position: relative}
  .solutions .solutions_top .tit{position: absolute;color:#fff;padding:15px 20px 10px;background:#4c9bd6;max-width:367px;right:-70px;top:99px}
  .solutions .solutions_top .tit h3{font-size: 30px;color:#fff;padding-bottom: 10px}
  .solutions .solutions_top .tit p{font-size: 14px;color:#fff;}
  .title{padding:40px 0;text-align: center}
  .title h3{padding-bottom: 15px;color:#4c9bd6;border-bottom: 4px solid #4c9bd6;width:260px;margin:0 auto;font-size: 30px}
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
    li{width:179px;height:70px;border:1px solid #eee;margin:0 25px 30px 0;float:left;  text-align: center;  box-sizing: border-box;text-align: center;
    img{    max-height: 50px;  margin-top: 10px;}
  }
  }
  .news{overflow: hidden;
    li:nth-child(3n+3){margin-right:0}
    li{overflow: hidden;height: 290px;padding:15px;border:1px solid #eee;margin-right: 28px;width:31.77%;float:left;color:#707070;box-sizing: border-box;margin-bottom: 40px;
      h3{font-size: 20px;padding:20px 0 10px;color:#333}
      p{font-size: 16px;line-height: 22px;}
      img{display: block;max-width:100%}
      span{display: inline-block;cursor: pointer}
      .last-new{display: inline-block;width:233px!important;overflow: hidden;white-space: nowrap;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;}
    }
  }

</style>
