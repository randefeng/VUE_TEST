<template>
  <div>
    <form-preview header-label="订单状态" header-value="未付款|未发货" :body-items="list" :footer-buttons="buttons"></form-preview>
    <br>
    <panel header="" :footer="footer" :list="list1" :type="type"></panel>
    <panel header="赠品" :footer="footer" :list="list2" :type="type"></panel>
    <form-preview header-label="商品结算" header-value="　" :body-items="list3" footer-buttons=""></form-preview>
    <br>
    <form-preview header-label="积分商城结算" header-value="　" :body-items="list4" footer-buttons=""></form-preview>
    <br>
    <group title="">
        <cell title="下单时间：" value="2017-6-15 14：00" ></cell>
        <cell title="订单号：" value="76555443333" ></cell>
        <cell title="交易号：" value="87655435778899900" ></cell>
    </group>

    <div style="margin-bottom: 3rem;">&nbsp;</div>
    <tabbar>
      <tabbar-item>
        <span slot="label">取消订单</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">确认收款</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>


<script>
import { FormPreview,Panel, Group, Radio, Tabbar, TabbarItem, Cell } from 'vux'
export default {
  components: {
    FormPreview,
    Panel, Group, Radio,
    Tabbar, 
    TabbarItem,
    Cell
  },
  data () {
    return {
      type: '1',
      list: [{
        label: '终端名称',
        value: '天天超市'
      }, {
        label: '手机号',
        value: '13212341234'
      }, {
        label: '终端老板',
        value: '张二狗'
      }, {
        label: '收货地址',
        value: '桂林市象山区黑山路翠竹路交叉口天天超市'
      }, {
        label: '期望配送时间',
        value: '2017-6-15 14：00'
      }],
      buttons: [],
      list1: [{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '漓泉白啤酒330ml*6瓶  整箱',
        desc: '<p style="color:red;"><span class="vux-badge">促销</span></p><p style="color:red;">￥100</p><p style="text-align:right;color:#000000;">X10</p>',
        url: ''
      },{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '漓泉白啤酒330ml*6瓶  整箱',
        desc: '<p style="color:red;"><span class="vux-badge">促销</span></p><p style="color:red;">￥100</p><p style="text-align:right;color:#000000;">X10</p>',
        url: ''
      }],
      list2: [{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '漓泉白啤酒330ml*6瓶  整箱',
        desc: '<p style="color:red;"><span class="vux-badge">促销</span></p><p style="color:red;">￥100</p><p style="text-align:right;color:#000000;">X10</p>',
        url: ''
      }],
      list3: [{
        label: '返利：',
        value: '￥1000'
      }, {
        label: '实付款：',
        value: '￥1000'
      }],
      list4: [{
        label: '积分：',
        value: '10000积分'
      }, {
        label: '返利：',
        value: '￥300'
      }],
      footer: {}
    }
  },
  created: ()=> {
    
    let myurl = 'http://www.baidu.com/'
    let postdata = {};
    this.$http.post(myurl, postdata, {timeout:1000*10}).then(response => {
      debugger;
    })
  }
}
</script>
<style>
.weui-media-box__title{
    color: #999999;
}
.weui-panel__hd{
    color: red;
}
.weui-tabbar{
    position: fixed !important;
}
</style>