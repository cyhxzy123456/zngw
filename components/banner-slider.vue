<template>
  <div class="slide">

    <div class="slideshow">
      <el-carousel  height='500px' :interval="4000" trigger="click">
        <el-carousel-item v-for="(img, index) in slides" :key="index">
          <a :href="img.href">
              <img :src='img.src'>
          </a>
        </el-carousel-item>
      </el-carousel>
      <!-- <transition-group tag="ul" name="image">
        <li v-for="(img, index) in slides" v-show="index===mark" :key="index">
          <a :href="img.href">
            <img :src='img.src'>
          </a>
        </li>
      </transition-group> -->
    </div>
    <!-- <div class="bar">
      <span v-for="(item, index) in slides" :class="{ 'active':index===mark }"
            @click="change(index)" :key="index"></span>
    </div> -->
  </div>


</template>

<script>
  export default {
    props:{
      slides:{
        type:Array,
      },
      inv:{
        type:Number,
        default:3000
      }
    },
    data () {
      return{
        timer: null, //定时器
        mark: 0, //比对图片索引的变量

      }
    },
    methods: {
      // autoPlay () {
      //   this.mark++;
      //   if (this.mark === 4) {
      //     this.mark = 0
      //   }
      // },
      // play () {
      //   this.timer = setInterval(this.autoPlay, this.inv)
      // },
      // change (i) {
      //   this.mark = i
      // },
      // stop () {
      //   clearInterval(this.timer)
      // },
      // move () {
      //   this.timer = setInterval(this.autoPlay, this.inv)
      // }
    },
    created () {
      // this.play()
    }

  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .slide {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 100%;
    height: 500px;
  }
  // li {
  //   position: absolute;
  // }
  // img {
  //   display: block;
  //   width: 100%;
  //   height: 500px;
  // }
  // .bar {
  //   position: absolute;
  //   width: 100%;
  //   bottom: 10px;
  //   margin: 0 auto;
  //   z-index: 10;
  //   text-align: center;
  // }
  // .bar span {
  //   width: 10px;
  //   height: 10px;
  //   border-radius: 50%;
  //   background: rgba(255,255,255,0.5);
  //   display: inline-block;
  //   margin-right: 10px;
  // }
  // .active {
  //   background: rgba(255,255,255,1) !important;
  // }



  // .image-enter-active {
  //   transform: translateX(0);
  //   transition: all 1.5s ease;
  // }
  // .image-leave-active {
  //   transform: translateX(-100%);
  //   transition: all 1.5s ease;
  // }
  // .image-enter {
  //   transform: translateX(100%);
  // }
  // .image-leave {
  //   transform: translateX(0);
  // }

</style>
