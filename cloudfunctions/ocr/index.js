// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
var AipOcrClient = require("baidu-aip-sdk").ocr;
// 云函数入口函数
exports.main = async (event, context) => {
  let APP_ID = "11513382";
  let API_KEY = "7iAH8RQGmBgeWT9q0M5VS7DR";
  let SECRET_KEY = "mFqto9hojNO3A0if0rBOYvlXgxgzY6ps";
  let client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);
  let fileID = event.fileID;
  let res = await cloud.downloadFile({
    fileID: fileID,
  })
  let image = res.fileContent.toString("base64");

  let checkRes = await cloud.openapi.security.imgSecCheck({
    media: {
      contentType: 'image/png',
      value: res.fileContent
    }
  })
  if (checkRes.errCode === 0) {
    let options = {};
    options["language_type"] = event.lang;
    options["detect_direction"] = "true";
    return await client.accurateBasic(image,options)
    
  }
}