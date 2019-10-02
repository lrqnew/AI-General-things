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
            getApp().globalData.img = e,
              wx.showLoading({
                title: "正在识别"
              }),
             wx.uploadFile({
              url: "https://wx.oneint.cn/api/identify/dishDetect",
                filePath: e[0],
                name: "file",
                formData: {
                    user: "test"
                },
                success: function(a) {
                    if(a.data==0){
                      wx.showToast({
                        title: '图片含有敏感信息，请重新上传',
                        icon:'none',
                        duration:2000
                      })
                    }else{
                     
                      wx.hideLoading(), wx.navigateTo({
                        url: "../content/content?list=" + a.data
                      });
                    }
                   
                },
                fail:function(e){
                   console.log(e)
                }
            });
        }
    });
  },
})