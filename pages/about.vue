<template>
    <div class="content_main">
      <banner-small :banner="banner">
        <a href="http://wpa.qq.com/msgrd?v=3&uin=3157441071&site=qq&menu=yes" rel="nofollow" target="_blank" class="test" slot="banner-bth-blue">联系我们</a>
      </banner-small>
      <div class="present part">
        <div class="wrap">

          <tit>
            <h3 slot="h3">紫牛介绍</h3>
            <p slot="p">Present</p>
          </tit>
          <div class="inner">
            <p>      成都紫牛软件技术有限公司始创于2010年，是专业从事互联网金融行业软件开发的高科技技术企业，长期致力于自有知识产权互联网金融企业的运
              营管理软件研发、销售和服务； 紫牛公司坚持贯彻“新、快、好、省”的经营理念，坚持不断完善产品的功能，不断提高售后服务质量与速度，从而极
              大促进了广大用户运营管理水平的不断提高。凭借独特的市场眼光和敢于创新的企业精神，公司已经成为了中国微小中企业信息化建设不可缺少的一员，
              公司组织结构清晰，分工合理，其下设有开发部、产品部、测试部、客户部、市场部等多个部门。</p>
          </div>
        </div>

      </div>
      <div class="progress part">
        <div class="wrap">
          <tit>
            <h3 slot="h3">发展历程</h3>
            <p slot="p">Progress</p>
          </tit>
          <div class="inner">
            <ul>
              <li v-for="(item,index) in progressList" :key="index">
                <h3>{{item.num}}</h3>
                <p>{{item.txt}}</p>
              </li>
            </ul>
          </div>
          <div class="line"></div>
        </div>
      </div>
      <div class="business part">
        <div class="wrap">
          <tit>
            <h3 slot="h3">企业理念</h3>
            <p slot="p">Business philosophy</p>
          </tit>
          <div class="inner">
            <div class="fl">
              <img :src="busyImg" alt="">
            </div>
            <div class="fr">
              <p>企业传播语：做金融找紫牛</p>
              <p>企业愿景：做中国领先股票配资系统服务商</p>
              <p>企业理念：为股票配资平台提供多、快、好、新系统</p>
            </div>
          </div>

        </div>
      </div>
      <div class="contact part">
        <div class="wrap">
          <tit>
            <h3 slot="h3">联系我们</h3>
            <p slot="p">Contact us</p>
          </tit>
          <div class="inner">
            <div class="contact-box">
              <h3>联系方式</h3>
              <p>地址：成都市武侯区桐梓林北路2号</p>
              <div class="code">
                <img :src="contactImg" alt="" class="fl" >
                <p class="fr">
                  <span>QQ:3157441071</span>
                  <span>电话：028-83579300</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- <Footer :linkList="linkList"></Footer>-->
    </div>
</template>
<script type="text/ecmascript-6">
  import BannerSmall from '../components/banner-small.vue'
  import Tit from '../components/tit.vue'
