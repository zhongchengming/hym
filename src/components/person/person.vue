<template>
  <div>
    <div class="mine-header">
      <div class="avatar-box">
        <img class="avatar"
             src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1081504448,1258959647&fm=26&gp=0.jpg"
             alt="...">
      </div>
      <div class="user-name">傻阿明</div>
      <div class="user-id">ID: 47798643</div>
    </div>

    <div class="control-nav"></div>
  </div>
</template>

<script>
  export default {
    name: 'person'
  }
</script>

<style scoped>
  .mine-header {
    position: relative;
    height: 180px;
    background: url("../../assets/mine_bg.jpg") no-repeat
  }

  .avatar-box {
    position: absolute;
    top: 25px;
    left: 25px;
    width: 64px;
    height: 64px;
    background-color: white;
    border-radius: 32px;
  }

  .avatar {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }

  .user-name {
    color: white;
    position: absolute;
    font-weight: bold;
    font-size: 16px;
    top: 32px;
    left: 105px;
  }

  .user-id {
    color: white;
    position: absolute;
    font-size: 14px;
    top: 62px;
    left: 105px;
  }
</style>
