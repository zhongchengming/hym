
// import axios from 'axios'
const axios = require('axios')
export function getMessageList () {
  return axios.get('message/getMessageList')
    .then(function (response) {
      if (response.status === 200) {
        return Promise.resolve(response.data)
      } else {
        return {'resultCode': '0', 'resultMessage': '请求异常'}
      }
    })
    .catch(function (error) {
      console.log(error)
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
