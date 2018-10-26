<template>
    <div>
      <p>test</p>
    </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import qs from 'qs';
    export default {
      data(){
         return {
           data: qs.stringify({
             currentPage: "1",
             pageSize: "10",
             pageCount: "0",

           }),
         }
      },
      methods:{
          getData(){
             axios.post('http://apiweb.ziniusoft.com/Main/Api/News',this.data)
                .then((res)=>{
                  console.log(res.data.data)
                })
          }
      },
      created(){
        this.getData()
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
p{
  height:500px;}
</style>
