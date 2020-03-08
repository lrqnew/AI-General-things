var t = require("../../wxParse/wxParse.js");
  // 在页面中定义激励视频广告
let videoAd = null;
Page({
    data: {
        list: [],
        image: null,
        content:'',
        material: null,
        peoplenum: null,
        preparetime: null,
        process: []
    },
    onLoad: function(a) {
      // 在页面onLoad回调事件中创建激励视频广告实例
      if (wx.createRewardedVideoAd) {
        videoAd = wx.createRewardedVideoAd({
          adUnitId: 'adunit-1c11c451bfe77d27'
        })
        videoAd.onLoad(() => { })
        videoAd.onError((err) => { })
        videoAd.onClose((res) => { })
      }

      // 用户触发广告后，显示激励视频广告
      if (videoAd) {
        videoAd.show().catch(() => {
          // 失败重试
          videoAd.load()
            .then(() => videoAd.show())
            .catch(err => {
              console.log('激励视频 广告显示失败')
            })
        })
      }
        var e = this;
        wx.request({
            url: "https://way.jd.com/jisuapi/detail",
            data: {
              appkey: "fbe2e3c47fb85ab133e48f1f9f39ad5d",
                id: a.id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                e.setData({
                    list: a.data.result.result
                }), e.setData({
                    image: e.data.list.pic,
                    content: t.wxParse("content", "html", e.data.list.content, e, 5),
                    material: e.data.list.material,
                    peoplenum: e.data.list.peoplenum,
                    preparetime: e.data.list.preparetime,
                    process: e.data.list.process
                });
            }
        });
    }
});