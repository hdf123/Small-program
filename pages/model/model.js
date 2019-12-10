// pages/model/model.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    state:"待售",
    arr1: [{
      url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360',
      name: "5室2厅2卫",
      state:"在售",
      area: ["建面117.4㎡","朝向南"],
      features: ["南北通透","景观阳台"],
      many:"约171万/套"
    }, {
      url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      name: "6室3厅2卫",
      state: "待售",
      area: ["建面115.4㎡", "朝向南"],
      features: ["全名格局","阳台","户型方正"],
      many: "约272万/套"
    }, {
      url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      name: "7室2厅2卫",
      state: "售罄",
      area: ["建面117.4㎡", "朝向南"],
      features: ["全名格局", "阳台", "户型方正"],
      many: "约272万/套"
    }, {
      url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      name: "8室2厅2卫",
      state: "售罄",
      area: ["建面117.4㎡", "朝向南"],
      features: ["全名格局", "阳台", "户型方正"],
      many: "约272万/套"
    }, {
      url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      name: "5室2厅2卫",
      state: "售罄",
      area: ["建面117.4㎡", "朝向南"],
      features: ["全名格局", "阳台", "户型方正"],
      many: "约272万/套"
    }, {
      url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      name: "6室2厅2卫",
      state: "售罄",
      area: ["建面117.4㎡", "朝向南"],
      features: ["全名格局", "阳台", "户型方正"],
      many: "约272万/套"
    }, {
      url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      name: "7室2厅2卫",
      state: "售罄",
      area: ["建面117.4㎡", "朝向南"],
      features: ["全名格局", "阳台", "户型方正"],
      many: "约272万/套"
    }, {
      url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      name: "8室2厅2卫",
      state: "售罄",
      area: ["建面117.4㎡", "朝向南"],
      features: ["全名格局", "阳台", "户型方正"],
      many: "约272万/套"
    }]
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  // btn(e){
  //   var urlk = e.currentTarget.dataset.urlk;
  //   // var arrs = e.currentTarget.dataset.arrs;
  //   var arrs="56"
  //   console.log(arrs);
  //   wx:wx.navigateTo({
  //     url: '../preview/preview?urlk='+urlk+'&arrs='+arrs
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("name:" + options.name);
    console.log("arr：" + options.arr);
    var _this=this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,
          names: options.name,
          arrs: options.arr
        });
      }
    });
    wx.setNavigationBarTitle({
      title:"户型列表"
    })
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