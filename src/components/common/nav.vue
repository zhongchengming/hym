<template>
  <div>
      <div style="width: 100%;height: 48px;background-color: #fc2b27;" >
        <label v-if="showReturn" style="width: 40px;height: 40px;margin-left: 20px;font-size: 17px;color: white" @click="back"> < 返回</label>
        <label :class="[showReturn?'title2_class':'title1_class']">{{title}}</label>
      </div>
  </div>

</template>

<script>
export default {
  name: 'nav',
  data () { // es6 写法
    return {
      bg: require('../../assets/whiteRetutnUp@3x.png'),
      scrolly: 0,
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    showReturn: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

  .title1_class{
    text-align: center;font-size: 17px;color: white;height: 48px;line-height: 48px;margin-left: calc(50% - 20px)
  }
  .title2_class{
    text-align: center;font-size: 17px;color: white;height: 48px;line-height: 48px;margin-left: calc(50% - 100px)
  }
</style>
