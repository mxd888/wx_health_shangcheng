

Page({
  // onPullDownRefresh() 
  // {
  //   wx.stopPullDownRefresh(()=>{
  //     console.log('成功')},
  //    ()=>{
  //      console.log('失败')
  //    }
  //   )
  // },
  /**
   * 页面的初始数据
   */
  data: {
    top:0,
    scrollTop:0,
    scroll_height:0,
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
    if (start[0] < end[0] - 50) {
      console.log('右滑')
    } else if (start[0] > end[0] + 50 && Math.abs(start[1] - end[1])<30) {
     wx.switchTab({
       url: '/pages/demos/demos',
     })
    } else {
      console.log('静止')
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */

    next:function(e){
     
   var cliHeight=this.data.scroll_height/2
      console.log('半屏高度：' + cliHeight)
      var curTop =e.currentTarget.offsetTop;
      console.log('元素距离顶部高度：' + curTop)
      console.log(curTop);
   
     var scrollTop=curTop-cliHeight+500
      var scrolltop=this.data.top+500;
      this.setData({
        scrollTop: scrollTop
      })
   
    },
  onLoad: function (options) {
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
  
    var scroll_height = 750 * windowHeight / windowWidth;
   
   
    var index_app=getApp()
  var data=index_app.globalData.datas.data_info[0]
   
    this.setData({
     data,
    scroll_height: scroll_height
    })
// console.log(data);
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