<template>
    <div>
      <banner-small :banner="banner">
        <a href="http://wpa.qq.com/msgrd?v=3&uin=3157441071&site=qq&menu=yes" rel="nofollow" target="_blank" class="test" slot="banner-bth-blue">免费试用</a>
        <a href="http://wpa.qq.com/msgrd?v=3&uin=3157441071&site=qq&menu=yes" rel="nofollow" target="_blank" class="apply" slot="banner-bth-yellow">立即申请</a>
      </banner-small>
      <div class="part1 part">
        <div class="wrap">
          <div class="fl"><img :src="headImg.src" alt=""></div>
          <div class="fr">
            <ul>
              <li>
                <slot name="name"></slot>
                <slot name="describe"></slot>
              </li>
              <li>
                <h3>产品优势</h3>
                <slot name="ys1"></slot>
                <slot name="ys2"></slot>
                <slot name="ys3"></slot>
                <slot name="ys4"></slot>
              </li>
              <li>
                <h3>适用商家</h3>
                <slot name="fit1"></slot>
                <slot name="fit2"></slot>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--<div class="part2 part">-->
        <!--<div class="wrap">-->

          <!--<div class="tit">-->
            <!--<h3 >经典案例</h3>-->
            <!--<p >classical case</p>-->
          <!--</div>-->
          <!--<div class="inner">-->
            <!--<ul>-->
              <!--<li v-for="(img,index) in imgList"  :key="index" :class="{last:(index+1)%3==0}">-->
                <!--<img :src="img.src" alt="">-->
                <!--<span>{{img.txt}}</span>-->
              <!--</li>-->
            <!--</ul>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <div class="part3 part">
        <div class="wrap">
          <div class="tit">
            <h3 >支持券商</h3>
            <p >securities trader</p>
          </div>
          <div class="inner">
            <ul>
              <li v-for="(trader,index) in traders" :class="{last:(index+1)%5===0}" :key="index">
                <img :src="trader.imgSrc" alt="">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="part4 part">
        <div class="wrap">
          <div class="tit">
            <h3 >平台版本</h3>
            <p>platform Version</p>
          </div>
          <div class="inner">
            <ul>
              <li v-for="(item,index) in versionList" :key="index" :class="[item.id,{last:(index+1)%5===0}]">
                <p>{{item.txt}}</p>
              </li>
            </ul>
            <a href="http://wpa.qq.com/msgrd?v=3&uin=3157441071&site=qq&menu=yes" rel="nofollow" target="_blank" class="btn">立即咨询</a>
          </div>
        </div>
      </div>
      <div class="part5 part">
        <div class="wrap">
          <div class="tit">
            <h3 >运营环境</h3>
            <p >operating environment</p>
          </div>
          <div class="inner">
            <ul>
              <li v-for="(item,index) in operation" :key="index" :class="[item.id,{last:(index+1)%4===0}]">
                <p>{{item.txt}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="part6 part">
        <div class="wrap">
          <div class="tit">
            <h3 >架构功能</h3>
            <p >product function</p>
          </div>
          <div class="inner">
            <div class="head">
              <ul>
                <li class="fl">功能模块</li>
                <li class="fr">包含功能</li>
              </ul>
            </div>
            <div class="list">
              <ul class="fl">
                <li v-for="(item,index) in functionList" :key="index">{{item.txt}}</li>
              </ul>
              <ul class="fr">
                <li v-for="(item,index) in detailList" :key="index">{{item.txt}}</li>
              </ul>

            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
  import BannerSmall from '../components/banner-small.vue'
/*  import Tit from '../components/tit.vue'*/
    export default {
      components:{BannerSmall},
      props:{
          headImg:{},
          imgList:{
              type:Array
          }
      },
      data(){
          return{
            banner: {
              h3:'股票配资交易系统',
              p:'紫牛股票配资交易系统是一套引领当前股票配资市场的系统，涵盖了免息配资，按天、月配资，自动开户、自动风控等功能',
              url:require('../static/images/solve/solve-banner.png')
            },
            traders:[
              {
                  imgSrc:require('../static/images/solve/trader_01.png'),
              },
              {
                imgSrc:require('../static/images/solve/trader_02.png'),
              },
              {
                imgSrc:require('../static/images/solve/trader_03.png'),
              },
              {
                imgSrc:require('../static/images/solve/trader_04.png'),
              },
              {
                imgSrc:require('../static/images/solve/trader_05.png'),
              }
            ],
            versionList:[
              {
                id:'version1',
                txt:'电脑web端'
              },
              {
                id:'version2',
                txt:'手机wap版'
              },
              {
                id:'version3',
                txt:'微信公众平台版'
              },
              {
                id:'version4',
                txt:'ios版'
              },
              {
                id:'version5',
                txt:'Android版'
              },
            ],
            operation:[
              {
                id:'operation1',
                txt:'阿里云服务器'
              },
              {
                id:'operation2',
                txt:'Mysql数据库'
              },
              {
                id:'operation3',
                txt:'windows操作系统'
              },
              {
                id:'operation4',
                txt:'独享5M服务器带宽'
              },

            ],
            functionList:[
              {txt:'内容管理'},
              {txt:'用户管理'},
              {txt:'配资管理'},
              {txt:'基础信息'},
              {txt:'交易查询'},
              {txt:'代理商管理'},
              {txt:'代理管理'},
              {txt:'系统管理'},
              {txt:'系统用户'},
            ],
            detailList:[
              {txt:'广告管理、各种协议、帮助中心、文章分类、文章管理、留言管理'},
              {txt:'用户列表、用户资金、充值记录、短信记录、银行卡'},
              {txt:'操盘账户、风控管理、配资记录、配资付息、业务审核、操盘母账户'},
              {txt:'收费标准、产品管理、股票代码、参数设置、交易设置'},
              {txt:'当日委托、当日成交、历史委托、历史成交、持仓股票、风控日志、母账户买入手动分配、母账户卖出手动分配、佣金统计'},
              {txt:'代理管理列表、佣金明细、 代理提现、管理费返佣报表、代理资金统计'},
              {txt:'运营总报表、运营日报表、代理业绩表、员工总报表、员工业绩表、代理峰值报表（配资峰值）'},
              {txt:'系统设置、后台导航设置'},
              {txt:' 管理员管理、角色管理、管理日志'},
            ],
          }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .part{padding:48px 0 40px;width:100%;overflow: hidden}
.part1{border-bottom: 1px solid #eee;
  h3{    font-size: 24px;  color: #4c9bd6;padding: 20px 0}
  .h1{padding-top:0}
  p{line-height: 30px;font-size: 16px;}
  .head-txt{text-indent: 2em}
  .fl{width:50%;
    img{width:80%;margin-top:50px}
  }
  .fr{width:50%}
}
  .part2{border-bottom: 1px solid #eee;
  .inner{overflow: hidden;height: 260px}
    li{float:left;width:31.2%;height:256px;position: relative;margin:0 30px 30px 5px;box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);
      img{display: block;width:100%;height:100%;}
      span{position: absolute;bottom: 0;width:100%;height:32px;;line-height: 32px;color:#fff;text-align: center;background: rgba(0,0,0,0.6)}
    }
  }
  .part3{
    li{padding:30px 0;margin-right:3.75%;border:1px solid #eee;float:left;width:16.8%;text-align: center}
  }
  .part4{background: #eee;
      ul{overflow: hidden}
      li{padding-top:115px;float:left;width:145px;margin-right: 9.8%;
        p{padding:30px 0 45px;text-align: center;color:#707070;font-size: 20px}}
      li.version1{background: url("../static/images/solve/version_01.png") center top no-repeat}
      li.version2{background: url("../static/images/solve/version_02.png") center top no-repeat}
      li.version3{background: url("../static/images/solve/version_03.png") center top no-repeat}
      li.version4{background: url("../static/images/solve/version_04.png") center top no-repeat}
      li.version5{background: url("../static/images/solve/version_05.png") center top no-repeat}
  a{color:#4c9bd6;display: block;width:246px;height:50px;border:1px solid #4c9bd6;border-radius: 10px;background: #fff;text-align: center;line-height: 50px;font-size: 20px;margin:0 auto}
  }

  .part5{border-bottom: 1px solid #eee;
  ul{overflow: hidden}
  li{padding-top:145px;float:left;width:174px;margin-right: 14%;
  p{padding:30px 0 45px;text-align: center;color:#707070;font-size: 20px}
  }
  li.operation1{background: url("../static/images/solve/operation_01.png") center top no-repeat}
  li.operation2{background: url("../static/images/solve/operation_02.png") center top no-repeat}
  li.operation3{background: url("../static/images/solve/operation_03.png") center top no-repeat}
  li.operation4{background: url("../static/images/solve/operation_04.png") center top no-repeat}
  }
  .part6{
    .list{border-left:1px solid #4c9bd6;overflow: hidden}
    li{color:#707070;height:50px;line-height: 50px;text-align: center;box-sizing: border-box;border-right:1px solid #4c9bd6;border-bottom:1px solid #4c9bd6;}
    .fl{width:24%;font-size: 20px}
    .fr{width:76%;font-size: 16px}
    .head {background:#4c9bd6 ;overflow: hidden;
      li{color:#fff;font-size: 20px;border:0}
  }
  }
  .tit{position: relative;
  h3{color:#4c9bd6;font-size: 24px;position: absolute;    left: 53px;  top: 25px;}
  p{font-size: 22px;color:#707070;font-family: Simsun;letter-spacing: 3px;height: 108px;}
  p:first-letter{font-size: 4em;letter-spacing: 10px}
  }
</style>
