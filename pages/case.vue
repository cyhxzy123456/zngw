<template>
    <div class="content_main">
      <banner-small :banner="banner">
        <a href="http://wpa.qq.com/msgrd?v=3&uin=3157441071&site=qq&menu=yes" rel="nofollow" target="_blank" class="test" slot="banner-bth-blue">免费试用</a>
        <a href="http://wpa.qq.com/msgrd?v=3&uin=3157441071&site=qq&menu=yes" rel="nofollow" target="_blank" class="apply" slot="banner-bth-yellow">立即申请</a>
      </banner-small>
      <div class="wrap">
        <div class="case-box">
          <div class="nav">
            <ul>
              <nuxt-link tag="li"  v-for="(item,index) in navList" :key="index"  :to="item.id" active-class="active">{{item.className}}</nuxt-link>
             <!-- <nuxt-link tag="li" v-for="(item,index) in navList" :key="index"  :to="item.href">
               {{item.navTxt}}
              </nuxt-link>-->
            </ul>
          </div>
          <keep-alive>
            <nuxt-child></nuxt-child>
          </keep-alive>

        </div>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
import BannerSmall from '../components/banner-small.vue'
import axios from '../plugins/axios.js'
export default {
  components: {
    BannerSmall},
  metaInfo: {
    title: 'title', // set a title
    meta: [{                 // set meta
      name: 'keyWords',
      content: '我是关键词'
    },
      {
        name: 'description',
        content: '我是描述'
      }
    ]
  },
  data(){
      return{
        banner:{
            h3:'精品案例',
            p:'精品案例栏目包含了紫牛股票配资系统、股票资管系统、股票点买系统、MOM操盘平台案例展示。 ',
            url:require('../static/images/case/case-ban.png')
          },
        navList:[
          {
            className:'股票配资交易系统',
            id:'charge'
          },
          {
            className:'股票点买系统',
            id:'buy'
          },
          {
            className:'MOM操盘平台',
            id:'mom'
          },
          {
            className:'股票资管系统',
            id:'manage'
          },
        ],
        data: {
          currentPage: "1",
          pageSize: "10",
          pageCount: "0",
        },

      }
  },
  methods:{
    getData(){
      this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/NewsClass',this.data)
        .then((res)=>{
          /*console.log(res.data)*/
          this.navList = res.data.slice(-4)
        })
    },

  },
  created(){
    this.getData()
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.case-box{padding-top:25px;overflow: hidden;
  .nav {overflow:hidden;border-bottom: 1px solid #eee;margin-bottom:28px;
      li{float:left ;margin-right: 30px;height:55px;line-height: 55px;font-size: 20px;color:#666;padding:0 15px}
      li.active{color: #4c9bd6; }
  }

}
</style>
