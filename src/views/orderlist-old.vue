<template>
    <div class="timeline-demo">
        
      <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
        
        <timeline style="padding-left:3rem;">
            <timeline-item v-for="(item, index) in list1" :key="index">
                <flexbox style="margin-left:-4rem;">
                    <flexbox-item :span="1/8">
                        <div style="font-size:0.85rem;color: #999999;">{{ item.createAt_date }}<br />{{ item.createAt_time }}</div>
                    </flexbox-item>
                    <flexbox-item>
                        <router-link :to="item.link2detail">
                            <h4 :class="[index === 0 ? 'recent' : '']" style="padding-left:1.2rem;">终端名称：{{ item.consignee }}</h4>
                        </router-link>
                    </flexbox-item>
                </flexbox>
                <router-link :to="item.link2detail">
                <p :class="[index === 0 ? 'recent' : '']">地址：{{ item.address }}</p>
                </router-link>
                <p :class="[index === 0 ? 'recent' : '']">
                    <group title="">
                        <cell
                        :title="item.goodsCountShow"
                        is-link
                        :border-intent="false"
                        :arrow-direction="item.showContent002 ? 'up' : 'down'"
                        @click.native="item.showContent002 = !item.showContent002"></cell>
                        </cell>
                        <template v-if="item.showContent002">
                            <cell-form-preview :border-intent="false" :list="item.orderItems"></cell-form-preview>
                        </template>
                    </group>
                    <template v-for="(item2, index2) in item.orderItems"  v-if="item2.showZengpin">
                    <group title="">

                        <cell-form-preview :border-intent="false" :list="item2.orderItemAttrs"></cell-form-preview>
                    </group>
                    </template>

                    <template v-if="item.status=='1' && item.payStatus=='0'">
                    <flexbox style="margin-top:0.5em;">
                        <flexbox-item style="text-align:center;">
                            <x-button mini type="default" @click.native="cancelOrder(item.orderCode, item.memberId)">取消订单</x-button>
                        </flexbox-item>
                        <flexbox-item style="text-align:center;">
                            <x-button mini type="primary" @click.native="confirmOrder(item.orderCode, item.memberId)">确认收款</x-button>
                        </flexbox-item>
                    </flexbox>
                    </template>
                    <template v-else-if="item.status=='2' && item.payStatus=='0'">
                    <flexbox style="margin-top:0.5em;">
                        <flexbox-item style="text-align:center;">
                            
                        </flexbox-item>
                        <flexbox-item style="text-align:center;">
                            <x-button mini type="primary">确认收款</x-button>
                        </flexbox-item>
                    </flexbox>
                    </template>
                    <template v-else-if="item.status=='3' && item.payStatus=='0'">
                    <flexbox style="margin-top:0.5em;">
                        <flexbox-item style="text-align:center;">
                            
                        </flexbox-item>
                        <flexbox-item style="text-align:center;">
                            <x-button mini type="primary">确认收款</x-button>
                        </flexbox-item>
                    </flexbox>
                    </template>
                </p>
            </timeline-item>

            
            
            
        </timeline>
        
        

        </v-scroll>


    </div>
</template>

<script>
import { Timeline, TimelineItem, XButton, Cell, CellBox, CellFormPreview, Group, Flexbox, FlexboxItem } from 'vux'
import Util from '../libs/util'
import Scroll from '../components/VScroll'

