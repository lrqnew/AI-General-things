Page({
    data: {
        testData: [],
        brand: null,
        model: null,
        pixelRatio: null,
        screenWidth: null,
        screenHeight: null,
        windowWidth: null,
        windowHeight: null,
        statusBarHeight: null,
        language: null,
        version: null,
        system: null,
        platform: null,
        fontSizeSetting: null,
        SDKVersion: null
    },
    onLoad: function(t) {
        this.setData({
            testData: JSON.parse(t.list)
        }), this.setData({
            brand: this.data.testData.brand,
            model: this.data.testData.model,
            pixelRatio: this.data.testData.pixelRatio,
            screenWidth: this.data.testData.screenWidth,
            screenHeight: this.data.testData.screenHeight,
            windowWidth: this.data.testData.windowWidth,
            windowHeight: this.data.testData.windowHeight,
            statusBarHeight: this.data.testData.statusBarHeight,
            language: this.data.testData.language,
            version: this.data.testData.version,
            system: this.data.testData.system,
            platform: this.data.testData.platform,
            fontSizeSetting: this.data.testData.fontSizeSetting,
            SDKVersion: this.data.testData.SDKVersion
        });
    }
});