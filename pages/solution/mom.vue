<template>
    <div class="content_main">
      <solve-detail :imgList="imgList" :headImg="headImg">
        <h3 class="h1" slot="name">MOM操盘平台</h3>
        <p class="head-txt" slot="describe"> MOM操盘平台是为投资顾问客户提供实时投资资金服务，用户通过平台开设的股票账号在线实时参与实盘交易。</p>
        <p slot="ys1">（1）T+1/D交易、线上入金、实时自动开户、线上实盘交易、实时自动风控/补仓/平仓、自动计利息/扣利息、自动结算、提现申请；</p>
        <p slot="ys2">（2）T日买入T+1日卖出，只在买入时收取买入市值的综合手续费。T+1日未卖出，每交易日自动收取下一交易日延期费；</p>
        <p slot="ys3">（3）T+1日起每日自动结算盈亏，亏损将自动从当前可用资金中扣取，盈利将会自动存入至可用资金，盈利可充当保证金再次买入股票或者提现。</p>
        <p slot="fit1">（1）股票配资企业</p>
        <p slot="fit2">（2）想进军互联网金融行业企业</p>
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
          src: require('../../static/images/solve/solve_04.png')
        },
        imgList:[
          //mom
          {
            txt: '赤禹操盘 www.cyjr178.com',
            src: require('../../static/images/index/case_cycp.png')
          },
          {
            txt: '亿富资本&nbsp;&nbsp;&nbsp;&nbsp;https://www.lingmaocp.com',
            src: require('../../static/images/index/case_yfzb.png')
          },
          {
            txt: '大丰收 www.dfscp98.com',
            src: require('../../static/images/index/case_dfs.png')
          },
          {
            txt: '淘财网 www.taocai360.com',
            src:require( '../../static/images/index/case_tcw.png')
          },
          {
            txt: '鑫配网 www.ryw168.com/',
            src: require('../../static/images/index/case_xpw.png')

          },
          {
            txt: '资本立方 www.zblf178.com',
            src: require('../../static/images/index/case_zblf.png')
          },
        ],
        title:"MOM操盘平台-MOM操盘软件开发-紫牛软件",
        keyWords:"MOM操盘平台,MOM操盘软件",
        description:"紫牛MOM操盘平台栏目，主要展示了紫牛软件所开发的MOM操盘软件产品的优势、案例、券商、平台版本、架构环境等。"
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

<style rel="stylesheet/scss" lang="scss" >
  .part1 .fl img{}
</style>
