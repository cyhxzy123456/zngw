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
            classId:'manage',
            title: '股票资管系统案例_紫牛软件',
            keyWords:'股票资管系统案例',
            description:'紫牛软件股票资管系统案例聚合页，主要集中展示股票资管系统案例，点击查看详情。',
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
