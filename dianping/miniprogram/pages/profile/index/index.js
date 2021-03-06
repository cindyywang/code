// miniprogram/pages/profile/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    currentUser: null,
    currentPoints: 0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    const app = getApp()

    console.log('userData', app.globalData.userInfo)
    this.setData({
      currentUser: app.globalData.userInfo,
    })

  },
  userInfoHandler(data) {
    const app = getApp()
    wx.BaaS.auth.loginWithWechat(data).then(user => {
      console.log('from userInfoHandler callback')
      console.log('user', user)
      app.globalData.userInfo = user
      this.setData({
        currentUser: user
      })
    }, err => {

    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    // move 

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})