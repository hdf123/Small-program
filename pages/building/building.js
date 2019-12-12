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
    sk:[],
    address:'',//区域
    price:'',//价格
    door:'',//户型
    area:'',//面积
    property:'',//物业类型
    featuresk:'',//楼盘特色
    SalesStatus:'',//销售状态
    trus: true,//加载状态
    nums:0,
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
    ],
    arrp:[{ 
      imgs:"",
      name: "中岳俪景湾", 
      state:"在售",
      address: ["住宅", "管城回族区", "管南区域"],
      features:["小户型","车位充足","绿化率高"],
      ak:"14000元/㎡",
      bk:"建面73-124㎡"
    },{
      name: "美盛象湖100",
      state: "待售",
      address: ["住宅", "惠济","邙山"],
      features: ["小户型", "车位充足", "绿化率高"],
      ak: "14500元/平",
      bk: "建面137-215㎡"
    },{
      name: "美盛象湖101",
      state: "售罄",
      address: ["商业类 ", "郑东新区", "白沙"],
      features: ["小户型", "车位充足", "绿化率高"],
      ak: "14500元/平",
      bk: "建面137-215㎡"
    }, {
        name: "美盛象湖102",
        state: "售罄",
        address: ["商业类 ", "郑东新区", "白沙"],
        features: ["小户型", "车位充足", "绿化率高"],
        ak: "14500元/平",
        bk: "建面137-215㎡"
    }, {
        name: "美盛象湖103",
        state: "售罄",
        address: ["商业类 ", "郑东新区", "白沙"],
        features: ["小户型", "车位充足", "绿化率高"],
        ak: "14500元/平",
        bk: "建面137-215㎡"
    }],
    arrk:[{
      imgs: "",
      name: "中岳俪景湾",
      state: "在售",
      address: ["住宅", "管城回族区", "管南区域"],
      features: ["小户型", "车位充足", "绿化率高"],
      ak: "14000元/㎡",
      bk: "建面73-124㎡"
    }]
  },
  // 截获手动滑动
  catchTouchMove: function (res) {
    return false
  },
  /**
   * 搜索
   */
  SearchConfirm(){
    this.setData({
      state: false
    })
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
  swichNav: function (e){
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
  checkboxChange1: function (e) {//区域
    var arr1 = this.data.arr1;
    var checkArr = e.detail.value;
    this.color(checkArr,arr1);
    this.setData({
      address: checkArr,
      arr1: arr1
    })
    console.log(checkArr);
  },
  checkboxChange2: function (e) {//价格
    var arr2 = this.data.arr2;
    var checkArr = e.detail.value;
    this.color(checkArr,arr2);
    this.setData({
      price: checkArr,
      arr2: arr2
    })
  },
  checkboxChange3: function (e) {//户型
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
    console.log(checkArr);
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
  synchronous(akk, sk) {
    for (var i = 0; i < akk.length; i++) {
      if (akk[i].checked == true) {
        sk.push(akk[i].value);
      }
    }
  },
  obtain() {
    var sk1 = [], sk2 = [], sk3 = [], sk4 = [];
    var akk1 = this.data.allGoodsFilte;
    var akk2 = this.data.typek;
    var akk3 = this.data.features;
    var akk4 = this.data.selling;
    this.synchronous(akk1, sk1);
    this.synchronous(akk2, sk2);
    this.synchronous(akk3, sk3);
    this.synchronous(akk4, sk4);
    this.setData({
      area: sk1,//面积
      property: sk2,//类型
      featuresk: sk3,//特色
      SalesStatus: sk4//状态
    })
    console.log("区域：" + this.data.address);
    console.log("价格：" + this.data.price);
    console.log("户型：" + this.data.door);
    console.log("面积：" + this.data.area);
    console.log("类型：" + this.data.property);
    console.log("特色：" + this.data.featuresk);
    console.log("状态：" + this.data.SalesStatus);
  },
  btn1() {
    this.obtain();
    this.setData({
      state: false
    })
  },
  btn2() {
    this.obtain();
    this.setData({
      state: false
    })
  },
  btn3() {
    this.obtain();
    this.setData({
      state: false
    })
  },
  btn4() {
    this.obtain();
    this.setData({
      state:false
    })
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
/**
 * 快捷选择与复选框内容同步
 */
  passk(){
    this.setData({
      currentTab: 3
    })
  },
  test1(){
    var selling = this.data.selling;
    selling[0].checked = !selling[0].checked;
    this.setData({
      selling:selling
    })
    this.obtain();
    this.passk();
  },
  test2(){
    var features = this.data.features;
    features[0].checked = !features[0].checked;
    this.setData({
      features: features
    })
    this.obtain();
    this.passk();
  },
  test3(){
    var features = this.data.features;
    features[4].checked = !features[4].checked;
    this.setData({
      features: features
    })
    this.obtain();
    this.passk();
  },
  test4(){
    var features = this.data.features;
    features[1].checked = !features[1].checked;
    this.setData({
      features: features
    })
    this.obtain();
    this.passk();
  },
  bindDownLoad: function () {
    console.log(2);
    var _this = this;
    console.log(_this.data.trus);

    if (_this.data.trus) {
      _this.popMaskTest();
      _this.setData({ trus: false });
      setTimeout(function () {
        _this.setData({
          arrp: _this.data.arrp.concat(_this.data.arrk),
          trus: true,
        });
      }, 2000);
    }
  },
  popMaskTest: function () {
    wx.showToast({
      title: '加载中...',
      duration: 2000,
      mask: true    //是否有透明蒙层，默认为false 
      //如果有透明蒙层，弹窗的期间不能点击文档内容 
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
    this.setData({
      state: false
    })
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
  // "enablePullDownRefresh": true, //开启下拉刷新；
  // "onReachBottomDistance": 50, //页面上拉触底事件触发时距页面底部距离，单位为px。
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