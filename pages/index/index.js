Page({
    data: {
        array: [ "中英文混合", "英文", "葡萄牙语", "法语", "德语", "意大利语", "西班牙语", "俄语", "日语", "韩语" ],
        objectArray: [ {
            id: "CHN_ENG"
        }, {
            id: 1,
            name: "ENG"
        }, {
            id: 2,
            name: "POR"
        }, {
            id: 3,
            name: "FRE"
        }, {
            id: 4,
            name: "GER"
        }, {
            id: 5,
            name: "ITA"
        }, {
            id: 6,
            name: "SPA"
        }, {
            id: 7,
            name: "RUS"
        }, {
            id: 8,
            name: "JAP"
        }, {
            id: 9,
            name: "KOR"
        } ],
        index: 0,
        lang: "",
        imgalist: [ "https://wx.wicode.cn/images/code.jpg" ],
    },

    previewImage: function(a) {
        wx.previewImage({
            current: this.data.imgalist,
            urls: this.data.imgalist
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
    Dishes: function(a) {
      wx.navigateTo({
        url: "../cpsbIndex/cpsbIndex"
      });
        // wx.chooseImage({
        //     count: 1,
        //     sizeType: [ "original", "compressed" ],
        //     sourceType: [ "album", "camera" ],
        //     success: function(a) {
        //         var e = a.tempFilePaths;
        //         getApp().globalData.img = e, wx.showLoading({
        //             title: "正在识别"
        //         }), wx.uploadFile({
        //           url: "https://wx.wicode.cn/DishDetect.ashx",
        //             filePath: e[0],
        //             name: "file",
        //             formData: {
        //                 user: "test"
        //             },
        //             success: function(a) {
        //                 wx.hideLoading(), wx.navigateTo({
        //                     url: "../content/content?list=" + a.data
        //                 });
        //             }
        //         });
        //     }
        // });
    },
    CarDetect: function(a) {
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var e = a.tempFilePaths;
                getApp().globalData.img = e, wx.showLoading({
                    title: "正在识别"
                }), wx.uploadFile({
                  url: "https://wx.wicode.cn/CarDetect.ashx",
                    filePath: e[0],
                    name: "file",
                    formData: {
                        user: "test"
                    },
                    success: function(a) {
                        wx.hideLoading(), wx.navigateTo({
                            url: "../car/car?list=" + a.data
                        });
                    }
                });
            }
        });
    },
    AnimalDetect: function(a) {
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var e = a.tempFilePaths;
                getApp().globalData.img = e, wx.showLoading({
                    title: "正在识别"
                }), wx.uploadFile({
                  url: "https://wx.wicode.cn/AnimalDetect.ashx",
                    filePath: e[0],
                    name: "file",
                    formData: {
                        user: "test"
                    },
                    success: function(a) {
                        wx.hideLoading(), wx.navigateTo({
                            url: "../animal/animal?list=" + a.data
                        }), console.info(a.data);
                    }
                });
            }
        });
    },
    PlantDetect: function(a) {
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var e = a.tempFilePaths;
                getApp().globalData.img = e, wx.showLoading({
                    title: "正在识别"
                }), wx.uploadFile({
                  url: "https://wx.wicode.cn/PlantDetect.ashx",
                    filePath: e[0],
                    name: "file",
                    formData: {
                        user: "test"
                    },
                    success: function(a) {
                        wx.hideLoading();
                        a.data;
                        wx.navigateTo({
                            url: "../animal/animal?list=" + a.data
                        }), console.info(a.data);
                    }
                });
            }
        });
    },
    AdvancedGeneral: function(a) {
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var e = a.tempFilePaths;
                getApp().globalData.img = e, wx.showLoading({
                    title: "正在识别"
                }), wx.uploadFile({
                  url: "https://wx.wicode.cn/AdvancedGeneral.ashx",
                    filePath: e[0],
                    name: "file",
                    formData: {
                        user: "test"
                    },
                    success: function(a) {
                        wx.hideLoading();
                        a.data;
                        wx.navigateTo({
                            url: "../tongyong/tongyong?list=" + a.data
                        }), console.info(a.data);
                    }
                });
            }
        });
    },
    Face: function(a) {
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var e = a.tempFilePaths;
                getApp().globalData.img = e, wx.showLoading({
                    title: "正在识别"
                }), wx.uploadFile({
                  url: "https://wx.wicode.cn/face.ashx",
                    filePath: e[0],
                    name: "file",
                    formData: {
                        user: "test"
                    },
                    success: function(a) {
                        "0" == a.data ? (wx.showModal({
                            title: "错误！",
                            content: "这不是人脸"
                        }), wx.hideLoading()) : (wx.hideLoading(), wx.navigateTo({
                            url: "../face/face?list=" + a.data
                        }));
                    }
                });
            }
        });
    },
    PhoneInfo: function(a) {
        try {
            var e = wx.getSystemInfoSync();
            wx.navigateTo({
                url: "../phone/phone?list=" + JSON.stringify(e)
            });
        } catch (a) {}
    },
    zan: function(a) {
        wx.navigateToMiniProgram({
            appId: "wx18a2ac992306a5a4",
            path: "pages/apps/largess/detail?id=gRGI0AFk6Us%3D",
            extraData: {
                foo: "bar"
            }
        });
    },
    time: function() {
        wx.navigateToMiniProgram({
            appId: "wxa2e9e383c7b7ab85",
            path: "pages/index/index",
            extraData: {
                foo: "bar"
            }
        });
    },
    music: function() {
        wx.navigateToMiniProgram({
            appId: "wx1f921e9c51bc5a1b",
            path: "xmz_sleep/pages/homepage/homepage",
            extraData: {
                foo: "bar"
            }
        });
    },
    foodXk: function() {
        wx.navigateTo({
            url: "../foodXk/foodXk"
        });
    },
    caipu: function(a) {
        wx.navigateTo({
            url: "../caipu/caipu"
        });
    },
    about: function(a) {
        wx.navigateTo({
            url: "../about/about"
        });
    },
    bindPickerChange: function(a) {
        var e = this;
        e.setData({
            lang: e.data.objectArray[a.detail.value].id
        }), wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var t = a.tempFilePaths;
                getApp().globalData.img = t, wx.showLoading({
                    title: "正在识别"
                }), wx.uploadFile({
                  url: "https://wx.wicode.cn/Wenzi.ashx?lang=" + e.data.lang,
                    filePath: t[0],
                    name: "file",
                    formData: {
                        user: "test"
                    },
                    success: function(a) {
                        wx.hideLoading(), wx.navigateTo({
                            url: "../font/font?list=" + a.data
                        }), console.log(a.data);
                    }
                });
            }
        });
    }
});