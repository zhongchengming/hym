<template>
  <div class="tab">
    <div style="width: 100%;height: 1px;background-color: rgba(181,181,181,0.8)"></div>
    <router-link tag="div" class="tab-item"  to="/home">
      <div class="tab-link">首页</div>
    </router-link>

    <router-link tag="div" class="tab-item" to="/zixun">
      <div class="tab-link">资讯</div>
    </router-link>

    <router-link tag="div" class="tab-item" to="/person">
      <div class="tab-link">个人中心</div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<style scoped >
 .tab {
   background-color: white;
   width: 100%;
   height: 44px;
   position: fixed;
   bottom: 0;
 }
   .tab-item {
     display :inline-block;
     width: 100px;
     height: 100%;
     border-bottom-style: solid;
     border-bottom-width: 1px;
     text-align: center;
     font-size: 13px;
   }
  .tab-link{
    margin-top: 20px;
    text-align: center;
    color: rgba(140,140,140,0.8);
  }

</style>
