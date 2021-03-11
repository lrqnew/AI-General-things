// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
let AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
// 云函数入口函数
exports.main = async (event, context) => {
  // let APP_ID = args.APP_ID;
  // let API_KEY = args.API_KEY;
  // let SECRET_KEY = args.SECRET_KEY;
  let APP_ID = "10834577";
  let API_KEY = "1Pj4IF9ur4l8xqOuXgo3w4dY";
  let SECRET_KEY = "y94P13Ez68F0lAmFSuhsMjVFaKqkbr6I";

  let client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);
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
    switch (event.IdentifyType) {
      case 'vegetables':
        return await client.dishDetect(image);
      case 'car':
        return await client.carDetect(image);
      case 'animal':
        return await client.animalDetect(image);
      case 'plant':
        return await client.plantDetect(image);
      case 'advanced':
        return await client.advancedGeneral(image);
    }
    //  return await client.dishDetect(image)
  }
}