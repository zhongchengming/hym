<template>
  <transition name="slide">
    <div style="width: 100%;height: 100%;position: fixed;z-index: 100;background-color: white">
      <Nav title="详情" :show-return="true"></Nav>
      <div style="text-align: center;margin-top: 100px">傻林没救了</div>
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
      scrollY: 0
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
  .slide-enter-active{
    transition: all 0.3s
  }
  .slide-leave-active {
    transition: all 0.3s
  }

  .slide-enter{
    transform: translate3d(100%, 0, 0)
  }
  .slide-leave-to {
    transform: translate3d(100%, 0, 0)
  }


</style>
