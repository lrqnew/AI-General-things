// pages/faceIndex/faceIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  Face: function (a) {
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
            cloudPath: 'faceRec/' + Date.now() + '.jpg', //保存在云端的路径及文件名
            success: res => {
              let fileID = res.fileID;
              //调用云函数
              wx.cloud.callFunction({
                name: 'faceRec',
                data: {
                  fileID: fileID,
                }
              }).then(res => {
                console.log(res)
                wx.hideLoading(), wx.navigateTo({
                  url: "../face/face?list=" + JSON.stringify(res.result.result.face_list)
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

        // wx.uploadFile({
        //   url: "https://wx.oneint.cn/api/identify/face",
        //   filePath: e[0],
        //   name: "file",
        //   formData: {
        //     user: "test"
        //   },
        //   success: function (a) {
        //     if (a.data == 0) {
        //       wx.showToast({
        //         title: '图片含有敏感信息，请重新上传',
        //         icon: 'none',
        //         duration: 2000
        //       })
        //     } else {
        //     "no" == a.data ? (wx.showModal({
        //       title: "错误！",
        //       content: "这不是人脸"
        //     }), wx.hideLoading()) : (wx.hideLoading(), wx.navigateTo({
        //         url: "../face/face?list=" + a.data
        //     }));
        //   }}
        // });
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})