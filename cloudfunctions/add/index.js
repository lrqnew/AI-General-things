// 云函数入口文件
const cloud = require('wx-server-sdk')
const fs= require('fs')
const path = require('path')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db =cloud.database();
// 云函数入口函数
exports.main = async(event, context) => {
 const fileStream=fs.createReadStream(path.join(__dirname,'demo.JPG'));
 console
 return await cloud.uploadFile({
   cloudPath:'demo.JPG',
   fileContent:fileStream
 })
}