<style scoped>
  .flex{
    display: flex;
    width:100%;
  }
.box {
            display: flex;
            justify-content: center;
            align-items: center;
        }
      .div1 {
        width: 150px;
        height: 150px;
        border: 1px solid #00F;
    }
</style>


<template>
<div>
    <!-- <div id="list" style="display: flex;flex-direction: row;justify-content:space-between;flex-wrap: wrap;">
        <div class="div1" onclick="openDetal(1)">
            <div style=" width:100%;height:8em">
              <img class="preview-img"  v-for="(item, index)  in list" :key="item.id" :src="item.src" height="100%" @click="$preview.open(index, list)">
            </div>
            <div class="box">测试视频</div>
        </div>
    </div> -->
 <div>
      <div  id="box"    style="">
           <div>
             <img class="preview-img"   height="100" src="https://placekitten.com/1200/900">
           </div>
           <div>
            111111111111
           </div>
       </div>
 </div>
</div>
</template>
 
<script>
export default {
    data () {
      return {
        list: [{
          src: '/static/fenlei_1.png',
          w: 600,
          h: 400
        }, {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }, {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }, {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }, {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }, {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }]
      }
    },
      open(){
alert(1)

      }
  }
</script>
