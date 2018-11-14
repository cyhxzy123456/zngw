<template>
    <div>
      <news-list :classId="classId"></news-list>
    </div>
</template>

<script type="text/ecmascript-6">
  import newsList from '../../components/news-list.vue'
    export default {
      components:{newsList},
      data(){
          return{
            title: '金融_投资方向',
            keyWords:'金融投资方向',
            description:'本栏目为金融界人士从业人士提供金融投资方向，金融最新资讯。',
            classId:'invest'
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
      methods:{}

    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
