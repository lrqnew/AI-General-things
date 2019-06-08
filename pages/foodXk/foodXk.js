Page({
    data: {
        inputValue: "",
        inputValue1: "",
        list: [],
        food1: "",
        food2: "",
        fun: "",
        isGood: ""
    },
    bindKeyInput: function(t) {
        this.setData({
            inputValue: t.detail.value
        });
    },
    bindKeyInput1: function(t) {
        this.setData({
            inputValue1: t.detail.value
        });
    },
    food: function() {
        var t = this;
        wx.showLoading({
            title: "正在查询"
        }), wx.request({
            url: "https://www.xjihe.com/api/cook/foodrelation",
            type: "get",
            data: {
                apikey: "fOXIAqwQbVSwwtt6ZJu4aRHVg07FVNgX",
                food: this.data.inputValue + "+" + this.data.inputValue1,
                page: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(n) {
                wx.hideLoading(), t.setData({
                    list: n.data.result
                }), "" == n.data.result && (wx.showModal({
                    title: "提示！",
                    content: "这两种食物同吃不会出现不好的反应"
                }), wx.hideLoading()), console.log(n.data.result[0]);
            }
        });
    }
});