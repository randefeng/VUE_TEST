<template>
    <div>
    <div class="header">
        <div style="border-bottom:1px solid #d2d2d2;display: flex;height:44px;align-items: center;
">
            <div style="flex:1">林州新商代</div>
            <div>关注</div>
          
        </div>
      <ul id="titel"  style="display: flex;height:44px;align-items: center;">
        <li style="">
          首页
        </li>
        <li>
          旺铺信息
        </li>
        <li>
          旺铺信息
        </li>
        <li style="">
          旺铺信息
        </li>
      </ul>
    </div>
    <div style="background-color:#d2d2d2;height:3em;margin-top:5em">&nbsp</div>
        <div>
        <div style =" display:flex;line-height:3em; border-bottom:2px solid #d2d2d2;">
           <div style ="flex:1;margin:0em 0.5em 0em 0.5em">德玛西亚招聘</div>
            <div>举报？</div>
       </div>
        <div class="styleSize" style="margin:0em 0.5em 0em 0.5em;border-bottom:2px solid #d2d2d2 ">我是努努德马西小盖伦我是努努德马西小盖伦我是努努德马西小盖伦我是努努德马西小盖伦我是努努德马西小盖伦</div>

        </div>
            <div style="display: flex;">
                <div style="display: flex; flex:1;flex-direction:column  ">
                    <div style="flex:1">
                       <ul id="time01" style="display: flex; margin-top:0.5rem">
                                <li>
                                    联系电话：<span>158888888</span>
                                </li>
                            </ul>
                            <ul id="time02" style="display: flex; margin-top:0.5rem">
                                <li style="font-size: .7rem">
                                <span>2016-8-26&nbsp;&nbsp; </span>
                                <span>17:12:12 &nbsp;&nbsp;</span>
                                <span>浏览量：&nbsp;&nbsp; </span>
                                <span>1111次</span>
                                </li>
                            </ul>
                    </div>
                </div>
                <div style="display: flex;justify-content: center;align-items: flex-end;">
                    <img src="/static/phone.png" style="width:100px;height:40px">
                </div>
            </div>
             <div class="" style="margin-top:10px ;font-size: .7rem;">联系时请说明在XXX-今日访谈</div>
                <div style="margin:1rem 0rem 1rem 0rem; border-bottom:2px solid #d2d2d2"></div>
             <div style="display: flex;">
                    <img src="/static/lunbo_2.png" style="width:100%;height:100%">
             </div>
             <div style="display: flex;">
                    <img src="/static/lunbo_1.png" style="width:100%;height:100%">
             </div>
            <div style="margin:1rem 0rem 1rem 0rem; border-bottom:2px solid #d2d2d2"></div>
            <tab_></tab_>
        </div>
</template>

<script>
import { Badge } from 'vux'
import tab_ from './tabPage.vue'
export default {
    components: {
        tab_
    },
    data() {

        return {

               arr:[1,2,3,4,5],
        }
    }
}
</script>
<style>
 .header{ position:fixed; left:0; top:0; width:100%; height:88px; z-index:9999; background-color:white;}
#ul li {
    color: #fff;
    background-color: #01a0eb;
    font-size: 2rem;
    list-style-type: none;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
#titel li{
    flex:1;
    list-style-type: none;
}
#ul1 li {
    list-style-type: none;
}

#time01 li {
    list-style-type: none;
}

#time02 li {
    list-style-type: none;
}

.styleSize {
    width: auto;
    margin-top: 12px;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;

    color: #5e5e5e;
    line-height: 24px;
    letter-spacing: 1px
}
</style>