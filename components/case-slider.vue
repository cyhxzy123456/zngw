<template>
  <div class="case-slide">
    <div class="case-slideshow">
      <el-carousel :interval="4000" height="500px" indicator-position="none" arrow="never" ref="carousel" :autoplay=isautoPlay>
        <el-carousel-item v-for="(list, index) in caseSlides" :key="index">
          <ul>
            <li class="item" v-for="(item, index) in list" :key="index" :class="{last:(index+1)%2===0}">
              <nuxt-link :to="item.href">
                <img :src="item.src" alt="">
                <span>{{item.txt}}</span>
              </nuxt-link>
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
      <!-- <transition-group tag="ul" name="image">
        <li class="list" v-for="(list, index) in caseSlides" v-show="index===mark" :key="index">
          <ul>
            <li class="item" v-for="(item, index) in list" :key="index" :class="{last:(index+1)%2===0}">
              <nuxt-link :to="item.href">
                <img :src="item.src" alt="">
                <span>{{item.txt}}</span>
              </nuxt-link>
            </li>
          </ul>
        </li>
      </transition-group> -->
    </div>
    <div class="bar">
      <span class="prev" @click="prev()" @mouseover="stop()" @mouseleave="autoPlay()"></span>
      <span class="next" @click="next()" @mouseover="stop()" @mouseleave="autoPlay()"></span>
    </div>
  </div>


</template>

<script>
  export default {
    props: {
      caseSlides: {
        type: Array,
      },
      slides: {
        type: Array,
      },
      inv: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {
        isautoPlay: true,
        timer: null, //定时器
        mark: 0, //比对图片索引的变量

      }
    },
    methods: {
      autoPlay() {
        this.isautoPlay = true
      },
      stop() {
        this.isautoPlay = false
      },
      prev() {
        console.log(this.$refs.carousel);
        this.$refs.carousel.prev()

      },
      next() {
        // console.log(this.$refs.carousel);
        this.$refs.carousel.next()

      }
    },
    //  created () {
    //  this.play()
    //  },
    // computed:{
    //   prevIndex () {
    //     if (this.nowIndex === 0) {
    //       return this.caseSlides.length - 1
    //     }
    //     else {
    //       return this.nowIndex - 1
    //     }
    //   },
    //   nextIndex () {
    //     if (this.nowIndex === this.caseSlides.length - 1) {
    //       return 0
    //     }
    //     else {
    //       return this.nowIndex + 1
    //     }
    //   }

  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .case-slide {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  .case-slideshow {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 500px;
    overflow: hidden;
  }

  // li.list {
  //   width: 100%;
  //   position: absolute;
  // }
  ul {
    overflow: hidden;
    margin: 0 auto;
  }

  li.item {
    position: relative;
    float: left;
    margin-right: 30px;
    max-width: 48.7%;
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);

    img {
      display: inline-block;
      max-width: 100%;
      height: 500px;
    }

    span {
      font-size: 16px;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
      color: #fff;
      height: 60px;
      line-height: 60px;
      background: rgba(0, 0, 0, 0.5);
      width: 100%
    }
  }

  img {
    display: inline-block;
    max-width: 100%;
    height: 500px;
  }

  .bar {
    position: absolute;
    top: 50%;
    width: 114%;
    left: -83px;
  }

  .prev {
    display: block;
    width: 54px;
    height: 54px;
    background: url("../static/images/index/prev.png") no-repeat;
    border-radius: 50%;
    text-align: center;
    left: -65px;
    top: 50%;
    margin-top: -27px;
    float: left
  }

  .next {
    display: block;
    width: 54px;
    height: 54px;
    background: url("../static/images/index/next.png") no-repeat;
    border-radius: 50%;
    text-align: center;
    right: -65px;
    top: 50%;
    margin-top: -27px;
    float: right
  }

  .active {
    background: rgba(255, 255, 255, 1) !important;
  }



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
