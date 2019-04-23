// pages/comments/comments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:"../../image/like@2x.png",
    arr:[{
      name:"小白",//名称
      portrait:"",//头像
      praise:96,//点赞数量
      collected:1,
      evaluation:"户型设计合理，地理位置得天独厚，服务态度很好，周边配套齐全，性价比高。",//评价内容
      time:"2019年2月16日",//时间
      picture: ["", "", "", "", "", ""]//评价图片
    }, {
      name: "小黑",//名称
      portrait: "",//头像
      praise: 12,//点赞数量
      collected:0,
      evaluation: "户型设计合理，地理位置得天独厚，服务态度很好，周边配套齐全，性价比高。",//评价内容
      time: "2019年2月17日",//时间
      picture: []//评价图片
    }]
  },
  praise(event){
    // 获取当前点击下标
    var index = event.currentTarget.dataset.index;
    console.log(index);
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx:wx.setNavigationBarTitle({
      title: '全部评论',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // var data = this.data.arr;
    // if(){

    // }
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