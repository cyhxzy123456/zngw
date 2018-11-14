<template>
  <div class="content_main">
    <banner-small :banner="banner">
      <a href="http://wpa.qq.com/msgrd?v=3&uin=576847565&site=qq&menu=yes" target="_blank" class="test" slot="banner-bth-blue">免费试用</a>
      <a href="http://wpa.qq.com/msgrd?v=3&uin=576847565&site=qq&menu=yes" target="_blank" class="apply" slot="banner-bth-yellow">立即申请</a>
    </banner-small>
    <div class="part part1">
      <div class="wrap">
        <h3 class="head">1、系统建设</h3>
        <div class="inner">
          <ul>
            <li v-for="(item,index) in buildList" :key="index">
              <img :src="item.src" alt="">
              <h3>{{item.txtH3}}</h3>
              <p>{{item.txtP}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="part part2">
      <div class="wrap">
        <h3 class="head">2、风险控制</h3>
        <div class="inner">
          <p class="describe">面对危机四伏的金融行业，对于配资企业风险控制大于一切，拥有更专业化的风控体系势在必得，系统化的事前风控对配资企业就变得尤为重要。</p>
          <div class="control">
            <ul>
              <li v-for="(item,index) in controlList" :class="item.id" :key="index">
                  <h3>{{item.txtH3}}</h3>
                  <p>{{item.txtP}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="part part3">
       <div class="wrap">
         <h3 class="head">3、资源整合</h3>
       </div>
      <div class="content">
        <div class="wrap">
          <div class="inner">
            <p>紫牛软件服务的上百家配资企业中，有的企业开拓市场能力比较强，需要强大的配资
              资金供应需求；有的企业资金实力雄厚及资金渠道丰富，需要广大的市场空间，紫牛
              软件通过强大的技术团队，构建了配资企业上下游子孙账户系统，为配资企业整合配
              资资金资源，为资金批发企业整合配资企业市场资源，通过子孙账户系统完美对接。</p>
            <a href="http://wpa.qq.com/msgrd?v=3&uin=576847565&site=qq&menu=yes" target="_blank" class="btn">立即咨询</a>
          </div>
        </div>
      </div>
    </div>
    <div class="part part4">
      <div class="wrap">
        <h3 class="head">4、资源整合</h3>
      </div>
      <div class="content">
        <div class="top">
          <div class="wrap">
            <ul>
              <li class="small">
                <h3>规避运营风险</h3>
                <p>客户风险声明书，服务协议规范，客户回访合规性筛查，客户24小时投诉电话。</p>
              </li>
              <li class="big">
                <h3>市场及渠道拓展</h3>
                <p>合理建议招商加盟方案，代理商的运营管理，实现配资企业与代理合作共赢。</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="bot">
          <div class="wrap">
            <ul>
              <li class="big">
                <h3>SEO网络推广</h3>
                <p>为企业指导合理的SEO网络推广及网络媒体推广方法，减少推广精力开支，发挥更好推广效果。</p>
              </li>
              <li class="small">
                <h3>成本控制放大利润</h3>
                <p>合理建议配资资金储备调节方法及资金利用方法，配资资金成本控制，实现利润最大化。</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="part part5">
      <div class="wrap">
        <h3 class="head">5、技术支持</h3>
        <div class="inner">
          <ul>
            <li v-for="(item,index) in supportList" :key="index" :class="[item.id,{last:(index+1)%4===0}]" >
              <h3>{{item.txtH3}}</h3>
              <p>{{item.txtP}}</p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BannerSmall from '../components/banner-small.vue'
export default {
    components:{BannerSmall},
data() {
    return{
      banner:
        {
          h3:'紫牛包含服务',
          p:'1、系统建设    2、风险控制   3、资源整合    4、运营指导    5、技术支持',

          url:require('../static/images/service/service-banner.png')
        },
      buildList:[
          {
            src: require('../static/images/service/service_01.png'),
            txtH3: '全程贴心服务',
            txtP: '服务器购买、域名备案、第三方支付、操作培训、运营指导。'
          },
          {
            src: require('../static/images/service/service_02.png'),
            txtH3: '快速安全部署系统',
            txtP: '系统成熟，功能安全稳定，经过 上百家配资企业实践运营检验。'
          },
          {
            src: require('../static/images/service/service_03.png'),
            txtH3: 'UI设计',
            txtP: '系统整体页面设计，你的需求我 的创意，最优的视觉呈现。'
          },
          {
            src: require('../static/images/service/service_04.png'),
            txtH3: '需求定制开发',
            txtP: '个性化定制，满足你的需求，为 您打造独一无二的系统。'
          },
          {
            src: require('../static/images/service/service_05.png'),
            txtH3: '数据API对接',
            txtP: '短信端口API对接、第三方支付 API对接、证券账户API对接。'
          }
        ],
      controlList:[
        {
          id:'control1',
          txtH3: '高危股票风险',
          txtP: 'ST股票、新上市股票、高风险个股设置限买，事前有效拦截。'
        },
        {
          id:'control2',
          txtH3: '防止接盘风险',
          txtP: '会员及系统单票仓位限制，有效防 止庄家恶意配资买票接盘。'
        },
        {
          id:'control3',
          txtH3: '保证金穿仓风险',
          txtP: '配资金额分别限制主板及创业板单票 建仓比列，分散风险系数。'
        },
        {
          id:'control4',
          txtH3: '智能预警平仓',
          txtP: '系统实时监测持仓股票价格判断仓 位盈亏，做出预警提示及平仓止损。'
        },
      ],
      supportList:[
        {
          id:'support1',
          txtH3:'防御DDOS攻击',
          txtP:'提供防御DDOS攻击解决方案,配合实施防御DDOS攻击服务，极速响应、极速配合解决问题。'
        },
        {
          id:'support2',
          txtH3:'安全服务器网络',
          txtP:'系统服务器采用内网安全隔离策略，用户访问系统时外网服务器映射内网服务器，系统服务器对外完全隔离。'
        },
        {
          id:'support3',
          txtH3:'运营技术支持',
          txtP:'一支团队专属为您提供功能二次开发服务、迭代升级服务、数据安全服务、系统运行负载均衡升级服务。'
        },
        {
          id:'support4',
          txtH3:'运营维护服务',
          txtP:'服务系统使用培训、系统数据库自动备份、日常运营咨询解答服务，问题诊断，BUG修复服务。'
        }
      ],
      title:"股票配资软件_紫牛服务内容",
      keyWords:"股票配资服务",
      description:"紫牛服务栏目页，主要包含系统建设、风险控制、资源整合、运营指导、技术支持等服务展示。"
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
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .part{padding:42px 0;overflow: hidden;
    .head{color:#666;font-size: 24px;padding-bottom: 35px}
    p{font-size: 14px;color:#999;line-height: 22px;}
    h3{font-size: 24px;color:#666}
    .wrap{
        p{font-size: 16px;color:#999;}
        h3{font-size: 20px;color:#666}
    }
  }
  .part1{overflow: hidden;border-bottom: 1px solid #eee;
    li{float:left;width:14%;text-align: center;margin-right:7.5%;
      h3{padding:38px 0 25px;font-size: 18px;}
      img{display: block;margin:0 auto;height: 90px;}
      p{  margin: 0 auto;}
      }
    li:last-child{margin:0}
    }
  .part2{background: url("../static/images/service/control_bg.png") center 200px no-repeat;border-bottom: 1px solid #eee;
    li{float:left;width:35%;text-align: left;margin-bottom: 60px;padding-left:96px;box-sizing: border-box}
    li:nth-child(odd){float:left}
    li:nth-child(even){float:right;padding-left:80px}

    .describe{padding-bottom: 40px}
    .inner{
      img{width:66px;margin-right:15px;display: inline-block;margin-top:20px}
      h3{padding-bottom: 16px}


    }
  li.control1{background: url("../static/images/service/control_01.png") left bottom no-repeat}
  li.control2{background: url("../static/images/service/control_02.png") left  bottom no-repeat}
  li.control3{background: url("../static/images/service/control_03.png") left bottom no-repeat}
  li.control4{background: url("../static/images/service/control_04.png") left  bottom no-repeat}
  }
  .part3 .content{
    background: url("../static/images/service/source-bg.png")  no-repeat;background-size: 100% 100%;padding:40px 0;
    p{line-height: 44px;color:#fff;width:535px;margin:0 auto}
    a{margin:0 auto;margin-top:15px}
  }
  .part4{overflow: hidden;
    .top{border-bottom:2px solid #4c9bd6;
     ul{overflow: hidden}
      li{padding-bottom:25px}
      li.small{border-right:2px solid #4c9bd6;background: url("../static/images/service/run_01.png") no-repeat left top}
      li.big{background: url("../static/images/service/run_02.png") no-repeat 30% top}
    }
    .bot{
      li{padding-top:30px}
      li.big{border-right:2px solid #4c9bd6;background: url("../static/images/service/run_03.png") no-repeat 30% 30px}
      li.small{background: url("../static/images/service/run_04.png") no-repeat 24% 30px;padding-left:8%;
        p{width:100%}
      }
    }
   .wrap{
    li{float:left;box-sizing: border-box}
    li.big{width:65%;padding-left:18%}
    li.small{width:35%}
    h3{padding-bottom: 26px;padding-left:50px;}
    h3.head{padding-bottom: 26px;padding-left:0}
    p{line-height:30px;width:80%}

     }
  }
  .part5{
  .last{margin-right:0}
    ul{overflow: hidden}
    li{float:left;width:20%;border:1px solid #eee;padding:130px 5px 25px;text-align: center;margin-right:5%;
      h3{padding-bottom: 22px;border-bottom: 1px solid #eee}
      p{line-height: 28px;padding:0 34px;padding-top:15px;text-align: left}
    }
  .support1{background: url("../static/images/service/support_01.png") no-repeat center 15px}
  .support2{background: url("../static/images/service/support_02.png") no-repeat center 15px}
  .support3{background: url("../static/images/service/support_03.png") no-repeat center 15px}
  .support4{background: url("../static/images/service/support_04.png") no-repeat center 15px}
  }
</style>
