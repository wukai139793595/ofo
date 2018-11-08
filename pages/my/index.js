Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionText:'登录',
    userInfo:{
      userUrl:'',
      nickname:'请登录'
    },
    btnType:'primary'
  },
  moveToWallet:function(e){
    wx.navigateTo({
      url: '../wallet/index',
    })
  },
  bindGetUserInfo:function(data){
    if(this.data.actionText === '退出登录'){
      wx.removeStorage({
        key: 'userInfo',
        success: function(res) {},
      })
      this.setData({
        actionText: '登录',
        userInfo: {
          userUrl: '',
          nickname: '请登录'
        },
        btnType: 'primary'
      })
    }else{
      data = data.detail.userInfo;
      this.setData({
        userInfo: {
          userUrl: data.avatarUrl,
          nickname: data.nickName
        },
        actionText: '退出登录',
        btnType: 'warn'
      })
      wx.setStorage({
        key: 'userInfo',
        data: {
          userInfo: {
            userUrl: data.avatarUrl,
            nickname: data.nickName
          },
          actionText: '退出登录',
          btnType: 'warn'
        },
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success: (res)=> {
        console.log(res)
        this.setData({
          userInfo: {
            userUrl: res.data.userInfo.userUrl,
            nickname:res.data.userInfo.nickName
          },
          actionText: res.data.actionText,
          btnType: res.data.btnType
        })
      },
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