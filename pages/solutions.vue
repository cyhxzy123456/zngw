<template>
  <div class="content_main">
    <banner-small :banner="banner">
      <a href="#" class="test" slot="banner-bth-blue">免费试用</a>
      <a href="#" class="apply" slot="banner-bth-yellow">立即申请</a>
    </banner-small>
    <div class=" part" v-for="(item,index) in solveList" :key="index" :class="[{grey:(index+1)%2===0},{end:(index+1)%4===0}]" >
      <div class="wrap">
        <div class="inner" v-bind:style="{ 'background-image': 'url(' + item.src + ')','background-repeat':'no-repeat','background-size':'35%' }">
          <div class="list" :class="{fr:(index+1)%2!==0}" >
            <ul>
              <li >
                <h3>{{item.h}}</h3>
                <p class="head-p">{{item.p}}</p>
              </li>
              <li >
                <h3 class="special">产品特色</h3>
                <p>{{item.p1}}</p>
                <p>{{item.p2}}</p>
                <p>{{item.p3}}</p>
                <p>{{item.p4}}</p>
                <p>{{item.p5}}</p>
                <p>{{item.p6}}</p>
              </li>
            </ul>
            <router-link tag="p" class="detail-bth" :to="{path:item.href}">查看详情</router-link>
          </div>
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
          banner: {
              h3:'股票配资交易系统',
              p:'紫牛股票配资交易系统是一套引领当前股票配资市场的系统，涵盖了免息配资，按天、月配资，自动开户、自动风控等功能',
              url:require('../static/images/solve/solve-banner.png')
            },
          solveList:[
            {
              h:'股票配资交易系统',
              p:'股票配资系统是一款针对股票配资行业的互联网平台，帮助客户迅速开展线上配资业务。该系统功能涵盖了免息配资、按天配资、按月配资等多种灵活的配资方案，广大投资者可以通过配资平台以少量的自有资金向平台配资1-10倍比例的炒股资金，可以更好的抓住盈利机会，更高效的利用自有资金，获得投资收益最大化。',
              p1:'(1)  互联网平台运营配资业务，提升公司形象，低成本开展全国配资市场；',
              p2:'(2)  通过第三方支付平台支付，安全、放心、快捷；',
              p3:'(3)  线上配资申请、加仓减仓业务申请，方便、灵活、及时；',
              p4:'(4)  自动计利息/收利息，系统管理业务，清晰的资金数据。',
              src: require('../static/images/solve/solve_01.png'),
              href:'/solution/charge'
            },
            {
              h:'股票资管系统',
              p:'股票资管系统实现个人独立证券账户拆分子账户，每个子账户拥有单独的交易账号及密码，清晰的资金数据和交易记录，与券商一致的操作方式。',
              p1:'(1)  互联网平台运营配资业务，提升公司形象，低成本开展全国配资市场；',
              p2:'(2)  通过第三方支付平台支付，安全、放心、快捷；',
              p3:'(3)  线上配资申请、加仓减仓业务申请，方便、灵活、及时；',
              p4:'(4)  自动计利息/收利息，系统管理业务，清晰的资金数据。',
              src: require('../static/images/solve/solve_02.png'),
              href:'/solution/manage'
            },
            {
              h:'股票点买系统',
              p:' 股票点买系统是为投资顾问的投资策略匹配投资资金撮合交易服务，系统支持沪深A股的点买/点卖在线实盘交易。',
              p1:'(1)  投资策略匹配资金倍数灵活可选，策略止盈止损可控；',
              p2:'(2)  规避了传统股票配资越来越受到政策层面的监管问题；',
              p3:'(3)  T+1/D交易、线上入金、实时开户实盘交易、实时自动风控/平仓、自动计算利息/收取利息、自动结算、提现申请；',
              p4:'(4)  T日买入T+1日卖出，只在买入时收取买入市值的综合手续费。T+1日未卖出，每交易日自动收取下一交易日延期费',
              src: require('../static/images/solve/solve_03.png'),
              href:'/solution/buy'
            },
            {
              h:'MOM操盘平台',
              p:' MOM操盘平台是为投资顾问客户提供实时投资资金服务，用户通过平台开设的股票账号在线实时参与实盘交易。',
              p1:'(1)  T+1/D交易、线上入金、实时自动开户、线上实盘交易、实时自动风控/补仓/平仓、自动计利息/扣利息、自动结算、提现申请；',
              p2:'(2)  T日买入T+1日卖出，只在买入时收取买入市值的综合手续费。T +1日未卖出，每交易日自动收取下一交易日延期费；',
              p3:'(3)  T+1日起每日自动结算盈亏，亏损将自动从当前可用资金中扣取，盈利将会自动存入至可用资金，盈利可充当保证金再次买入股票或者提现',
              src: require('../static/images/solve/solve_04.png'),
              href:'/solution/mom'
            }
          ]
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .grey{background:#f6f6f6;
      .inner{background-position: right center}
  }
.part{padding:40px 0;
.inner{overflow: hidden;
  .list{width:50%}
}
.special{padding:25px 0}
  h3{font-size:24px;color:#4c9bd6;padding-bottom: 20px}
  p{font-size:16px;line-height: 28px;color:#707070}
  .head-p{}

img{display: inline-block;width:75%;margin-top:5%}

.imgBox.fr {max-height:360px!important;
  img{margin-left:20%;box-sizing: border-box;max-height:360px!important;}
}

  .detail-bth{font-size: 16px;display: block;color:#fff;border-radius: 10px;margin:30px 0 2px 2px ;padding-bottom:5px;width:160px;height:40px;line-height: 45px;background: #ffc601;text-align: center;}
  .detail-bth:hover{box-shadow: 0 0 3px 1px rgba(0,0,0,0.5)}
}
  .end .inner{background-size: 40%!important;}
</style>
