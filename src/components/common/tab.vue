<template>
  <div class="tab">
    <div style="width: 100%;height: 1px;background-color: rgba(181,181,181,0.8)"></div>

    <div class="tab-box">
      <router-link tag="div" class="tab-item" to="/">
        <div class="tab-link">
          <img class="tab-item-icon" src="../../assets/ic_recommend_red.png" alt="...">
          <span class="tab-item-text tab-item-text-clicked">推荐</span>
        </div>
      </router-link>

      <router-link tag="div" class="tab-item" to="/shop">
        <div class="tab-link">
          <img class="tab-item-icon" src="../../assets/ic_shop_grey.png" alt="...">
          <span class="tab-item-text">福利购</span>
        </div>
      </router-link>

      <router-link tag="div" class="tab-item" to="/course">
        <div class="tab-link">
          <img class="tab-item-icon" src="../../assets/ic_course_grey.png" alt="...">
          <span class="tab-item-text">教程</span>
        </div>
      </router-link>

      <router-link tag="div" class="tab-item" to="/person">
        <div class="tab-link">
          <img class="tab-item-icon" src="../../assets/ic_mine_grey.png" alt="...">
          <span class="tab-item-text">我的</span>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'tab'
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
    color: #fc2b27 !important;
  }
</style>
