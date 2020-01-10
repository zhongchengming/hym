<template>
  <div>
    <div style="width: 100%;position: fixed;">
      <Nav title="资讯" :show-return="false"/>
      <div class="article-box" v-for="item in messageList" @click="pushDetail">
        <div class="article-item">
          <div>
            <div class="article-item-title-box">
              <div class="article-item-title">{{item.title}}</div>
              <div class="article-item-time"> {{item.sendtime}}</div>
            </div>
            <img class="article-item-img"
                 src="http://img0.imgtn.bdimg.com/it/u=3372817723,2265859731&amp;fm=26&amp;gp=0.jpg"
                 alt="..."/>
          </div>

          <div class="line"/>
        </div>
      </div>
    </div>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>

</template>

<script>
import {getMessageList} from '../../js/recommend'
import Nav from '../common/nav'

export default {
  name: 'recommend',
  data () {
    return {
      messageList: [],
      isShowReturn: false,
    }
  },
  created () { //  初始化的时候执行
    this.getMessageList()
  },
  mounted: function () {

  },
  methods: {
    getMessageList () {
      // getMessageList().then((res) => {
      //   if (res.resultCode === 1) {
      //     this.messageList = res.resultBody
      //   }
      // })
      this.messageList = [{
        'title': '最强【推荐】火爆全网，最新资讯等你来获取。',
        'sendtime': '2018-09-12',
        'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999-10000&sec=1578984141&di=dc8f83158d570f41e6ce4764e5c6936b&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201411%2F20%2F20141120094948-BrytG.jpeg'
      }, {
        'title': '最强【推荐】火爆全网，最新资讯等你来获取。',
        'sendtime': '2018-09-12',
        'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999-10000&sec=1578984141&di=dc8f83158d570f41e6ce4764e5c6936b&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201411%2F20%2F20141120094948-BrytG.jpeg'
      }, {
        'title': '最强【推荐】火爆全网，最新资讯等你来获取。',
        'sendtime': '2018-09-12',
        'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999-10000&sec=1578984141&di=dc8f83158d570f41e6ce4764e5c6936b&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201411%2F20%2F20141120094948-BrytG.jpeg'
      }]
    },
    pushDetail () {
      this.$router.push({
        path: `/recommend/detail/`
      })
    }
  },
  components: {
    Nav
  }
}
</script>

<style scoped>
  .article-box {
    width: 100%;
    background-color: #FCFCFC;
  }

  .article-item {
    width: 100%;
    height: 97px;
    position: relative;
    align-content: center;
  }

  .article-item-title-box {
    position: absolute;
    left: 15px;
    top: 12px;
    width: 55%;
    height: 72px;
  }

  .article-item-title {
    height: 52px;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
  }

  .article-item-img {
    position: absolute;
    top: 12px;
    right: 15px;
    border-radius: 3px;
    width: 30%;
    height: 72px;
  }

  .article-item-time {
    font-size: small;
    height: 20px;
    color: #BCBCBC
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    background-color: #F1F1F1;
  }
  .slide-enter-active{
    transition: all 0.3s
  }

  .slide-enter{
    transform: translate3d(100%, 0, 0)
  }

</style>
