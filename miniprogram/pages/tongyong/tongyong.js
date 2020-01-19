getApp().globalData.list;

Page({
    data: {
        testData: [],
        img: null,
        score: []
    },
    onLoad: function(t) {
        this.setData({
            testData: JSON.parse(t.list),
            img: getApp().globalData.img
        });
        for (var a = this.data.testData, o = [], n = 0, e = a.length; n < e; n++) {
            var s = (100 * Number(a[n].score)).toFixed(2);
            o.push(s);
        }
        this.setData({
            score: o
        }), console.log(this.data.testData);
    }
});