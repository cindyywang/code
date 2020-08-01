//app.js
App({

  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)

    wx.BaaS.init('cee12fe132caffd96d58')

    wx.BaaS.auth.getCurrentUser().then(user => {
      // 登录成功
      // this app which is the page
      // toJSON is a API to convert the super user to JSON object type which is normally used
      // no need to use get method to geth the points
      this.globalData.userInfo = user.toJSON();
      wx.setStorageSync('userInfo', user.toJSON())
      console.log('logged in from app.js', user)
    }, err => {
      // 登录失败
      console.log('fail login')
    })

  },
  globalData: {
    // to compare the status in the backend whetrher someone loged in
    userInfo: wx.getStorageSync('userInfo') || null,
  }
})
