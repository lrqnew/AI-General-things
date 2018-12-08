var t = require("../../wxParse/wxParse.js");

Page({
    data: {
        list: [],
        image: null,
        content: null,
        material: null,
        peoplenum: null,
        preparetime: null,
        process: []
    },
    onLoad: function(a) {
        var e = this;
        wx.request({
            url: "https://way.jd.com/jisuapi/detail",
            data: {
                appkey: "647b4144bbac1fbf97eb52aa60914f88",
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
                }), console.log(e.data.list), console.log(e.data.list.material);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});