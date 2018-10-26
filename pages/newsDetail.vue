<template>
    <div class="content_main">
      <!--<h2>News-Content{{$route.params.id}}</h2>-->
      <banner-small :banner="banner">
      </banner-small>
      <nuxt-child></nuxt-child>
    </div>
</template>

<script type="text/ecmascript-6">
  import BannerSmall from '../components/banner-small.vue'
    export default {
      components:{BannerSmall},
      data(){
          return{
            banner: {
              h3:'股票配资新闻中心',
              p:'为互联网金融从业人士、股票投资者、股票配资者提供新视野、新动态、新资讯。',
              url:require('../static/images/solve/solve-banner.png')
            },
          }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
