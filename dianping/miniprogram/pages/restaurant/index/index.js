// miniprogram/pages/restaurant/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    restaurants: []

  },
  showRestaurant(event) {
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../detail/detail?id=${id}`
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let tableName = 'restaurants'
    let Restaurants = new wx.BaaS.TableObject(tableName)
    // find gives a promise, when promise is finished inside {} runs
    Restaurants.find().then((res) => { 
      console.log(res)
      // reactive, change the data on the page
      this.setData({
        restaurants: res.data.objects
      })
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