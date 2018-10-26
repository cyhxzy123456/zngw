<template>
    <div class="case-detail ">
     <!-- <banner-small :banner="banner">
        <a href="#" class="test" slot="banner-bth-blue">免费试用</a>
        <a href="#" class="apply" slot="banner-bth-yellow">立即申请</a>
      </banner-small>-->
      <nuxt-child></nuxt-child>
    </div>
</template>

<script type="text/ecmascript-6">
  import BannerSmall from '../components/banner-small.vue'
  export default {
  /*  components: {BannerSmall},*/
    data(){
      return{
        banner:{
          h3:'案例详情',
          p:'案例详情包含产品背景介绍、功能介绍、案例页面查看案例名称等 ',
          url:require('../static/images/case/case-ban.png')
        },


      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
