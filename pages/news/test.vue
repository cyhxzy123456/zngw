<template>
    <div class="main">
      <h2>News-Content{{$route.params.id}}</h2>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      validate({params}){
        // Must be a number
        return /^\d+$/.test(params.id)
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .main{    height: 500px;
    margin-top: 300px;text-align: center}
</style>
