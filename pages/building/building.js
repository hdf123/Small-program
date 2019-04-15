// pages/building/building.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    state: false,// 显示隐藏
    currentTab: 99,// tab切换  
    statek: false,//预留字段
    address:'',//区域
    price:'',//价格
    door:'',//户型
    area:'',//面积
    property:'',//物业类型
    featuresk:'',//楼盘特色
    SalesStatus:'',//销售状态
    arr1: [{ value: '不限',checked: true}, { value: '金水区' }, { value: '二七区' }, { value: '中原区' },
      { value: '郑东新区' }, { value: '管城区' }, { value: '惠济区' }
    ],
    arr2: [{ value: '不限',checked: true}, { value: '8000元/㎡以下' }, { value: '8000-10000元/㎡' },
      { value: '10000-12000元/㎡' }, { value: '12000-15000元/㎡' }, { value: '15000元-18000元/㎡' },
      { value: '18000元-20000元/㎡' },
    ],
    arr3: [{ value: '不限',checked: true}, { value: '一室' }, { value: '二室' }, { value: '三室' },
      { value: '四室' }, { value: '五室以上' }
    ],
    allGoodsFilte: [
      { name: '50㎡以下', value: '0', checked: false },
      { name: '50-70㎡', value: '1', checked: false },
      { name: '70-90㎡', value: '2', checked: false },
      { name: '90-110㎡', value: '3', checked: false },
      { name: '110-130㎡', value: '4', checked: false },
      { name: '130-150㎡', value: '5', checked: false }
    ],
    typek: [
      { name: '住宅', value: '0', checked: false },
      { name: '别墅', value: '1', checked: false },
      { name: '商住', value: '2', checked: false },
      { name: '商铺', value: '3', checked: false },
      { name: '写字楼', value: '4', checked: false }
    ],
    features: [
      { name: '品质楼盘', value: '0', checked: false },
      { name: '优惠楼盘', value: '1', checked: false },
      { name: '近地铁', value: '2', checked: false },
      { name: '小户型', value: '3', checked: false },
      { name: '热门楼盘', value: '4', checked: false },
      { name: '现房', value: '5', checked: false },
      { name: '低密度', value: '6', checked: false },
      { name: '花园洋房', value: '7', checked: false }
    ],
    selling: [
      { name: '在售', value: '0', checked: false },
      { name: '待售', value: '1', checked: false },
      { name: '售罄', value: '2', checked: false }
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
  color(checkArr, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (checkArr.indexOf(i + "") != -1) {
        arr[i].checked = true;
        arr[0].checked = false;
      } else {
        arr[i].checked = false;
      }
      if (checkArr[0] == 0) {
        checkArr.shift()
      } else if (checkArr[i] == 0) {
        checkArr = []
      } else if (checkArr.length == 0) {
        arr[0].checked = true;
      }
    }
  },
  checkboxChange1: function (e) {
    var arr1 = this.data.arr1;
    var checkArr = e.detail.value;
    this.color(checkArr,arr1);
    this.setData({
      address: checkArr,
      arr1: arr1
    })
    console.log(checkArr);//选择区域
  },
  checkboxChange2: function (e) {
    var arr2 = this.data.arr2;
    var checkArr = e.detail.value;
    this.color(checkArr,arr2);
    this.setData({
      price: checkArr,
      arr2: arr2
    })
  },
  checkboxChange3: function (e) {
    var arr3 = this.data.arr3;
    var checkArr = e.detail.value;
    this.color(checkArr,arr3);
    this.setData({
      door: checkArr,
      arr3: arr3
    })
  },
  // 不限
  choose(arrksk) {
    for (var i = 0; i < arrksk.length; i++) {
      arrksk[i].checked = false;
      arrksk[0].checked = true;
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
  // 筛选
  screening(checkArr, parameter) {
    for (var i = 0; i < parameter.length; i++) {
      if (checkArr.indexOf(i + "") != -1) {
        parameter[i].checked = true;
      } else {
        parameter[i].checked = false;
      }
    }
  },
  serviceValChange1: function (e) {
    var allGoodsFilte = this.data.allGoodsFilte;
    var checkArr = e.detail.value;
    this.screening(checkArr,allGoodsFilte);
    console.log(checkArr);
    this.setData({
      allGoodsFilte: allGoodsFilte,
      area: checkArr
    })
  },
  serviceValChange2: function (e) {
    var typek = this.data.typek;
    var checkArr = e.detail.value;
    this.screening(checkArr, typek);
    console.log(checkArr);
    this.setData({
      typek: typek,
      property: checkArr
    })
  },
  serviceValChange3: function (e) {
    var features = this.data.features;
    var checkArr = e.detail.value;
    this.screening(checkArr, features);
    this.setData({
      features: features,
      featuresk: checkArr
    })
  },
  serviceValChange4: function (e) {
    var selling = this.data.selling;
    var checkArr = e.detail.value;
    this.screening(checkArr, selling);
    this.setData({
      selling: selling,
      SalesStatus: checkArr
    })
  },
  // 确认
  btn1() {
    this.setData({
      state: false
    })
    console.log("选择区域" + this.data.address);
    console.log("价格范围" + this.data.price);
    console.log("户型：" + this.data.door);
    console.log("面积：" + this.data.area);
    console.log("物业类型：" + this.data.property);
    console.log("楼盘特色：" + this.data.featuresk);
    console.log("销售状态：" + this.data.SalesStatus);
  },
  btn2() {
    this.setData({
      state: false
    })
    console.log("选择区域" + this.data.address);
    console.log("价格范围" +this.data.price);
  },
  btn3() {
    this.setData({
      state: false
    })
  },
  btn4() {
    this.setData({
      state: false
    })
    console.log("面积：" +this.data.area);
    console.log("物业类型：" + this.data.property);
    console.log("楼盘特色：" + this.data.featuresk);
    console.log("销售状态："+this.data.SalesStatus);
  },
  // 清空
  empty() {
    var allGoodsFilte = this.data.allGoodsFilte;
    var typek = this.data.typek;
    var features = this.data.features;
    var selling = this.data.selling;

    this.func(allGoodsFilte);
    this.func(typek);
    this.func(features);
    this.func(selling);
    this.setData({
      allGoodsFilte: allGoodsFilte
    })
    this.setData({
      typek: typek
    })
    this.setData({
      features: features
    })
    this.setData({
      selling: selling
    })
  },
  func(kk) {
    for (var i = 0; i < kk.length; i++) {
      kk[i].checked = false;
    }
  },
  // 同步
  test1(){
    var selling = this.data.selling;
    selling[0].checked = !selling[0].checked;


    // for (var i = 0; i < selling.length; i++) {
    //   if (checkArr.indexOf(i + "") != -1) {
    //     selling[i].checked = true;
    //   } else {
    //     selling[i].checked = false;
    //   }
    // }




    console.log(this.data.selling);



    this.setData({
      selling:selling
    })
  },
  test2(){
    var features = this.data.features;
    features[0].checked = !features[0].checked;
    this.setData({
      features: features
    })
  },
  test3(){
    var features = this.data.features;
    features[4].checked = !features[4].checked;
    this.setData({
      features: features
    })
  },
  test4(){
    var features = this.data.features;
    features[1].checked = !features[1].checked;
    this.setData({
      features: features
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