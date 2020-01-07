
// import axios from 'axios'
const axios = require('axios')
export function getMessageList () {
  return axios.get('message/getMessageList')
    .then(function (response) {
      let data1 = {'title': '1111111', 'sendtime': '2018-09-12'}
      let list = []
      list.push(data1)
      list.push(data1)
      list.push(data1)
      // if (response.status === 200) {
      //   return Promise.resolve(response.data)
      // } else {
      return {'resultCode': '1', 'resultMessage': '请求成功', 'resultBody': list}
      // }
    })
    .catch(function (error) {
      console.log(error)
      let data1 = {'title': '1111111', 'sendtime': '2018-09-12'}
      let list = []
      list.push(data1)
      list.push(data1)
      list.push(data1)
      return {'resultCode': '1', 'resultMessage': '请求成功', 'resultBody': list}
    })
}

export function getMessageListThree () {
  return axios.get('message/getMessageList', {
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch(function (error) {
    console.log(error)
  })
}
