//app.js
App({

  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)

    wx.BaaS.init('cee12fe132caffd96d58')
    wx.BaaS.auth.loginWithWechat() // 静默登录

    wx.BaaS.auth.loginWithWechat().then(user => {
      // 登录成功
      // this app which is the page
      this.globalData.userInfo = user
      console.log('logged in from app.js', user)
    }, err => {
      // 登录失败
      console.log('fail login')
    })

  },
  globalData: {
    // to compare the status in the backend whetrher someone loged in
    userInfo: null
  }
})
