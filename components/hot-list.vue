<template>
    <div class="hot">
      <slot name="head"></slot>
      <div class="inner">
        <p v-for="(item,index) in hotList" :key="index"><span class="title">{{item.txt}}</span><span class="date">{{item.date}}</span></p>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
            hotList:{
                type:Array
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
span.title{float:left;width:245px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}
span.date{float:right}
}
</style>
