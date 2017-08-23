<template>
  <div>

    <scroller>

      <group title="">
        <cell title="全部" value="" is-link link="orderlist?status=0&paystatus=0"></cell>
        <cell title="未发货|未付款" value="" is-link link="orderlist?status=1&paystatus=0"></cell>
        <cell title="未发货|已付款" value="" is-link link="orderlist?status=1&paystatus=1"></cell>
        <cell title="未收货|未付款" value="" is-link link="orderlist?status=2&paystatus=0"></cell>
        <cell title="未收货|已付款" value="" is-link link="orderlist?status=2&paystatus=1"></cell>
        <cell title="已收货|未付款" value="" is-link link="orderlist?status=3&paystatus=0"></cell>
        <cell title="已完成" value="" is-link link="orderlist?status=4"></cell>
        <cell title="已取消" value="" is-link link="orderlist?status=5"></cell>
      </group>

    </scroller>

  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods: {
    onInfinite(done) {
      setTimeout(function(){done(true);}, 500);
    },
    onRefresh(done) {
      setTimeout(function(){done();}, 500);
    },
  },
  created: function () {
    console.log('created ......')
    var postdata = {};
    var that = this;
    this.$servers.init(function(data){
      var postdata = {
        "username":"15811599820",
        "password":"000000"
      }
      that.$servers.login(postdata, function(data){
        if(data.status==0){
          console.log('login success.需替换成微信认证方式')
        }
      })
    });
  }
}
</script>

<style scoped>

</style>
