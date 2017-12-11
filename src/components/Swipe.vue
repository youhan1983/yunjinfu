<template>
  <div class="js-image-swiper
 custom-image-swiper  custom-image-swiper-single" data-images="1">
    <div class="swiper-container">
      <div  class="swiper-wrapper">
        <div class="swp-page swiper-slide" v-for="list in lists">
          <a class="js-no-follow" v-bind:href="list.clickUrl">
            <img class="goods-main-photo fadeIn" v-bind:src="list.image">
          </a>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>

</template>
<style>

  .swp .swp-page img {
    max-width: 100%;
    max-height: 100%
  }
  .swiper-pagination-bullet{margin:0 3px;}

</style>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export  default {
    name: 'swipe',
    /*props: ['lists']*/
    props:{
      lists:{
        type: Array,
        required: true
      },
      name:{}
    },
    created(){
      console.log(document.querySelectorAll(".swiper-slide"))
    },
    mounted(){
      //console.log(document.querySelectorAll(".swiper-slide"))
      /*var mySwiper = documet.querySelector('.swiper-container', {
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        autoLoop:true
      });*/
      new Swiper('.swiper-container', {
        loop: true,
        pagination: {
        el: '.swiper-pagination',
      },
      })
    }/*,
    watch: {
      lists(val,oldVal){
        console.log(document.querySelectorAll(".swiper-slide"))
        this.$nextTick(() =>{
          console.log(document.querySelectorAll(".swiper-slide"))
        })
      }
    }*/
  }
</script>
