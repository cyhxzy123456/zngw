<template>
  <div class="main">
    <h2>News Index page</h2>
    <p>NewID:{{$route.params.newsId}}</p>
    <ul>
      <li><nuxt-link :to="{name:'index'}">Home</nuxt-link></li>
      <li><a href="/news/123">News-1</a></li>
      <li><a href="/news/456">News-2</a></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .main{    height: 500px;
    margin-top: 300px;text-align: center}
</style>
