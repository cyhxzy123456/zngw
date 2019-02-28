<template>
  <div class="content_main">
    <solve-detail :imgList="imgList" :headImg="headImg">
      <h3 class="h1" slot="name">股票配资交易系统</h3>
      <p class="head-txt" slot="describe"> 股票配资系统是一款针对股票配资行业的互联网平台，帮助客户迅速开展线上配
        资业务。该系统功能涵盖了免息配资、按天配资、按月配资等多种灵活的配资方案，
        广大投资者可以通过配资平台以少量的自有资金向平台配资1-10倍比例的炒股资金，
        可以更好的抓住盈利机会，更高效的利用自有资金，获得投资收益最大化。</p>
      <p slot="ys1">(1)  互联网平台运营配资业务，提升公司形象，低成本开展全国配资市场；</p>
      <p slot="ys2">(2)  通过第三方支付平台支付，安全、放心、快捷；</p>
      <p slot="ys3">(3)  线上配资申请、加仓减仓业务申请，方便、灵活、及时；</p>
      <p slot="ys4">(4)  自动计利息/收利息，系统管理业务，清晰的资金数据。</p>
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
            src:require( '../../static/images/solve/solve_01.png')
        },
        imgList:[
          //charge

          {
            txt: '牛管家 www.ngj518.com',
            src: require('../../static/images/index/case_ngj.png')
          },
          {
            txt: '涨声操盘 www.zhangsheng666.com',
            src: require('../../static/images/index/case_zscp.png')
          },
          {
            txt: '子牛在线 www.zn1788.com',
            src: require('../../static/images/index/case_znzx.png')
          },
          {
            txt: '股昇网 www.gushengwang.com/',
            src: require('../../static/images/index/case_gsw.png')
          },
          {
            txt: '股临天下 https://www.gltx1688.com/',
            src:require( '../../static/images/index/case_gltx.png')
          },
          {
            txt: '交易秀 www.jiaoyixiu.com/',
            src:require( '../../static/images/index/case_jyx.png')
          },
        ],
        title:"股票配资系统-股票配资交易软件开发-紫牛软件",
        keyWords:"股票配资系统，股票配资软件",
        description:"紫牛股票配资系统栏目，主要展示了紫牛软件所开发的股票配资系统产品的优势、案例、券商、平台版本、架构环境等。"

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
