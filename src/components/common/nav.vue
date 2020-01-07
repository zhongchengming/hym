<template>
    <div style="width: 100%;height: 48px;background-color: #fc2b27;" align="center">
      <div class="back" style="width: 40px;height: 20px;" @click="back" v-bind:style="{backgroundImage:'url(' + bg + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'}">
        <i class="icon-back"></i>
      </div>
      <label style="text-align: center;font-size: 17px;color: white;height: 48px;line-height: 48px">{{title}}</label>
    </div>
</template>

<script>
export default {
  name: 'nav',
  data () { // es6 写法
    return {
      bg: require('../../assets/whiteRetutnUp@3x.png'),
      scrolly: 0
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  },
  props: ['title']
}
</script>
