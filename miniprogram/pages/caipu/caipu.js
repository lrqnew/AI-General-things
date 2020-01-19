Page({
    data: {
        inputValue: "",
        list: []
    },
    bindKeyInput: function(t) {
        this.setData({
            inputValue: t.detail.value
        });
    },
    search: function() {
        var t = this;
        wx.showLoading({
            title: "正在查询"
        }), wx.request({
            url: "https://way.jd.com/jisuapi/search",
            data: {
                appkey: "647b4144bbac1fbf97eb52aa60914f88",
                keyword: this.data.inputValue,
                num: 20
            },
            header: {
                "content-type": "application/json"
            },
            success: function(n) {
                wx.hideLoading(), t.setData({
                    list: n.data.result.result.list
                });
            }
        });
    },
    onLoad: function(t) {
      let that=this;
      that.setData({
        inputValue:'炒鸡蛋'
      });
      that.search();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});