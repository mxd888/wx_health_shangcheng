// pages/self/self.js
let datas = require('../../datas.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:null,
    erweima: ['http://112.124.96.85:10080/images/my_wx.png',
      'http://112.124.96.85:10080/images/my_qq.jpg',
    ],
    show:false,
    touchS: [0, 0],
    touchE: [0, 0]
  },
  touchStart: function (e) {
    // console.log(e.touches[0].pageX)
    let sx = e.touches[0].pageX
    let sy = e.touches[0].pageY
    this.data.touchS = [sx, sy]
  },
  touchMove: function (e) {
    let sx = e.touches[0].pageX;
    let sy = e.touches[0].pageY;
    this.data.touchE = [sx, sy]
  },
  touchEnd: function (e) {
    let start = this.data.touchS
    let end = this.data.touchE
    console.log(start)
    console.log(end)
    if (start[0] < end[0] - 50 &&Math.abs(start[1] - end[1]) < 30) {
      wx.switchTab({
        url: '/pages/demos/demos',
      })
    } else if (start[0] > end[0] + 50) {
      
    } else {
      console.log('静止')
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var data = datas.data_info[3]
    this.setData({
      data
    })

  },
  wx_click:function(even){
    var index = even.target.dataset.index;
    wx.previewImage({
      current: this.data.erweima[index], // 当前显示图片的http链接
      urls: this.data.erweima // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  this.setData({
    show:true,
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
    this.setData({
      show: false,
    })
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