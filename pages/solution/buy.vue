<template>
  <div class="content_main">
    <solve-detail :imgList="imgList" :headImg="headImg">
      <h3 class="h1" slot="name">股票点买系统</h3>
      <p class="head-txt" slot="describe"> 股票点买系统是为投资顾问的投资策略匹配投资资金撮合交易服务，系统支持
        沪深A股的点买/点卖在线实盘交易。</p>
      <p slot="ys1">（1）投资策略匹配资金倍数灵活可选，策略止盈止损可控；</p>
      <p slot="ys2">（2）规避了传统股票配资越来越受到政策层面的监管问题；</p>
      <p slot="ys3">（3）T+1/D交易、线上入金、实时开户实盘交易、实时自动风控/平仓、自动计算利息/收取利息、自动结算、提现申请；</p>
      <p slot="ys4">（4）T日买入T+1日卖出，只在买入时收取买入市值的综合手续费。T+1日未卖出，每交易日自动收取下一交易日延期费；</p>
      <p slot="fit1">(1)  股票配资企业</p>
      <p slot="fit2">(2)  想进军互联网金融行业企业</p>
    </solve-detail>
  </div>
</template>
<script type="text/ecmascript-6">
  import solveDetail from '../../components/solve-detail.vue'
  export default {
    components:{solveDetail},
    data(){
      return{
        headImg:{
          src: require('../../static/images/solve/solve_03.png')
        },
        imgList:[
          //点买

          {
            txt: '天添赢 www.tiantianying188.com',
            src: require('../../static/images/index/case_tty.png')
          },

          {
            txt: '云跟投 www.ygt999.com',
            src: require('../../static/images/index/case_ygt.png')
          },
          {
            txt: '博牛宝 www.bnb18.com/',
            src: require('../../static/images/index/case_bnb.png')
          },
          {
            txt: '谋略天下 www.winwinwin168.com/',
            src: require('../../static/images/index/case_mltx.png')
          },
          {
            txt: '钱生钱 www.qsq98.com',
            src:require( '../../static/images/index/case_qsq.png')
          },
        ],
        title:"股票点买系统_股票点买软件开发_紫牛软件",
        keyWords:"股票点买系统，股票点买软件",
        description:"紫牛股票点买系统栏目，主要展示了紫牛软件所开发的股票点买软件产品的优势、案例、券商、平台版本、架构环境等。"

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

</style>
