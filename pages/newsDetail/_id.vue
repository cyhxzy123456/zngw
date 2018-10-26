<template>
    <div >

      <div class="wrap">
        <div class="detail-cont">
         <div class="inner">
           <div class="fl" v-for="(item,index) in newsDetail" :key="index" >
             <div class="tip box">
               <div class="head">
                 <span class="tit">{{item.title}}</span><span class="date">{{item.addTime}}</span>
               </div>
               <div class="tip-txt">
                 <p>{{item.outline}}</p>
               </div>
             </div>
             <div class="txt box" v-html="item.content">
                <!-- {{item.content}}-->
             </div>
           </div>
           <div class="fr">
             <ul>
               <li class="box">
                 <hot-list :hotList="information">
                   <h3 slot="head">最新资讯</h3>
                 </hot-list>
               <li class="box">
                 <hot-list :hotList="hot">
                   <h3 slot="head">热门知识</h3>
                 </hot-list>
               <li class="box">
                 <hot-list :hotList="recommend">
                   <h3 slot="head">相关推荐</h3>
                 </hot-list>
               </li>
             </ul>
           </div>
         </div>
          <div class="page" v-for="(item,index) in newsDetail" :key="index" >
          <!--  <span @click="prevPage(val)"></span>-->
            <nuxt-link tag="span" :to="{path:'/newsDetail/'+item.id+1}">上一篇</nuxt-link>
            <nuxt-link tag="span" :to="{path:'/news/'+item.classId}">返回列表</nuxt-link>
            <span @click="nextPage()">下一篇</span>

          </div>
        </div>

      </div>
    </div>
</template>

<script type="text/ecmascript-6">
/*  import BannerSmall from '../../../components/banner-small.vue'*/
  import HotList from '../../components/hot-list.vue'
  import axios from '../../plugins/axios'
    export default {
      components:{HotList},
      data(){
        return{
          newsDetail:[],
          information:[
                  {
                    txt:'如今市场情况下适合股票配资吗？',
                    date:'8-12'
                  },
                  {
                    txt:'如今市场情况下适合股票配资吗？',
                    date:'8-12'
                  },
                  {
                    txt:'如今市场情况下适合股票配资吗？',
                    date:'8-12'
                  },
                  {
                    txt:'如今市场情况下适合股票配资吗？',
                    date:'8-12'
                  },
            {
              txt:'如今市场情况下适合股票配资吗？',
              date:'8-12'
            }
                ],
          hot:[
                {
                  txt:'如今市场情况下适合股票配资吗？',
                  date:'8-12'
                },
                {
                  txt:'如今市场情况下适合股票配资吗？',
                  date:'8-12'
                },
                {
                  txt:'如今市场情况下适合股票配资吗？',
                  date:'8-12'
                },
                {
                  txt:'如今市场情况下适合股票配资吗？',
                  date:'8-12'
                },
            {
              txt:'如今市场情况下适合股票配资吗？',
              date:'8-12'
            }
              ],
          recommend:[
                {
                  txt:'如今市场情况下适合股票配资吗？',
                  date:'8-12'
                },
                {
                  txt:'如今市场情况下适合股票配资吗？如今市场情况下适合股票配资吗？',
                  date:'8-12'
                },
                {
                  txt:'如今市场情况下适合股票配资吗？',
                  date:'8-12'
                },
                {
                  txt:'如今市场情况下适合股票配资吗？',
                  date:'8-12'
                },
            {
              txt:'如今市场情况下适合股票配资吗？',
              date:'8-12'
            }
              ],
          currentPage: 1,
          pageSize: 5,
          pageCount: 0,
          aid: this.$route.params.id,
          title: '',
          keyWords:'',
          description:'',

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

      methods:{
    /*    getSeo(){
          this.$axios.post('http://apiweb.ziniusoft.com/Main/Api/Seo',
            {currentPage: 1, pageSize: 10, pageCount: 0,callIndex:'index'})
            .then((res)=>{
              this.seoArray = res.data
              const title = this.seoTitle
              for(var i=0;i<this.seoArray.length;i++){

                this.title = this.seoArray[i].title
                this.keyWords = this.seoArray[i].keyWords
                this.description = this.seoArray[i].description

              }


            })
        },*/
        getData(){
          console.log(this.id)
          this.$axios.post('http://apiweb.ziniusoft.com/Main/Api/News', {
            currentPage: this.currentPage,
            pageSize: this.pageSize,
            pageCount: this.pageCount,
            id:this.aid})
            .then((res)=>{
              /*console.log(res.data)*/
              this.newsDetail = res.data
              for(var i=0;i<this.newsDetail.length;i++){
                this.title = this.newsDetail[i].seoTitle
                this.keyWords = this.newsDetail[i].seoKeyWords
                this.description = this.newsDetail[i].seoDescription

              }
            })
        }
      },
      /*prevPage(val){
        this.aid=val
        val++
        this.getData()
      },*/
      created(){
        this.getData()
       /* this.getSeo()*/
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .detail-cont{margin-top:48px;padding:30px 24px;border:1px solid #eee;overflow: hidden;font-size: 16px;color:#999;
    .inner{overflow: hidden}
      .date{float:right}
      p{line-height: 30px;}
      .tit{font-size: 20px;color:#666}
      .fl{width:67%;margin-right:22px;
          .txt{line-height: 30px;text-indent: 2em}
          .head{padding-bottom: 20px;border-bottom: 1px solid #ccc;margin-bottom: 20px}
        }
      .fr{width:31%;

      }
      .box{padding:25px;background: #eee;border-radius: 10px;margin-bottom: 22px; }
    }
  .page{text-align: center;
  span{width:162px;height: 60px;line-height: 60px;border:1px solid #ccc;text-align: center;display: inline-block;margin:36px 5px 30px 0;font-size: 16px;color:#010101}

  }
  .page span:hover{border-color:#4C9BD6;color:#4C9BD6}
</style>
