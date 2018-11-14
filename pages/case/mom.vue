<template>
    <div>
      <case-list :classId="classId"></case-list>
    </div>
</template>

<script type="text/ecmascript-6">
  import caseList from '../../components/case-list.vue'
    export default {
      components:{caseList},
      data(){
          return{
            classId:'mom',
            title: 'MOM操盘平台案例_紫牛软件',
            keyWords:'MOM操盘平台案例',
            description:'紫牛软件MOM操盘平台案例聚合页，主要集中展示MOM操盘平台案例，点击查看详情。',
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
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