/*  import axios from '../plugins/axios'*/

  import Footer from '../components/footer/footer.vue'
    export default {
      components:{Tit,BannerSmall,Footer},
        data () {
            return {
              busyImg:require('../static/images/about/busy-img.png'),
              progressList:[
                  {
                    num:2010,
                    txt: "紫牛软件在天府之国创办成立专注互联网金融系统研发"
                  },
                  {
                    num:2013,
                    txt: "推出自主研发的P2P网货系统"
                  },
                  {
                    num:2014,
                    txt: "全国首家推出自主研发的股票配资系统"
                  },
                  {
                    num:2015,
                    txt: "股票配资系统超过60家企业使用并获得高度评价"
                  },
                  {
                    num:2016,
                    txt: "研发出股票分仓资管系统股票MOM操盘系统"
                  },
                  {
                    num:2017,
                    txt: "自主研发出股票配资交易系统股票策略点买系统"
                  },
                  {
                    num:2018,
                    txt: "股票配资系统产品突破上百家企业使助力配资高速发展"
                  },
                ],
              banner: {
                h3:'紫牛软件介绍',
                p:'紫牛软件业务介绍、发展历程描述企业理念、联系方式',
                url:require('../static/images/about/about-banner.png')
              },
              contactImg:require('../static/images/about/contact.jpg'),
              title:"关于紫牛-紫牛软件",
              keyWords:"紫牛软件介绍",
              description:"紫牛软件成立于2010年，为金融企业提供股票配资系统开发服务，立志做中国领先的股票配资系统服务商。",
              linkList:[],
              page:this.$store.state.page
            }

        },
     /* async asyncData ({ params }) {
        let { data } = await axios.post('https://apiweb.ziniusoft.com/Main/Api/FriendshipLink',qs.stringify({currentPage: 1, pageSize: 5, pageCount: 0}))
        console.log(data.data);
        return { linkList: data.data}
      },*/
      methods: {
        getLink(){
          this.$axios.post('https://apiweb.ziniusoft.com/Main/Api/FriendshipLink',{currentPage: 1,
            pageSize: 5,
            pageCount: 0,})
            .then((res)=>{
              this.linkList = res.data
              /* console.log(res.data)*/
            })
            .catch((err)=>{
              console.log(msg)
            })
        }
      },
      head () {
        return {
          title: this.title,
          meta: [
            { hid: 'keyWords',name:'keyWords', content:this.keyWords},
            { hid: 'description',name:'description', content:this.description}
          ]
        }
      },
      created(){
          /*console.log(this.linkList);*/
          /*this. getLink()*/

      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .banner{width:100%;background: url("../static/images/about/about-banner.png") no-repeat;background-size: 100% 100%;height:322px;color:#fff;
    h3{font-size: 30px;padding:48px 0 25px}
    p{font-size: 20px;line-height: 30px}
    a{font-size: 16px;display: block;margin-top:60px;background: #2f68dd;width:160px;height:40px;line-height: 40px;text-align: center;color:#fff}
  }
  .present{border-bottom: 1px solid #eee}
  .present .inner p{text-indent: 2em}
  .part{padding:10px 0 45px;

  .inner p{line-height: 30px;font-size: 16px;color:#999;}

  }
  .progress{overflow: hidden;position: relative;border-bottom: 1px solid #eee;
  .line{position: absolute;top:208px;height:1px;background:#eee;z-index: -1;width:1000px;left:50%;margin-left:-500px}
    li{float:left;width:14.28%;text-align:center;padding:0 13px;box-sizing: border-box;
      h3{;    margin: 30px auto 20px;;width:110px;height:110px;border-radius: 50%;border:4px solid #fff;box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);line-height: 110px;color:#fff;font-size: 24px;}
      h3:nth-child(1){background: #b6c8d5}
      h3:nth-child(2){background: #aac3d6}
      h3:nth-child(3){background: #8ab1cf}
      h3:nth-child(4){background: #82aed0}
      h3:nth-child(5){background: #659dc7}
      h3:nth-child(6){background: #5896c4}
      h3:nth-child(7){background: #4c9bd6}
      p{text-indent: 0!important;}
    }
  }
  .business .inner{padding:38px 36px;background: #eee;overflow: hidden;
    p{line-height: 54px;}
    .fr{padding:40px 90px 0 0}
  }
  .contact .inner{text-align: center;background: url("../static/images/about/map.png") no-repeat;background-size: contain;width:100%;height:590px;position: relative;color:#fff;
    .contact-box{width:538px;height:278px;background: #4c9bd6;position: absolute;top:50%;margin-top:-139px;left:50%;margin-left:-269px}
    h3{font-size: 30px;padding:20px 0}
    p{color: #fff;font-size: 20px;text-align: center  }
    .code{overflow: hidden;padding:32px 0 0;width:67%;margin:0 auto;
      img{display: inline-block;width:110px;height:110px;background: #fff}
      span{display: block;text-align: left}

    }
  }
</style>
