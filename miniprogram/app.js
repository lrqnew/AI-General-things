App({
    onLaunch: function() {
        var n = this, s = wx.getStorageSync("logs") || [];
        s.unshift(Date.now()), wx.setStorageSync("logs", s), wx.login({
            success: function(n) {}
        }), wx.getSetting({
            success: function(s) {
                s.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(s) {
                        n.globalData.userInfo = s.userInfo, n.userInfoReadyCallback && n.userInfoReadyCallback(s);
                    }
                });
            }
        });
        wx.cloud.init({
            env: 'release-y4pfm', //填写自己的环境ID
            traceUser: true,
        })
    },
    globalData: {
        userInfo: null,
        img: null
    }
});