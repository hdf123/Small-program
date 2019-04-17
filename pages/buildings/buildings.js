// pages/buildings/buildings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 113.62493,
    latitude:34.74725,
    markers: [{
      id: 1,
      latitude:34.74725,
      longitude: 113.62493,
      name: '标记地方'
    }],
    duration: "500",
    imgUrls: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360',
      'https://cdn.c nbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0ff3dc30027f3b615bfe03f1d306ee5.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2320573b3be643e29f5270a97e1a9c1d.jpg?thumb=1&w=720&h=360'
    ],
    current: 0,
    msgList: [
      {url: "url", title: "12月进入龙华时刻，万科压轴大盘将开盘，5.88万 /㎡起钜惠登场！" },
      { url: "url", title: "李先生已通过返金卡成功找到优惠 1分钟前...李先生已通过返金卡成功找到优惠 1分钟前李先生已通过返金卡成功找到优惠 1分钟前" },
      { url: "url", title: "你想和一群有志青年一起过生日嘛？" }
    ],
  },
  swiperChange: function (e) {
    var that = this;
    console.log(e);
    if (e.detail.source == 'touch') {
      that.setData({
        current: e.detail.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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