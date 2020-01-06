<template>
  <div id="app">
    <tab></tab>
    <!--缓存在内存中，不会再次请求界面-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import Tab from './components/common/tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style>
#app {
    background-color: white;
}
  body{
    padding: 0;
    margin: 0;
  }
</style>
