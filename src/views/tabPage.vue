<template>
  <div>
    <tab>
      <tab-item selected @on-item-click="onItemClick">相关信息</tab-item>
      <tab-item @on-item-click="onItemClick">热门信息</tab-item>
    </tab>
    <content1 v-show="nowIndex===0"></content1>
    <div v-show="nowIndex===1" style="height:500px">tab2</div>
   <!-- <content1 v-show="nowIndex===1"></content1> -->
  </div>
  
</template>
<script>
import { Tab, TabItem } from 'vux'
// import content1 from './contentDetail.vue'
import content1 from './content.vue'
export default {
  components: {
    content1,
    // content3,
    Tab,
    TabItem
  },
  data () {
    return {
      nowIndex:0
    }
  },
  methods: {
    onItemClick (index) {
      this.nowIndex=index;
    }
  }
}
</script>

<style>

</style>
