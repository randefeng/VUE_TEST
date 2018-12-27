<template>
    <div>
        <div v-for="item1 in arr" :key="item1">
        <div  v-on:click="openDetail">
            <div style="display: flex; align-items: center;">
                <img src="/static/phone.png" style="width:100px;height:30px">
                <div class="">我是努努德马西小盖伦</div>
            </div>
            <div class="styleSize" style="margin-top:10px">我是努努德马西小盖伦我是努努德马西小盖伦我是努努德马西小盖伦我是努努德马西小盖伦我是努努德马西小盖伦</div>
         </div>
            <div style="display: flex;">
                <div style="display: flex; flex:1">
                    <div style="flex:1">
                        <img src="/static/fenlei_1.png">
                    </div>
                    <div style="flex:1">
                        <img src="/static/fenlei_1.png">
                    </div>
                    <div style="flex:1">
                        <img src="/static/fenlei_1.png">
                    </div>
                </div>
                <div style="display: flex;justify-content: center;align-items: flex-end;">
                    <img src="/static/phone.png" style="width:100px;height:40px">
                </div>
            </div>
            <ul id="time01" style="display: flex; margin-top:0.5rem">
                <li style="width:7rem">2017-08-26</li>
                <li>浏览
                    <span>40次</span>
                </li>
            </ul>
            <ul id="time02" style="display: flex; margin-top:0.5rem">
                <li style="">联系时请说明在XXX-今日访谈</li>
            </ul>
            <div style="margin:1rem 0rem 1rem 0rem; border-bottom:2px solid #d2d2d2"></div>
        </div>
        </div>
</template>

<script>
import { Badge } from 'vux'
export default {
    data() {

        return {

               arr:[1,2,3,4,5],
        }
    },
    methods:{
         openDetail: function () {  
             var _self=this
              _self.$router.push({ path: 'contentDetail',});
         }
    }
}
</script>
<style>
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