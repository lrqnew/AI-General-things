Page({
    data: {
        testData: [],
        text: null
    },
    copy: function() {
        var t = this;
        wx.setClipboardData({
            data: t.data.text,
            success: function(t) {
                wx.showModal({
                    title: "提示",
                    content: "复制成功",
                    success: function(t) {
                        t.confirm ? console.log("确定") : t.cancel && console.log("取消");
                    }
                });
            }
        });
    },
    onLoad: function(t) {
        this.setData({
            testData: JSON.parse(t.list),
            img: getApp().globalData.img
        });
        for (var o = this.data.testData, n = [], a = 0, e = o.length; a < e; a++) {
            var s = o[a].words;
            n.push(s);
        }
        this.setData({
            text: n.toString()
        }), console.log(this.data.text);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});