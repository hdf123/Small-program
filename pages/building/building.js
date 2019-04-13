// pages/building/building.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    state: true,
    // tab切换  
    currentTab: 0,
    statek: false,
    arr1: [{ value: '不限' }, { value: '金水区' }, { value: '二七区' }, { value: '中原区' },
      { value: '郑东新区' }, { value: '管城区' }, { value: '惠济区' }
    ],
    arr2: [{ value: '不限' }, { value: '8000元/㎡以下' }, { value: '8000-10000元/㎡' },
      { value: '10000-12000元/㎡' }, { value: '12000-15000元/㎡' }, { value: '15000元-18000元/㎡' },
      { value: '18000元-20000元/㎡' },
    ],
    arr3: [{ value: '不限' }, { value: '一室' }, { value: '二室' }, { value: '三室' },
      { value: '四室' }, { value: '五室以上' }
    ],
    arr4: [{ value: '不限' }, { value: '一室' }, { value: '二室' }, { value: '三室' },
      { value: '四室' }, { value: '五室以上' }, { value: '不限' }, { value: '一室' },
      { value: '二室' }, { value: '三室' }, { value: '四室' }, { value: '五室以上' }
    ]
  },
  // 截获手动滑动
  catchTouchMove: function (res) {
    return false
  },
  SearchConfirm(){
    console.log("666");
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
    var _this = this;
    _this.setData({ currentTab: e.detail.current });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var _this = this;
    this.setData({ state: true })
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      _this.setData({
        currentTab: e.target.dataset.current
      })
    }
    return;
  },
  // 选择
  checkboxChange1: function (e) {
    var arr1 = this.data.arr1;
    this.color(e,arr1);
    this.setData({
      arr1: arr1
    })
  },
  checkboxChange2: function (e) {
    var arr2 = this.data.arr2;
    this.color(e,arr2);
    this.setData({
      arr2: arr2
    })
  },
  checkboxChange3: function (e) {
    var arr3 = this.data.arr3;
    this.color(e,arr3);
    this.setData({
      arr3: arr3
    })
  },
  color(e,arr){
    var checkArr = e.detail.value;
    for (var i = 0; i < arr.length; i++) {
      if (checkArr.indexOf(i + "") != -1) {
        arr[i].checked = true;
        arr[0].checked = false;
      } else {
        arr[i].checked = false;
      }
    }
  },
  limit1() {
    var arrksk = this.data.arr1;
    this.choose(arrksk);
    this.setData({
      arr1: arrksk,
      statek: (!this.data.statek)
    })
  },
  limit2() {
    var arrksk = this.data.arr2;
    this.choose(arrksk);
    this.setData({
      arr2: arrksk,
      statek: (!this.data.statek)
    })
  },
  limit3() {
    var arrksk = this.data.arr3;
    this.choose(arrksk);
    this.setData({
      arr3: arrksk,
      statek: (!this.data.statek)
    })
  },
  choose(arrksk){
    for (var i = 0; i < arrksk.length; i++) {
      arrksk[i].checked = false;
      arrksk[0].checked = true;
    }
  },
  btn1() {
    this.setData({
      state: false
    })
  },
  btn2() {
    this.setData({
      state: false
    })
  },
  btn3() {
    this.setData({
      state: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
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
    wx: wx.setNavigationBarTitle({
      title: '导航',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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