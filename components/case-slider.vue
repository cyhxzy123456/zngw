<template>
  <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li class="list" v-for="(list, index) in caseSlides" v-show="index===mark" :key="index">
          <ul>
            <li class="item" v-for="(item, index) in list" :key="index" :class="{last:(index+1)%2===0}">
              <img :src="item.src" alt="">
              <span>{{item.txt}}</span>
            </li>
          </ul>
        </li>
      </transition-group>
    </div>
    <div class="bar" >
      <span class="prev" @click="prev()" @:mouseover="stop()" ></span>
      <span class="next" @click="next()" @:mouseover="stop()" ></span>
      <span v-for="(list, index) in slides" :class="{ 'active':index===mark }" @click="change(index)" :key="index"></span>
    </div>
  </div>


</template>

<script>
  export default {
    props:{
      caseSlides:{
        type:Array,
      },
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
      autoPlay () {
        this.mark++;
        if (this.mark === 4) {
          this.mark = 0
        }
      },
      play () {
        this.timer = setInterval(this.autoPlay, this.inv)
      },
      change (i) {
        this.mark = i
      },
      stop () {
        clearInterval(this.timer)
      },
      move () {
        this.timer = setInterval(this.autoPlay, this.inv)
      },
      prev(){
        console.log(this.mark)
        if (this.mark === 0) {
          this.mark= this.caseSlides.length - 1
        }
        else {
          this.mark--
        }

      },
      next(){

       console.log(this.mark)
        if (this.mark === this.caseSlides.length - 1) {
          this.mark = 0
        }
        else{
           this.mark++
        }

      }
    },
    created () {
      this.play()
    },
  /*  computed:{
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.caseSlides.length - 1
        }
        else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.caseSlides.length - 1) {
          return 0
        }
        else {
          return this.nowIndex + 1
        }
      }
    },*/

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
    width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 500px;
  }
  li.list {
    width: 100%;
    position: absolute;
    padding-left: 15px;
  }
  ul{overflow: hidden;margin:0 auto;padding-left:30px}
  li.item{position:relative;float:left;margin-right:30px;max-width:44%;box-shadow: 0 0 10px 4px rgba(0,0,0,0.1);
  img{display: inline-block;max-width:100%;height:500px;}
  span{font-size: 16px;position: absolute;bottom: 0;left:0;text-align:center; color:#fff;height:60px;line-height:60px;background: rgba(0,0,0,0.5);width:100%}
  }
  img {
    display: inline-block;
    max-width: 100%;
    height: 500px;
  }
  .bar{position: absolute;top:50%;width:100%}
  .prev{display: block;width:54px;height:54px;background: url("../static/images/index/prev.png") no-repeat;border-radius: 50%;text-align: center;left:-65px;top:50%;margin-top:-27px;float:left}
  .next{display: block;width:54px;height:54px;background: url("../static/images/index/next.png") no-repeat;border-radius: 50%;text-align: center;right:-65px;top:50%;margin-top:-27px;float:right}
  .active {
    background: rgba(255,255,255,1) !important;
  }



  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }

</style>
