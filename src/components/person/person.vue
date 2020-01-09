<template>
  <div class="person-box">
    <div class="mine-header">
      <div class="avatar-box">
        <img class="avatar"
             src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1081504448,1258959647&fm=26&gp=0.jpg"
             alt="...">
      </div>
      <div class="user-name">傻阿明</div>
      <div class="user-id">ID: 47798643</div>

      <div class="info-box">
        <div class="item">
          <span class="item-number">2020</span>
          <span class="item-info">金币</span>
        </div>

        <div class="divider-line"/>

        <div class="item">
          <span class="item-number">19.9</span>
          <span class="item-info">余额（元）</span>
        </div>

        <div class="divider-line"/>

        <div class="item">
          <span class="item-number">799</span>
          <span class="item-info">总收入（元）</span>
        </div>
      </div>
    </div>

    <div class="control-nav"></div>

    <div class="item-function">
      <img class="item-function-icon" src="../../assets/ic_question.png" alt="...">
      <span class="item-function-text">问题帮助</span>
      <img class="more" src="../../assets/ic_more_back.png" alt="...">
    </div>

    <div class="line"/>

  </div>
</template>

<script>
  export default {
    name: 'person'
  }
</script>

<style scoped>
  .person-box {
    background-color: #ECECEC;
  }

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

  .info-box {
    width: 100%;
    position: absolute;
    top: 110px;
    display: flex;
    text-align: center;
  }

  .divider-line {
    position: relative;
    top: 10px;
    height: 32px;
    width: 1px;
    background-color: white;
  }

  .item {
    flex-grow: 1;
  }

  .item-number {
    margin: 0 auto;
    display: block;
    align-content: center;
    font-size: 24px;
    font-weight: bold;
    color: white;
  }

  .item-info {
    margin: 0 auto;
    display: block;
    align-content: center;
    font-size: 14px;
    color: white;
  }

  .item-function {
    margin-top: 15px;
    background-color: white;
    position: relative;
    width: 100%;
    height: 50px;
    text-align: center;
  }

  .item-function-icon {
    width: 36px;
    height: 36px;
    position: absolute;
    left: 15px;
    top: 7px;
  }

  .item-function-text {
    width: 100px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    color: black;
    font-size: 16px;
    left: 44px;
    top: 10px;
  }

  .more {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 20px;
    height: 20px;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #F1F1F1;
  }
</style>
