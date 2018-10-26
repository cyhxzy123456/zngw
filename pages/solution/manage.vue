<template>
  <div class="content_main">
    <solve-detail :imgList="imgList" :headImg="headImg">
      <h3 class="h1" slot="name">股票资管系统</h3>
      <p class="head-txt" slot="describe"> 股票资管系统实现个人独立证券账户拆分子账户，每个子账户拥有单独的交易
        账号及密码，清晰的资金数据和交易记录，与券商一致的操作方式。</p>
      <p slot="ys1">（1）系统支持不同券商，支持多个母账户，每个母账户拆分多个子账户；</p>
      <p slot="ys2">（2）每个子账户交易佣金可以独立设置；</p>
      <p slot="ys3">（3）每个子账户预警线、平仓线可以独立设置；</p>
      <p slot="ys3">（3）每个子账户预警线、平仓线可以独立设置；</p>
      <p slot="ys4">（4）买入限制设置：同一行业板块仓位、单票仓位、创业板仓位、限制买入跌停票、亏损企业股票、新上市股票、账户持仓率；</p>
      <p slot="ys5">（5）系统实时风控，触预警线图像与声音提醒，触平仓线一键减仓/平仓或自动平仓，保障本金安全。</p>
      <p slot="ys6">（6）Level2行情，极速交易；</p>
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
          src: require('../../static/images/solve/solve_02.png')
        },
        imgList:[
          {
            src: require('../../static/images/case/case_zgxt.png')
          },

        ]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
