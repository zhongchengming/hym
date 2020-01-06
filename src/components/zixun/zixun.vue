<template>
  <div>
    <Nav title="资讯" style=""></Nav>
    <div style="width: 100%;margin-left: 12px;" v-for="item in messageList" >
      <div style="position: relative;height: 48px;width: 100%;padding-top: 4px">
        <label style="height: 30px;width: 100%;font-size: 13px;">{{item.title}}</label>
        <div style="width: 100%;font-size: 3px;color: #737373;margin-left: calc(100% - 100px);">{{item.sendtime}}</div>
        <div style="height: 1px;width: 100%;margin-top: 1px;background-color: rgba(145,145,145,0.8);position: absolute;bottom: 1px"></div>
      </div>
    </div>
  </div>

</template>

<script>
import {getMessageList} from '../../js/zixun'
import Nav from '../common/nav'
export default {
  name: 'zixun',
  data () {
    return {
      messageList: []
    }
  },
  created () { //  初始化的时候执行
    this.getMessageList()
  },
  methods: {
    getMessageList () {
      getMessageList().then((res) => {
        if (res.resultCode === 1) {
          this.messageList = res.resultBody
        }
      })
    }
  },
  components: {
    Nav
  }
}
</script>

<style scoped>

</style>
