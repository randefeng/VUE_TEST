<template>

  <div class="">
    <x-header class="hdbg">
      <router-link :to="store.url">
        <span style="margin-left:15px;">{{ store.title }}</span>
      </router-link>
      <img slot="overwrite-left" class="logo4title" :src="store.icon" @click="back2index(store.url)">
      <span style="color:red;" slot="right" @click="attention2">关2注</span>
    </x-header>
    <!-- <scroller 
        :on-refresh="onRefresh"
        :on-infinite="onInfinite"> -->
    <scroller style="top: 44px;">
      <!-- 轮播图设置 -->
      <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
        <swiper-slide v-for="slide in swiperSlides" :key="slide.id" class="swslide">
          <!-- <div class="img" :style="{backgroundImage: 'url(' + slide.img + ')'}"></div> -->
          <a :href="slide.url"><img :src="slide.img" class="img2"></a>
        </swiper-slide>
      </swiper>

      <!-- 分类设置 -->
      <swiper :options="swiperOption2">
        <swiper-slide v-for="(swiperSlides2a, index) in swiperSlides2b" :key="index" class="swslide2">
          <grid :rows="4" :key="swiperSlides2.id" v-for="(swiperSlides2, index) in swiperSlides2a">
            <grid-item :label="slide.title" v-for="(slide, index) in swiperSlides2" :key="slide.img" :link="slide.url">
              <img slot="icon" :src="slide.img">
            </grid-item>
          </grid>
        </swiper-slide>
      </swiper>
      <!-- 设置搜索 -->
      <search @on-result-click="resultClick" @on-change="getResult" :results="results" v-model="search_value" position="absolute"
        :autoFixed=false @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></search>

      <ul id="ul" style="display: flex; line-height:3em">
        <li style=" margin-right:0.2em">黄金广告</li>
        <li>虚位以待</li>
      </ul>

      <ul id="ul1" style="display: flex; line-height:3em;border-bottom:2px solid #d2d2d2;font-size: 30px;">
        <li style="flex:1; margin-left:0.6em" @click="testTemplate"> 最近更新</li>
        <li>|</li>
        <li>有图优先</li>
        <li>|</li>
      </ul>
       <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
        <content1></content1>
    </scroller>

    <!-- 底部导航栏 -->
    <tabbar @on-index-change="onIndexChange">
      <tabbar-item selected>
        <img slot="icon" src="/static/fenlei_1.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="/static/fenlei_1.png">
        <span slot="label">掌上看报</span>
      </tabbar-item>
      <tabbar-item link="/aindex">
        <img slot="icon" src="/static/fenlei_1.png">
        <span slot="label">我的人脉</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="/static/fenlei_1.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>

</template>

