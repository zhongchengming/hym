<template>
  <transition name="slide">
    <div style="width: 100%;height: 400px;position: fixed;z-index: 100;background-color: white">
      <Nav title="详情" :show-return="true">
         我是详情我是详情
      </Nav>
    </div>
  </transition>
</template>

<script>
import Nav from '../common/nav'
export default {
  name: 'messageDetail',
  data () { // es6 写法
    return {
      bg: require('../../assets/whiteRetutnUp@3x.png'),
      scrolly: 0
    }
  },
  created () {
    this.getMessageListTest()
  },
  methods: {
    getMessageListTest () {
    },
    back () {
      this.$router.back()
    }
  },
  components: {
    Nav
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
