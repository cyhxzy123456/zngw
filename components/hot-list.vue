<template>
    <div class="hot">
      <slot name="head"></slot>
      <div class="inner">
        <nuxt-link v-for="(item,index) in hotList" tag="p" :key="index" :to="/newsDetail/+item.id" @click="intoLink">
          <span class="title">{{item.outline}}</span>
          <span class="date">{{item.addTime}}</span>
        </nuxt-link>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import NuxtLink from "nuxt/lib/app/components/nuxt-link";
    export default {
      components: {NuxtLink},
      props:{
            hotList:{
                type:Array
            }
        },
      methods:{
        intoLink(){
            this.$emit('handleClick')
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.hot{text-align: center;height:219px;
  .inner{overflow: hidden}
  h3{padding-bottom: 22px;border-bottom: 1px solid #ccc;font-size: 20px;color:#666;margin-bottom:20px}
  p{line-height: 30px}
  p:hover{color:#4C9BD6}
span.title{float:left;width:218px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}
span.date{float:right;    width: 88px;
  overflow: hidden;
  white-space: nowrap;}
}
</style>
