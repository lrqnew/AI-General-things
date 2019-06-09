// pages/cpsbIndex/cpsbIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
 
  },
  
  //拍照识菜
  Dishes: function (a) {
    let types=a.currentTarget.id;
    wx.chooseImage({
        count: 1,
        sizeType: [ "original", "compressed" ],
      sourceType: [types],
        success: function(a) {
            var e = a.tempFilePaths;
            getApp().globalData.img = e, wx.showLoading({
                title: "正在识别"
            }), wx.uploadFile({
              url: "https://wx.wicode.cn/DishDetect.ashx",
                filePath: e[0],
                name: "file",
                formData: {
                    user: "test"
                },
                success: function(a) {
                    wx.hideLoading(), wx.navigateTo({
                        url: "../content/content?list=" + a.data
                    });
                }
            });
        }
    });
  },
})