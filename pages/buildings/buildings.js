// pages/buildings/buildings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 113.62493,
    latitude:34.74725,
    markers: [{
      latitude:34.74725,
      longitude: 113.62493,
      name: '标记位置'
    }],
    duration: "500",
    current: 0,//显示轮播位置
    imgUrls: [//轮播
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0ff3dc30027f3b615bfe03f1d306ee5.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2320573b3be643e29f5270a97e1a9c1d.jpg?thumb=1&w=720&h=360'
    ],
    msgList: [//最新动态
      {url: "url", title: "12月进入龙华时刻，万科压轴大盘将开盘，5.88万 /㎡起钜惠登场！" },
      { url: "url", title: "李先生已通过返金卡成功找到优惠 1分钟前...李先生已通过返金卡成功找到优惠 1分钟前李先生已通过返金卡成功找到优惠 1分钟前" },
      { url: "url", title: "你想和一群有志青年一起过生日嘛？" }
    ],
    door:[{//户型
      url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360',
      name: "5室2厅2卫",
      state: "在售",
      area: ["建面117.4㎡", "朝向南"],
      features: ["南北通透", "景观阳台"],
      many: "价格待定"
    },{
      url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      name: "6室3厅2卫",
      state: "待售",
      area: ["建面117.4㎡", "朝向南"],
      features: ["全名格局", "阳台", "户型方正"],
      many: "约272万/套"
    }],
    arr: [{//点评
      name: "小白",//名称
      portrait: "",//头像
      praise: 96,//点赞数量
      collected: 1,//是否点赞
      evaluation: "",//评价内容
      time: "2019年2月16日",//时间
      picture: ["", "", "", "", "", ""]//评价图片
    }, {
      name: "小黑",//名称
      portrait: "",//头像
      praise: 12,//点赞数量
      collected: 0,//是否点赞
      evaluation: "户型设计合理，地理位置得天独厚，服务态度很好，周边配套齐全，性价比高。",//评价内容
      time: "2019年2月17日",//时间
      picture: []//评价图片
    }]
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
  praise(event) {
    // 获取当前点击下标
    var index = event.currentTarget.dataset.index;
    // data中获取列表
    var message = this.data.arr;
    for (let i in message) { //遍历列表数据
      if (i == index) { //根据下标找到目标
        var collectStatus = false
        if (message[i].collected == 0) { //如果是没点赞+1
          collectStatus = true
          message[i].collected = parseInt(message[i].collected) + 1
          message[i].praise = parseInt(message[i].praise) + 1
        } else {
          collectStatus = false
          message[i].collected = parseInt(message[i].collected) - 1
          message[i].praise = parseInt(message[i].praise) - 1
        }
        wx.showToast({
          title: collectStatus ? '点赞成功' : '取消点赞',
        })
      }
    }
    this.setData({
      arr: message
    })
  },
  /**
   * 预览图片方法
   */
  listenerButtonPreviewImage: function (e) {
    let index = e.target.dataset.index;
    let _this = this;
    console.log(_this.data.imgUrls[index]);
    console.log(_this.data.imgUrls);
    wx.previewImage({
      current: _this.data.imgUrls[index],
      urls: _this.data.imgUrls,
      //这根本就不走
      success: function (res) {
        //console.log(res);
      },
      //也根本不走
      fail: function () {
        //console.log('fail')
      }
    })
  },
  /**
   * 查看更多户型
   */
  building(){
    wx.navigateTo({
      url: '../model/model?name=' + this.data.names + '&arr='+this.data.arrs
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = options.arr.split(",");
    var ars = options.ars.split(",");
    this.setData({
      names: options.name,
      arrs:arr,
      ars: ars,
      state: options.state
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