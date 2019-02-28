<template>

      <div class="list">
        <div>
          <img :src="newsImg">
          <h3 slot="title">{{name}}</h3>
          <div class="text-box">
            <nuxt-link  tag="p" v-for="(news,index) in indexList" :key="index" :to="'/newsDetail/'+news.id"><span class="last-new fl">{{news.title}}</span ><span class="date fr">{{news.addTime}}</span></nuxt-link>
          </div>
        </div>
      </div>

</template>

<script type="text/ecmascript-6">
    export default {
      props:{
        indexList:{
          type:Array
        },
        newsImg:{},
        name:{}
      },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>


  .list{overflow: hidden;height: 290px;padding:15px;border:1px solid #eee;margin-right: 28px;width:31.77%;float:left;color:#707070;box-sizing: border-box;margin-bottom: 40px;
  h3{font-size: 20px;padding:20px 0 10px;color:#333}
  p{font-size: 16px;line-height: 22px;}
  img{display: block;max-width:100%}
  span{display: inline-block;cursor: pointer}
  span:last-child{width:90px;overflow: hidden;white-space: nowrap}
  .last-new{display: inline-block;width:233px!important;overflow: hidden;white-space: nowrap;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;}
  }
  .text-box{overflow: hidden;height: 66px}

</style>
