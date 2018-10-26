<template>
    <div>
      <div class="news-list">
        <ul>
          <nuxt-link  tag="li" v-for="(item,index) in newsList" :key="index"  :to="{path:'/newsDetail'}" >
            <div class="fl"><img :src="item.outImg" alt=""></div>
            <div class="fr">
              <div class="top">
                <span class="tit">{{item.title}}</span><span class="date">{{item.addTime}}</span>
              </div>
              <div class="bot">
                <p>{{item.outline}}</p>
              </div>
            </div>
          </nuxt-link>
        </ul>
        <div class="page">
          <span>上一页</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>下一页</span>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
            newsList:{
                type:Array
            }
        },
        data(){
            return
          {

          }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.news-list{padding:28px;border:1px solid #eee;
  li{padding:24px;background: #eee;border-radius: 10px;overflow: hidden;margin-bottom: 15px;
    .fr{width:78%}
    .top{font-size: 20px;color:#666;padding-bottom: 20px;border-bottom: 1px solid #eee;
      .date{font-size: 16px;color:#999;float:right}
      }
    .bot{
      p{font-size: 16px;color:#999;line-height: 26px;}
    }
  }
}
.page{text-align: center;
  span{display: inline-block;width:60px;height: 30px;line-height: 30px;border:1px solid #ccc;font-size: 16px}
  span:hover{background: #4c9bd6;color:#fff}
}
</style>
