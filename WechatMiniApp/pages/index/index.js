//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    stories:[],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showStory(event) {
    let data = event.currentTarget.dataset;
    let id = data.id;

    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    })
  },
  getRequestData: function(res) {
    console.log(res)
     this.setData({
       stories: res.data.objects
     })
  },
  onLoad: function (options) {
    // Save reference to page
    let page = this
    // select the name == sth, return a list
    let filter = {
      include: 'My name',
    }
    let request = {
      
      url: 'https://cloud.minapp.com/oserve/v1/table/84988/record/',
      method: 'GET',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API token from Above
      success: page.getRequestData
    }
    wx.request(request)
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
