<template>
  <div>
    <masker style="border-radius: 2px;">
      <div class="m-img" ></div>
      <div slot="content" class="m-title">
        未结算合计总额：{{ totalMoney }}元
        <br/>
        <span class="m-time"></span>
      </div>
    </masker>

    <group-title>每月账单</group-title>
    <picker :data='years001' v-model='years001' @on-change='change'></picker>
    <br>

    <group title="">
      <cell-box :border-intent="false" class="sub-item">线上支付（<span class="span-red">结算</span>）：<span class="span-green">+ 2000.00元</span>（<span class="span-red">-1000元</span>）</cell-box>
      <cell-box :border-intent="false" class="sub-item">返利支付（<span class="span-red">结算</span>）：<span class="span-green">+ 1200.00元</span>（<span class="span-red">-1200元</span>）</cell-box>
      <cell-box :border-intent="false" class="sub-item">积分支付（<span class="span-red">结算</span>）：<span class="span-green">+ 200000积分</span>（<span class="span-red">200元</span>）</cell-box>
    </group>

    <group title="">
      <cell
      :title="title1"
      :value="title1"
      is-link
      :border-intent="false"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent001 = !showContent001">
        <div slot="default">
          <span class="vux-badge"></span>
          <span style="color: #999999;">公司公司</span>
          <p style="color: red;">- 5000.00元</p>
        </div>
      </cell>
      
      <template v-if="showContent001">
        <cell title="订单号：" value="900998877653334"></cell>
        <cell title="交易号：" value="20987665554456201707101100"></cell>
        <cell title="交易时间：" value="2017-07-10 11:00"></cell>
        <cell title="终端名称：" value="真味餐厅"></cell>
        <cell title="备注：" value="积分商城返利购物"></cell>

      </template>

      <cell
      :title="title1"
      :value="title1"
      is-link
      :border-intent="false"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent002 = !showContent002">
        <div slot="default">
          <span class="vux-badge"></span>
          <span style="color: #999999;">真味餐厅</span>
          <p style="color: green;">+ 5000.00元</p>
        </div>
      </cell>
      
      <template v-if="showContent002">
        <cell title="订单号：" value="900998877653334"></cell>
        <cell title="交易号：" value="20987665554456201707101100"></cell>
        <cell title="交易时间：" value="2017-07-10 11:00"></cell>
        <cell title="终端名称：" value="真味餐厅"></cell>
        <cell title="备注：" value="积分商城返利购物"></cell>

      </template>



    </group>

  </div>
</template>


<script>
import { Cell, CellBox, CellFormPreview, Group, Badge, Picker, GroupTitle, Masker } from 'vux'
export default {
  mounted () {
  },
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge, Picker, GroupTitle,Masker
  },
  methods: {
    onClick () {
      console.log('on click')
    },
    change (value) {
      console.log('new Value', value)
    },
  },
  data () {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }],
      money: null,
      title1: '2017/07/02',
      title2: '2017/07/02',
      showContent001: false,
      showContent002: false,
      years001: [['2017', '2016', '2015'], ['1', '2','3','4', '5', '6', '7', '8', '9', '10', '11', '12']],
      totalMoney: '100,0'
    }
  }, 
  created () {
    console.log('created ......')
    var postdata = {};
    var that = this;
    this.$servers.init();

    


  }
}
</script>

<style lang="less">
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}
.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}
.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>
<style scoped>
.sub-item{
  font-size: 0.9rem;
}
.span-red{
  color: red;
}
.span-green{
  color: green;
}
</style>