<script>
require('swiper/dist/css/swiper.css')
import content1 from './content.vue'
import { 
    XHeader, 
    Grid, GridItem, GroupTitle,
    Search,
    Tabbar, 
    TabbarItem,
  
    XButton, 
    Cell, 
    CellBox, 
    CellFormPreview, 
    Group, 
    Flexbox, FlexboxItem 
} from 'vux'
import Util from '../libs/util'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
  components: {
    XHeader,
    Grid, GridItem, GroupTitle,
    Search,
    Tabbar, TabbarItem,
    swiper,
    swiperSlide,

    XButton,
    Cell, 
    CellBox, 
    CellFormPreview, 
    Group,
    Flexbox, 
    FlexboxItem,
    content1,
  },
  data () {
    return {
         arr:[1,2,3,4,5],
        //店铺设置
        store: {
            title: '林州新商代',
            url: '/',
            icon: '/static/my_logo.png',
        },
        //轮播图设置
        notNextTick: true,
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          paginationClickable :true,
          //mousewheelControl : true,
          observeParents:true,
          loop: true
        },
        swiperSlides: [
            {
                img: '/static/lunbo_1.png',
                url: 'http://www.baidu.com',
            },
            {
                img: '/static/lunbo_2.png',
                url: 'http://www.baidu.com',
            },
        ],

        //分类设置
        swiperOption2: {
          //autoplay: 3500,
          setWrapperSize :true,
          paginationClickable :true,
          //mousewheelControl : true,
          observeParents:true,
          //loop: true,
          //slidesPerView: 4,
          //slidesPerColumn: 2,
          //spaceBetween: 30,
          onClick(swiper, event) {

          }
        },
        swiperSlides2: [
            {
                img: '/static/fenlei_1.png',
                url: '/aindex',
                title: '店铺转租',
            },
            {
                img: '/static/fenlei_2.png',
                url: '/aindex',
                title: '楼盘开卖',
            },
            {
                img: '/static/fenlei_3.png',
                url: '/aindex',
                title: '新店开张',
            },
            {
                img: '/static/fenlei_4.png',
                url: '/aindex',
                title: '二手买卖',
            },
            {
                img: '/static/fenlei_5.png',
                url: '/aindex',
                title: '最货到店',
            },
            {
                img: '/static/fenlei_1.png',
                url: '/aindex',
                title: '店铺转租',
            },
            {
                img: '/static/fenlei_2.png',
                url: '/aindex',
                title: '楼盘开卖',
            },
            {
                img: '/static/fenlei_3.png',
                url: '/aindex',
                title: '新店开张',
            },
            {
                img: '/static/fenlei_4.png',
                url: '/aindex',
                title: '二手买卖',
            },
            {
                img: '/static/fenlei_5.png',
                url: '/aindex',
                title: '最货到店',
            },
            {
                img: '/static/fenlei_1.png',
                url: '/aindex',
                title: '店铺转租',
            },
            {
                img: '/static/fenlei_2.png',
                url: '/aindex',
                title: '楼盘开卖',
            },
            {
                img: '/static/fenlei_2.png',
                url: '/aindex',
                title: '楼盘开卖',
            },
        ],

        //搜索设置
        results: [],
        search_value: '',
    }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      swiperSlides2a() {
        var arr = [];
        let m = this.swiperSlides2.length;
        let n = Math.floor(m/4);
        for(var i=0;i<n;i++){
            arr[i] = [];
            arr[i].push(this.swiperSlides2[i*4+0]);
            arr[i].push(this.swiperSlides2[i*4+1]);
            arr[i].push(this.swiperSlides2[i*4+2]);
            arr[i].push(this.swiperSlides2[i*4+3]);
        }
        if(i*4+0<=m-1){
            arr[i] = [];
            arr[i].push(this.swiperSlides2[i*4+0])
        }
        if(i*4+1<=m-1){
            arr[i] = [];
            arr[i].push(this.swiperSlides2[i*4+1])
        }
        if(i*4+2<=m-1){
            arr[i] = [];
            arr[i].push(this.swiperSlides2[i*4+2])
        }

        return arr;
        
      },
      swiperSlides2b() {
        var arr = [];
        let m = this.swiperSlides2a.length;
        let n = Math.floor(m/2);
        for(var i=0;i<n;i++){
            arr[i] = [];
            arr[i].push(this.swiperSlides2a[i*2+0]);
            arr[i].push(this.swiperSlides2a[i*2+1]);
        }
        if(i*2+0<=m-1){
            arr[i] = [];
            arr[i].push(this.swiperSlides2a[i*2+0])
        }

        console.log(arr)

        return arr;
      },
    },
  methods: {
    //底部导航栏切换
    onIndexChange (newIndex, oldIndex) {
      console.log(newIndex, oldIndex)
    },
    //搜索设置
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'center',
        text: 'on submit:' + this.search_value
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    },
    onClick () {
      console.log('on click')
    },
    back2index (url){
        this.$router.push({ path: url, query: {}})
    },
    attention2 (){
        this.$vux.toast.text('关注该公众号', 'bottom');
    },
    onRefresh(done) {
        //下拉刷新
        setTimeout(function(){done();}, 500);
    },
    onInfinite(done) {
        //上拉加载
        setTimeout(function(){done();}, 500);
    },
    testTemplate(){
        var _self=this
         _self.$router.push({ path: './testTemplate',});
    },
  },
  mounted() {   
    // setInterval(() => {
    //     console.log('simulate async data')
    //     let swiperSlides = this.swiperSlides
    //     if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
    //   }, 3000)
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style scoped>

</style>
<style>
    .hdbg {
        background-color: #ffffff !important;
        border-bottom: #ccc solid 1px;
    }
    body {
        background-color: #ffffff !important;
    }
    .vux-header .vux-header-title {
        text-align: left !important;
        color: #000 !important;
    }
    .logo4title{
        height: 22px;
        position: relative;
        top: -3px;
        left: -3px;
    }
    .swslide {

    }
    .swslide > .img {
        width: 100%;
        height: 120px;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .swslide .img2 {
        width: 100%;
        height: 120px;
    }
    .swslide2 {
        text-align: center;
        align-items: center;
    }
    .swslide2  img {
        width: 48px;
        height: 48px;
    }
    .swslide2 > div {
        font-size: 12px;
    }
    .vux-header .vux-header-title {
        font-size: 16px !important;
    }
    .weui-grid__label {
        font-size: 12px !important;
    }
    .weui-grid {
        padding-top: 10px !important;
        padding-bottom: 10px !important;
    }
    body{
        line-height: 1 !important;
    }
    a:link {
        color: inherit;
    }
    a:visited {
        color: inherit;
    }
    a:hover {
        color: inherit;
    }
    a:active {
        color: inherit;
    }
    .weui-search-bar__label{
        top: 4px !important;
    }
    #ul li{
        color:#fff;
        background-color:#01a0eb;
         font-size:2rem;
        list-style-type:none;
        flex:1;
         display: flex;
        justify-content: center;
        align-items: center;   
    }
     #ul1 li{
        list-style-type:none;
    }
  #time01 li{
        list-style-type:none;
    }
#time02 li{
        list-style-type:none;
    }
    .styleSize
{     
      width:auto; margin-top:12px; 
       font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
     
      color:#5e5e5e;
      line-height:24px;
      letter-spacing:1px
}
</style>