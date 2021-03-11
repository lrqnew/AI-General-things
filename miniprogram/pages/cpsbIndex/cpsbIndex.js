
Page({
  //拍照识菜
  Dishes: function (a) {
    let types = a.currentTarget.id;
    wx.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: [types],
      success: res => {
        let filePath = res.tempFilePaths[0]
        getApp().globalData.img = filePath
          wx.showLoading({
            title: "正在识别"
          }),
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
                  IdentifyType:'vegetables'
                }
              }).then(res => {
                wx.hideLoading(), wx.navigateTo({
                  url: "../content/content?list=" + JSON.stringify(res.result.result)
                });
              }).catch(err=>{
                wx.showToast({
                  title: '图片含有敏感信息，请重新上传',
                  icon: 'none',
                  duration: 2000
                })
              })
            }
          });
      }
    });
  },
})