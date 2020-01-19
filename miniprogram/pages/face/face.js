Page({
    data: {
        testData: [],
        age: null,
        img: null,
        sex: null,
        zhongzu: null,
        beauty: null,
        expression: null,
        glasses: null,
        face_shape: null,
        face_type: null
    },
    onLoad: function(t) {
        this.setData({
            testData: JSON.parse(t.list),
            img: getApp().globalData.img
        }), this.setData({
            age: this.data.testData[0].age,
            beauty: Number(this.data.testData[0].beauty).toFixed(2)
        }), "male" == this.data.testData[0].gender.type ? this.setData({
            sex: "男"
        }) : this.setData({
            sex: "女"
        }), "yellow" == this.data.testData[0].race.type && this.setData({
            zhongzu: "黄种人"
        }), "white" == this.data.testData[0].race.type && this.setData({
            zhongzu: "白种人"
        }), "black" == this.data.testData[0].race.type && this.setData({
            zhongzu: "黑种人"
        }), "arabs" == this.data.testData[0].race.type && this.setData({
            zhongzu: "阿拉伯人"
        }), "none" == this.data.testData[0].expression.type && this.setData({
            expression: "不笑"
        }), "smile" == this.data.testData[0].expression.type && this.setData({
            expression: "微笑"
        }), "laugh" == this.data.testData[0].expression.type && this.setData({
            expression: "大笑"
        }), "none" == this.data.testData[0].glasses.type && this.setData({
            glasses: "无眼镜"
        }), "common" == this.data.testData[0].glasses.type && this.setData({
            glasses: "普通眼镜"
        }), "sun" == this.data.testData[0].glasses.type && this.setData({
            glasses: "墨镜"
        }), "square" == this.data.testData[0].face_shape.type && this.setData({
            face_shape: "正方形"
        }), "triangle" == this.data.testData[0].face_shape.type && this.setData({
            face_shape: "三角形"
        }), "oval" == this.data.testData[0].face_shape.type && this.setData({
            face_shape: "椭圆"
        }), "heart" == this.data.testData[0].face_shape.type && this.setData({
            face_shape: "心形"
        }), "round" == this.data.testData[0].face_shape.type && this.setData({
            face_shape: "圆形"
        }), "human" == this.data.testData[0].face_type.type ? this.setData({
            face_type: "真实人脸"
        }) : this.setData({
            face_type: "卡通人脸"
        });
    }
});