// pages/preview/preview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  btn(e) {
    var aa = [1, 2, 3];
    wx: wx.navigateTo({
      url: '../all/all?id=' + aa + '&op=' + 89
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("muns:" + options.muns);
    console.log("arr："+options.arr);
    var _this=this;
    var arr = options.arr.split(",");
    wx.setNavigationBarTitle({
      title: '户型图'
    })
    this.setData({
      arr:arr,
      muns: options.muns
    })
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})