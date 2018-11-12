<template>
    <div class="footer">
      <div class="wrap">
        <div class="fl">
          <ul>
            <li>
              <h3>解决方案</h3>
              <nuxt-link tag="p" v-for="(item,index) in solveList" :key="index" :to="item.link">{{item.txt}}</nuxt-link>
            </li>
            <li>
              <h3><nuxt-link :to="'/service'">服务</nuxt-link></h3>
            </li>
            <li>
              <h3>新闻资讯</h3>
              <nuxt-link tag="p" v-for="(item,index) in newsList" :key="index"  :to="item.href">{{item.txt}}</nuxt-link>
            </li>
            <li>
              <h3><nuxt-link :to="'/about'">关于紫牛</nuxt-link></h3>
            </li>
          </ul>
        </div>
        <div class="fr">
          <ul>
            <li>
              <h3>服务热线</h3>
              <b>028-83579300</b>
              <a href="http://wpa.qq.com/msgrd?v=3&uin=576847565&site=qq&menu=yes" target="_blank"><img :src="qq_kf" alt="qq" class="qq"></a>
            </li>
            <li class="code">
              <img :src="contactImg" alt="">
              <span>扫一扫联系我们</span>
            </li>
            <li class="code">
              <img :src="gzhImg" alt="">
              <span>扫一扫关注我们</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="link">
        <div class="wrap">
          <span>友情链接 : </span><span v-for="(item,index) in link" :key="index"><a :href="item.link">{{item.title}}</a></span>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import axios from '../../plugins/axios'
export default {
  name: 'Footer',
  data () {
    return {
      nowIndex: 0,
      qq_kf:require('../../static/images/index/qq_kf.png'),
      solveList:[
        {
          txt:'股票配资交易系统',
          link:'/solution/charge'
        },
        {
          txt:'股票资管系统',
          link:'/solution/manage'
        },
        {
          txt:'股票点买系统',
          link:'/solution/buy'
        },
        {
          txt:'MOM操盘平台',
          link:'/solution/mom'
        }
      ],
      newsList:[
        {
          txt:'疑问解答',
          href:'/news/solve'
        },
        {
          txt:'最新热点',
          href:'/news/hot'
        },
        {
          txt:'公司资讯',
          href:'/news/information'
        },
        {
          txt:'行业资讯',
          href:'/news/trade'
        },
        {
          txt:'运营知识',
          href:'/news/run'
        },
        {
          txt:'投资方向',
          href:'/news/invest'
        }
      ],
      currentPage: 1,
      pageSize: 5,
      pageCount: 0,
      link:[],
      contactImg:require('../../static/images/about/contact.jpg'),
      gzhImg:require('../../static/images/about/gzh.jpg')
    }
  },
  methods: {
    select (index) {
      this.nowIndex = index
    },
    getLink(){
        this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/FriendshipLink',{currentPage: 1,
          pageSize: 5,
          pageCount: 0,})
          .then((res)=>{
            this.link = res.data
            /*console.log(res.data)*/
          })
          .catch((err)=>{
            console.log(msg)
          })
    }
  },
  created(){
      this.getLink()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .footer{width:100%;padding:18px 0 24px;background: #313131;overflow:hidden;
  .wrap{overflow: hidden  }
  h3{font-weight: bold;padding-bottom: 16px;font-size: 17px;
  a{color:#9a9a9a}
  }
  h3.serv{padding-right: 88px}
  .fl{width:50%;
    li{font-size:16px;float:left;width:25%;color:#9a9a9a}
    li:nth-child(2){padding-left:10px;box-sizing: border-box}
        p{line-height: 25px;cursor: pointer}
  }
  .fr{width:50%;

  img{max-width:100%}
    li{float:left;color:#9a9a9a;margin-left:34px}
    .code img{display: block;width:150px;height:150px;background: #fff}
    .code span{font-size: 12px;padding-top:5px;text-align: center;display: block}
    b{font-size:25px;color:#fff;padding:0 0 18px;display: block}
    .qq{width:198px}
  }
  .link{margin-top:10px;border-top:1px solid #fff;
    a,span{color:#959595;font-size: 12px;padding-right: 5px;}
  }
  }


</style>
