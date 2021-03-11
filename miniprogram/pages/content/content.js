getApp().globalData.list;

Page({
    data: {
        testData: [],
        img: null,
        probability: []
    },
    onLoad: function(t) {
        console.log(t)
        this.setData({
            testData: JSON.parse(t.list),
            img: getApp().globalData.img
        });
        for (var a = this.data.testData, o = [], n = 0, i = a.length; n < i; n++) {
            var e = (100 * Number(a[n].probability)).toFixed(2);
            o.push(e);
        }
        this.setData({
            probability: o
        }), console.log(this.data.probability);
    }
});