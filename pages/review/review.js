Page({
  /**
   * 页面的初始数据
   */
  data: {
    texts: "",
    state:0,//是否有文字和图片，不能全部为空
    max: 200, //最多字数 (根据自己需求改变)
    tempFilePaths: []
  },
  /**
   * 字数限制
   */ 
  inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    //最多字数限制
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len, //当前字数 
    });
    this.judge(len);
  },
  /**
   * 上传图片方法
   */
  upload: function () {
    let _this = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000,
          state: 1
        })
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;
        _this.setData({
          tempFilePaths: tempFilePaths
        })
        var woke = tempFilePaths.length;
        _this.judge(woke);
      }
    })
  },
  /**
   * 预览图片方法
   */
  listenerButtonPreviewImage: function (e) {
    let index = e.target.dataset.index;
    let _this = this;
    console.log(_this.data.tempFilePaths[index]);
    console.log(_this.data.tempFilePaths);
    wx.previewImage({
      current: _this.data.tempFilePaths[index],
      urls: _this.data.tempFilePaths,
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
   *判断有木有文字或图片内容
   */
  judge: function (woke){
    if (woke>= 1) {
      this.setData({ state: 1 });
    } else if (woke< 1) {
      this.setData({ state: 0 });
    }
  },
  /**
   * 删除图片
   */
  deleteImage: function (e) {
    var _this = this;
    var tempFilePaths = _this.data.tempFilePaths;
    var index = e.currentTarget.dataset.index;//获取当前长按图片下标
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          tempFilePaths.splice(index, 1);

          var woke = tempFilePaths.length;
          _this.judge(woke);



        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        _this.setData({
          tempFilePaths
        });

      }
    })
  },
  /**
   * 提交
   */
  btn(){
    if(this.data.state==0){
      wx.showToast({
        title: '上传个锤子啊...',
        icon: 'loading',
        mask: true,
        duration: 1000,
        state: 1
      })
      return ;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx:wx.setNavigationBarTitle({
      title: '楼盘点评',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res){},
    })
  }
})