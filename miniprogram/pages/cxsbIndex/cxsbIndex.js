// pages/cxsbIndex/cxsbIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //拍照识车
  CarDetect: function(a) {
    let types = a.currentTarget.id;
    wx.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: [types],
      success: res=> {
        let filePath = res.tempFilePaths[0];
        getApp().globalData.img = filePath;
         wx.showLoading({
          title: "正在识别"
        });
       
        wx.cloud.uploadFile({
          filePath: filePath, //本地文件路径
            cloudPath: 'pictureRec/' + Date.now() + '.jpg', //保存在云端的路径及文件名
            success: res => {
              let fileID = res.fileID;
              //调用云函数
              wx.cloud.callFunction({
                name: 'pictureRec',
                data: {
                  fileID: fileID,
                  IdentifyType:'car'
                }
              }).then(res => {
                wx.hideLoading(), wx.navigateTo({
                  url: "../car/car?list=" + JSON.stringify(res.result.result)
                });
              }).catch(err=>{
                wx.showToast({
                  title: '图片含有敏感信息，请重新上传',
                  icon: 'none',
                  duration: 2000
                })
              })
            }
        })
      }
    });
  },

})