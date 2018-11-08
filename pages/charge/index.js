// pages/charge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  input:function(e){
     this.inputValue = parseInt(e.detail.value)
  },
  charge:function(e){
    if(this.inputValue > 0){
      wx.getStorage({
        key: 'overage',
        success: (res) => {
          wx.setStorage({
            key: 'overage',
            data: {
              balance: (res.data.balance + this.inputValue)
            },
          })
          wx.redirectTo({
            url: '../wallet/index',
          })
        },
        fail: () => {
          wx.setStorage({
            key: 'overage',
            data: {
              balance: this.inputValue
            },
            success:()=>{
              wx.redirectTo({
                url: '../wallet/index',
              })
            }
          })

        }
      })
    }else{
      wx.showModal({
        title: '金额错误',
        content: '请输入大于零的金额',
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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