<template>
  <div>
    <div class="nav">
      <img v-if="showReturn" class="back-icon" src="../../assets/whiteRetutnUp@3x.png" @click="back" alt="...">
      <label :class="[showReturn ? 'title2_class' : 'title1_class']">{{title}}</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nav',
    data() { // es6 写法
      return {
        bg: require('../../assets/whiteRetutnUp@3x.png'),
        scrollY: 0,
      }
    },
    methods: {
      back() {
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
  .nav {
    position: relative;
    width: 100%;
    height: 48px;
    background-color: #fc2b27;
    text-align: center;
  }

  .back-icon {
    position: absolute;
    width: 19px;
    height: 18px;
    left: 15px;
    top: 15px;
  }

  .title1_class {
    font-size: 17px;
    color: white;
    height: 48px;
    line-height: 48px;
  }

  .title2_class {
    font-size: 17px;
    color: white;
    height: 48px;
    line-height: 48px;
  }
</style>
