<template>
    <div>
      <div class="left">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div class="right">
        <nuxt/>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.left{width:200px;float:left;
  li{height:50px;line-height: 50px;border:1px solid #eee;text-align: center;color:#3B8070;}
}
.right{width:500px;border:1px solid #eee;float:right}
</style>
