// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
var AipFaceClient = require("baidu-aip-sdk").face;
// 云函数入口函数
exports.main = async (event, context) => {
  let APP_ID = "11469869";
  let API_KEY = "R1tcAli4sMELMeVIT7pXBriS";
  let SECRET_KEY = "r5H7aQ2c4h7Sfmfpzp0bHxe8FUouGiiN";
  let client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);
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
    options["face_field"] = "age,beauty,expression,face_shape,gender,glasses,race,quality,eye_status,emotion,face_type";
    options["max_face_num"] = "2";
    options["face_type"] = "LIVE";
    let imageType = "BASE64";
    return await client.detect(image,imageType, options)
  }
}