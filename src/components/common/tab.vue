<template>
  <div class="tab">
    <div style="width: 100%;height: 1px;background-color: rgba(181,181,181,0.8)"></div>

    <div class="tab-box">
      <router-link tag="div" class="tab-item" to="/" @click.native="tabClick(1)" >
        <div class="tab-link">
          <img class="tab-item-icon" src="../../assets/ic_recommend_red.png" alt="..." ref="tabicon1">
          <span class="tab-item-text tab-item-text-clicked" ref="tabtitle1">推荐</span>
        </div>
      </router-link>

      <router-link tag="div" class="tab-item" to="/shop" @click.native="tabClick(2)">
        <div class="tab-link">
          <img class="tab-item-icon"  alt="..." ref="tabicon2">
          <span class="tab-item-text" ref="tabtitle2">福利购</span>
        </div>
      </router-link>

      <router-link tag="div" class="tab-item" to="/course" @click.native="tabClick(3)" >
        <div class="tab-link">
          <img class="tab-item-icon" src="../../assets/ic_course_grey.png" alt="..." ref="tabicon3">
          <span class="tab-item-text" ref="tabtitle3">教程</span>
        </div>
      </router-link>

      <router-link tag="div" class="tab-item" to="/person" @click.native="tabClick(4)">
        <div class="tab-link">
          <img class="tab-item-icon" src="../../assets/ic_mine_grey.png" alt="..."  ref="tabicon4">
          <span class="tab-item-text" ref="tabtitle4">我的</span>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      icon2: require('../../assets/ic_shop_red.png')
    }
  },
  methods: {
    tabClick (e) {
      this.changeTab()
      if (e === 1) {
        this.$refs.tabtitle1.style.color = 'red'
        this.$refs.tabicon1 = require('../../assets/ic_recommend_red.png')
      }
      if (e === 2) {
        this.$refs.tabtitle2.style.color = 'red'
        this.$refs.tabicon2 = this.icon2
      }
      if (e === 3) {
        this.$refs.tabtitle3.style.color = 'red'
        this.$refs.tabicon3 = require('../../assets/ic_course_red.png')
      }
      if (e === 4) {
        this.$refs.tabtitle4.style.color = 'red'
        this.$refs.tabicon4 = require('../../assets/ic_mine_grey.png')
      }
    },
    changeTab () {
      this.$refs.tabtitle2.style.color = '#BCBCBC'
      this.$refs.tabtitle1.style.color = '#BCBCBC'
      this.$refs.tabtitle3.style.color = '#BCBCBC'
      this.$refs.tabtitle4.style.color = '#BCBCBC'
    }
  }
}
</script>

<style scoped>
  .tab {
    background-color: white;
    width: 100%;
    position: fixed;
    bottom: 0;
  }

  .tab-box {
    display: flex;
    margin-top: 4px;
    margin-bottom: 4px;
  }

  .tab-item {
    flex-grow: 1;
    height: 100%;
    text-align: center;
    font-size: xx-small;
  }

  .tab-link {
    display: inline-block;
  }

  .tab-item-icon {
    margin: 0 auto;
    display: block;
    align-content: center;
    height: 24px;
    width: 24px;
  }

  .tab-item-text {
    width: 100%;
    color: #BCBCBC;
    text-align: center;
  }

  .tab-item-text-clicked {
    color: #fc2b27 ;
  }
</style>
