// pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    as:'',
    developers:"郑州新银科置业有限公司",
    traffic: ["靠近地铁一号线", "八号线", "有公交线路B35", "45", "B2", "B12", "B66", "B67", "Y818"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx:wx.setNavigationBarTitle({
      title: '楼盘信息',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // var _this=this;
    // var asd = _this.data.traffic;
    // console.log(asd.length);
    this.setData({
      as: this.data.traffic.length-1
    })
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