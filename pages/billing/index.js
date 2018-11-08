// pages/billing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:1234,
    hours: 0,
    minutes: 0,
    seconds: 0,
    activeText:'正在骑行',
    stopRide:false
  },
  bindStopRide:function(){
    this.setData({
      activeText:'本次骑行时间',
      stopRide:true
    })
    clearInterval(this.timeSeconds);
    this.timeSeconds = '';

  },
  returnToIndex:function(){
    if(this.timeSeconds === ''){
      wx.redirectTo({
        url: '../index/index',
      })
      
    }else{
      wx.navigateTo({
        url: '../index/index?timeSeconds='+this.timeSeconds,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      number:options.number
    })
    var h = 0,
        m = 0,
        s = 0;
    this.timeSeconds = setInterval(()=>{
      if(s == 59){
        s = 0;
        this.setData({
          minutes:(++m)
        })
        if(m == 59){
          m = 0;
          this.setData({
            hours:(++h)
          })
        }
      }
      this.setData({
        seconds:(++s)
      })
    },300)
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