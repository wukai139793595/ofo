// pages/scanResult/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password:123
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let time = 9;
    this.setData({
      password:options.password
    })
    console.log(options)
    var timer = setInterval(()=>{
      this.setData({
        time:(--time)
      });
      if(time <= 0){
        clearInterval(timer);
        wx.redirectTo({
          url: '../billing/index?number='+options.number,
        })
      }
    },1000  )
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