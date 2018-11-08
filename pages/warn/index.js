// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:{
      number:123,
      desc:''
    },
    btnColor:"#f2f2f2",
    checkBoxValue:[],
    addPics:'拍照/照片',
    picUrls:[],
    itemsValue:[{
      value:'刹车失灵',
      checked: false,
      color:'green'
    }, {
      value: '刹车失灵',
      checked: false,
      color: 'green'
      }, {
        value: '刹车失灵',
        checked: false,
        color: 'green'
    }, {
      value: '刹车失灵',
      checked: false,
      color: 'green'
      }, {
        value: '刹车失灵',
        checked: false,
        color: 'green'
    }, {
      value: '刹车失灵',
      checked: false,
      color: 'green'
      }, {
        value: '刹车失灵',
        checked: false,
        color: 'green'
    }, {
      value: '刹车失灵',
      checked: false,
      color: 'green'
    },]
  },
  changeNumber:function(e){
    console.log(e)
    this.setData({
      inputValue:{
        number:e.detail.value,
        desc:this.inputValue.desc
      }

    })
  },
  changeDesc:function(e){
    this.setData({
      inputValue: {
        number: this.inputValue.number,
        desc: e.detail.value
      }

    })
  },
  submit:function(e){
    var checkBoxValue = this.data.checkBoxValue;
    var picUrls = this.data.picUrls;
    if(checkBoxValue.length > 0 && picUrls.length > 0){
      wx.request({
        url: 'https://easy-mock.com/mock/5b0cc7b16224f3257a8f246a/example/oforequest',
        method: 'POST',
        success: (res) => {
          wx.showToast({
            title: res.data.data.result,
            duration:3000,
            success:()=>{
              wx.redirectTo({
                url: '../index/index',
              })
            }
          })

        }
      })
    }else{
      wx.showModal({
        title: '请填写报修信息',
        content: '故障类型和图片为必填项',
        confirmText:'填写',
        cancelText:'不填',
        success:(res)=>{
          console.log(res)
          if(res.cancel){
            wx.redirectTo({
              url: '../index/index',
            })
          }
        }
      })
    }

  },
  bindChangeValue:function(e){
    var _value = e.detail.value;
    if(e.detail.value.length > 0){
      _value = e.detail.value;
      this.setData({
        btnColor:"green",
        checkBoxValue:_value
      })
    }else{
      this.setData({
        btnColor:"#f2f2f2",
        checkBoxValue:[]
      })
    }
  },
  addPhoto:function(){
    var self = this;
    wx.chooseImage({
      success: (res)=> {
        var _picUrls = self.data.picUrls;
        var temp = res.tempFilePaths;
        temp.forEach(function(ele,index){
          _picUrls.push(ele);
        })
        this.setData({
          picUrls:_picUrls       
        })
        if(this.data.picUrls.length > 0){
          this.setData({
            addPics: '+'
          })
        }
      },
    })
  },
  deletePic:function(e){
    var _picUrls = this.data.picUrls;
    var index = e.target.dataset.index;
    _picUrls.splice(index,1);
    this.setData({
      picUrls:_picUrls
    })
    if(this.data.picUrls.length == 0){
      this.setData({
        addPics:'拍照/照片'
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