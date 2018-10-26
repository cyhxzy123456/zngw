<template>
<div class="header">
  <div class="wrap">
  <div class="fl">
    <img src="../../static/images/index/logo.png" alt="">
  </div>
  <ul class="header-list fr">
    <nuxt-link tag="li" active-class="active" to="/">首页</nuxt-link>
    <nuxt-link tag="li" active-class="active" to="/solutions" @mouseover.native="show()" @mouseout.native="hide()">解决方案</nuxt-link>
        <li class="slide-down" v-show="showSlide"  @mouseover="show()" @mouseout="hide()">
          <nuxt-link tag="p" active-class="active" to="/solution/charge">股票配资系统</nuxt-link>
          <nuxt-link tag="p" active-class="active" to="/solution/manage">股票资管系统</nuxt-link>
          <nuxt-link tag="p" active-class="active" to="/solution/buy">股票点买系统</nuxt-link>
          <nuxt-link tag="p" active-class="active" to="/solution/mom">MOM操盘系统</nuxt-link>
        </li>
    <nuxt-link tag="li" active-class="active" to="/case/charge">案例</nuxt-link>
    <nuxt-link tag="li" active-class="active" to="/service">服务</nuxt-link>
    <nuxt-link tag="li" active-class="active" to="/news/solve">新闻</nuxt-link>
    <nuxt-link tag="li" active-class="active" to="/about">关于紫牛</nuxt-link>
  </ul>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default{
    data(){
        return{
            showSlide:false
        }
    },
  methods:{
        show (){
            this.showSlide = true
        },
        hide() {
          this.showSlide = false
    }
  },

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .header{;height:85px;line-height: 85px;font-size: 18px;text-align: center;color:#fff;position: fixed;top:0;width:100%;z-index: 1000;  background: #fff;
    .fl{width:315px;
      img{  display: block;width:100%;margin-top:10px}
    }
  .fr li{margin-left:64px;float:left;color:#666  }
  .fr li.active{color:#fe0126}
  }
  .header-list{position: relative;
    li{cursor: pointer}
  }
  .slide-down{position: absolute;top:60px;left:42px;z-index: 10000;padding-bottom:15px;background: #fff;width:190px;
    p{line-height: 30px;font-size: 16px;color:#666;}
    p:hover{color:#fe0126;}
  }
</style>

