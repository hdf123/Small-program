// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    img:"../../image/choose_s.png",
    shiftk:true,
    strings:"18539",
    menu:[],
    msgList: [
      { url: "url", title: "多地首套房贷利率上浮 热点城市渐迎零折扣时代" },
      { url: "url", title: "李先生已通过返金卡成功找到优惠 1分钟前" },
      { url: "url", title: "你想和一群有志青年一起过生日嘛？" }
    ],
    listData: [
      { "code": "赵**", "text": "138****3399", "type": "39661元" },
      { "code": "赵**", "text": "138****3399", "type": "39662元" },
      { "code": "赵**", "text": "138****3399", "type": "39663元" },
      { "code": "李**", "text": "138****3399", "type": "39664元" },
      { "code": "李**", "text": "138****3399", "type": "39665元" },
      { "code": "李**", "text": "138****3399", "type": "39666元" }
    ]
  },
  formSubmit: function (e) {
    if (!this.data.shiftk){
      this.setData({
        shiftk: !this.data.shiftk,
      })
      this.termsp();
    }
    console.log('个人信息：', e.detail.value);
  },
  terms:function(){
    this.setData({
      shiftk: !this.data.shiftk,
    })
    this.termsp();
  },
  ttt:function(){
    console.log(111);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dateList = this.data.strings.split("");
    this.setData({
      menu: dateList
    })
    console.log(this.data.menu);
    this.termsp();
  },
  termsp:function(){
    if (this.data.shiftk) {
      this.setData({
        img: "../../image/choose_s.png"
      })
    } else {
      this.setData({
        img: "../../image/choose.png"
      })
    }
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