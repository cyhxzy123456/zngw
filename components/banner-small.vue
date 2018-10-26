<template>
    <div>
      <div class="banner" :style="{backgroundImage:'url(' + banner.url + ')'}">
        <div class="wrap" >
          <h3>{{banner.h3}}</h3>
          <p>{{banner.p}} </p>
          <div class="apply-bth">
            <slot name="banner-bth-blue"></slot>
            <slot name="banner-bth-yellow"></slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
            banner:{
                type:Object,
            }
        },
      data(){
          return{

          }
      },
      mounted (){

      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .banner{width:100%;background-repeat:no-repeat;background-size: 100% 100%;height:322px;color:#fff;position: relative;
  h3{font-size: 30px;padding:48px 0 25px}
  p{font-size: 16px;line-height: 38px;width:30%}
  .apply-bth{position: absolute;bottom:50px;}
  a{margin-right: 30px;font-size: 16px;display: inline-block;background: #2f68dd;width:160px;height:40px;line-height: 40px;text-align: center;color:#fff}
  a.apply{background:#ffd603;color:#2f68dd}
  }
</style>
