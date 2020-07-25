// miniprogram/pages/restaurant/detail/detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    restaurant: {},
    comments: []

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let tableName = 'restaurants'
    let id = options.id
    let Restaurant = new wx.BaaS.TableObject(tableName)
    Restaurant.get(id).then((res) => { 
      console.log(res)
      this.setData({
        restaurant: res.data
      })
    })
    let tableComments = 'comments'
    let Comments = new wx.BaaS.TableObject(tableComments)
    let query = new wx.BaaS.Query()
    query.compare('restaurant_id', '=', id)
    Comments.setQuery(query).find().then((res) => {
      this.setData({
        comments: res.data.objects
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