export default {
  components: {
    Timeline,
    TimelineItem,
    XButton,
    Cell, 
    CellBox, 
    CellFormPreview, 
    Group,
    Flexbox, 
    FlexboxItem,
    'v-scroll': Scroll
  },
  data () {
    return {
      count: 3,
      title2: '商品：32件',
      list: [{
        label: '漓泉白啤酒330ml*6瓶',
        value: '10件'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }],
      showContent002: false,
      title3: '赠品：漓泉白啤酒330ml*6瓶',
      value3: '3瓶',

        list1: [],
        page: 0,
        size: 10,
        totalPage : 1,
        status: 0,
        payStatus: 0,
        scrollData:{
            noFlag: false //暂无更多数据显示
        }

    }
  },
  methods: {
    onClick () {
      console.log('on click')
    },
    cancelOrder(orderid, memberId){
        var that = this;
        console.log('取消订单')
        console.log(orderid, memberId, typeof orderid);

        that.$vux.confirm.show({
            title: '提示',
            content: '确定要取消此订单吗？',
            onShow () {
              console.log('plugin show')
            },
            onHide () {
              console.log('plugin hide')
            },
            onCancel () {
              console.log('plugin cancel')
            },
            onConfirm () {
              console.log('plugin confirm')
                var postdata = {
                    "status":"5",
                    "orderCode":orderid,
                    "memberId":memberId
                }
                that.$servers.cancelOrder(postdata, function(data){
                    if(data.status==0){
                        that.$vux.toast.text('取消订单操作成功', 'bottom');
                        var postdata = {
                            page: that.page,
                            size: that.size,
                            data: {
                                status: that.status,
                                payStatus: that.payStatus,
                            }
                        }
                        that.getList(postdata);
                    }
                });
            }
          });

                
    },
    confirmOrder(orderid, memberId){
        var that = this;
        console.log('确认收款')
        console.log(orderid, memberId, typeof orderid);

        that.$vux.confirm.show({
            title: '提示',
            content: '是否确认收款？',
            onShow () {
              console.log('plugin show')
            },
            onHide () {
              console.log('plugin hide')
            },
            onCancel () {
              console.log('plugin cancel')
            },
            onConfirm () {
              console.log('plugin confirm')
                var postdata = {
                    payStatus: "1",
                    "orderCode":orderid,
                    "memberId":memberId
                }
                that.$servers.confirmOrder(postdata, function(data){
                    if(data.status==0){
                        that.$vux.toast.text('操作成功', 'bottom');
                        var postdata = {
                            page: that.page,
                            size: that.size,
                            data: {
                                status: that.status,
                                payStatus: that.payStatus,
                            }
                        }
                        that.getList(postdata);
                    }
                });
            }
          });
    },
    getList(postdata, cb) {
        postdata = postdata || {};
        var that = this;
        this.$servers.getOrderList(postdata, function(data){
            if(typeof cb === 'function'){
                cb();
            }
            //debugger;
            that.totalPage = data.data.totalPages;
            var tObj = (data.data && data.data.content) || data.data || data || [];

            for(var i = 0; i < tObj.length; i ++){
                tObj[i].createAt = Util.formatDate(tObj[i].createAt);
                if(tObj[i].createAt){
                    tObj[i].createAt_date = tObj[i].createAt.split(' ')[0];
                    tObj[i].createAt_time = tObj[i].createAt.split(' ')[1];
                }
                tObj[i].goodsCountShow = '商品：' + tObj[i].goodsCount + '件';
                tObj[i].link2detail = '/orderdetail?orderid=' + tObj[i].orderCode;

                switch(tObj[i].status){
                    // case '0': tObj[i].statusText = '待付款'; break;                
                    case '1': 
                        tObj[i].statusText = '未发货'; 
                        if(tObj[i].payStatus=='0'){
                            tObj[i].statusText += '（未付款）';    
                        }else if(tObj[i].payStatus=='1'){
                            tObj[i].statusText += '（已付款）';    
                        }
                                                
                        break;
                    case '2': 
                        tObj[i].statusText = '未收货'; 
                        if(tObj[i].payStatus=='0'){
                            tObj[i].statusText += '（未付款）';    
                        }else if(tObj[i].payStatus=='1'){
                            tObj[i].statusText += '（已付款）';    
                        }
                        
                        break;
                    case '3': 
                        tObj[i].statusText = '已收货'; 
                        if(tObj[i].payStatus=='0'){
                            tObj[i].statusText += '（未付款）';    
                        }else if(tObj[i].payStatus=='1'){
                            tObj[i].statusText += '（已付款）';    
                        }
                        
                        break;
                    case '4': tObj[i].statusText = '已完成'; break;
                    case '5': tObj[i].statusText = '已取消'; break;
                    default: break;
                }
                
                for(var j=0;j<tObj[i].orderItems.length;j++){
                    //处理商品显示
                    tObj[i].orderItems[j].label = tObj[i].orderItems[j].productName;
                    tObj[i].orderItems[j].value = tObj[i].orderItems[j].goodsCount + '件';
                    //商品默认折叠
                    tObj[i].showContent002 = false;

                    //处理图片
                    if(tObj[i].orderItems[j].productPic){
                        tObj[i].orderItems[j].productPic2 = tObj[i].orderItems[j].productPic.replace(/[\[\]\"]/gmi, '');
                        if(tObj[i].orderItems[j].productPic2){
                            tObj[i].orderItems[j].productPic2 = tObj[i].orderItems[j].productPic2.split(',')[0];
                        }
                    }

                    tObj[i].orderItems[j].showZengpin = false;
                    //遍历赠品
                    for(var k=0;k<tObj[i].orderItems[j].orderItemAttrs.length;k++){

                        //是否有赠品
                        tObj[i].orderItems[j].showZengpin = true;

                        //处理赠品显示
                        tObj[i].orderItems[j].orderItemAttrs[k].label = '赠品：' + tObj[i].orderItems[j].orderItemAttrs[k].giveProductName;
                        tObj[i].orderItems[j].orderItemAttrs[k].value = tObj[i].orderItems[j].orderItemAttrs[k].giveProductSum + '件';

                        if(tObj[i].orderItems[j].orderItemAttrs[k].productPic){
                            tObj[i].orderItems[j].orderItemAttrs[k].productPic2 = tObj[i].orderItems[j].orderItemAttrs[k].productPic.replace(/[\[\]\"]/gmi, '');
                            if(tObj[i].orderItems[j].orderItemAttrs[k].productPic2){
                                tObj[i].orderItems[j].orderItemAttrs[k].productPic2 = tObj[i].orderItems[j].orderItemAttrs[k].productPic2.split(',')[0];
                            }
                        }    
                    }   
                }
            }

            if(that.page <= 0){

                that.list1 = tObj;
                if(!(tObj && tObj.length>0)){
                    let nullData = that.$el.querySelector('.nullData');
                    nullData.innerHTML = '暂无数据';
                    that.scrollData.noFlag = true;
                }
            }else{
                that.list1 = that.list1.concat(tObj);
            }
            //debugger;


        });
    },
    onRefresh(done) {
        //下拉刷新
        this.page = 0;
        var postdata = {
            page: this.page,
            size: this.size,
            data: {
                status: this.status,
                payStatus: this.payStatus,
            }
        }
        this.getList(postdata);
        done(); // call done
    },
    onInfinite(done) {
        this.page++;
        let more = this.$el.querySelector('.load-more')
        debugger;
        if(this.page > this.totalPage - 1){
            more.style.display = 'none'; //隐藏加载条
            this.scrollData.noFlag = true;
            done();
            return;
        }

        //上拉加载更多
        var postdata = {
            page: this.page,
            size: this.size,
            data: {
                status: this.status,
                payStatus: this.payStatus,
            }
        }
        this.getList(postdata, function(){
            more.style.display = 'none'; //隐藏加载条
            done();
        });
        
    }
  },
  created: function () {
    var status = this.$route.query.status;
    var payStatus = this.$route.query.paystatus;

    this.status = status;
    this.payStatus = payStatus;

    //全部订单
    if(this.status==0){
        this.status = undefined;
        this.payStatus = undefined;
    }

    console.log(status, payStatus);
    console.log(typeof status);
    switch(status){
        case '0':
            Util.title('全部订单');
            break;
        case '1':
            if(payStatus=='0'){
                Util.title('未发货|未付款');
            }else if(payStatus==1){
                Util.title('未发货|已付款');
            }
            break;
        case '2':
            if(payStatus=='0'){
                Util.title('未收货|未付款');
            }else if(payStatus==1){
                Util.title('未收货|已付款');
            }
            break;
        case '3':
            if(payStatus=='0'){
                Util.title('已收货|未付款');
            }
            break;
        case '4':
            Util.title('已完成');
            break;
        case '5':
            Util.title('已取消');
            break;
        
    }

    var postdata = {
        page: this.page,
        size: this.size,
        data: {
            status: this.status,
            payStatus: this.payStatus,
        }
    }
    this.getList(postdata);
  }
}
</script>

<style lang="less" scoped>
.timeline-demo {
    p {
        color: #888;
        font-size: 0.8rem;
    }
    h4 {
        color: #666;
        font-weight: normal;
    }
    .recent {
        color: rgb(4, 190, 2);
    }

}
.recent .vux-label {
    color: rgb(4, 190, 2);
    font-size: 0.8rem;
}

</style>
<style>
.weui-cells {
    margin-top: 0.5em !important;
}

.vux-timeline-item{
    background-color: #FFFFFF;
}

.timeline-demo .weui-form-preview__value{
    color: red !important;
}

</style>