var a = require("../../utils/util.js");

Page({
  data: {
    show: !1
  },
  onLoad: function(a) {},
  onShareAppMessage: function(a) {
    return {
      title: "AI识物-文字识别、菜品识别、植物识别、动物识别、车辆识别、菜谱大全、人脸检测",
      path: "/pages/index/index",
      success: function(a) {},
      fail: function(a) {}
    };
  },
  goZan: function() {
    wx.navigateToMiniProgram({
      appId: "wx18a2ac992306a5a4",
      path: "pages/apps/largess/detail?id=gRGI0AFk6Us%3D",
      extraData: {
        foo: 'bar'
      },
      success: function(a) {
   
      }
    });
  },
  goWx: function() {
    this.setData({
      show: !0
    });
  },
  close_lay: function(a) {
    this.setData({
      show: !1
    });
  },
  copyWx: function() {
    wx.setClipboardData({
      data: "liruiqing19970527",
      success: function(s) {
        a.showModel("复制成功", "请使用微信添加朋友搜索！");
      }
    });
  }
});