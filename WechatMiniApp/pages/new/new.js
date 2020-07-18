// pages/new/new.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  bindSubmit: function (event) {
    //...
    let name = event.detail.value.name;
    let content = event.detail.value.content;

    let story = {
      name: name,
      content: content
    }

    // Post data to API
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/84988/record/`,
      method: 'POST',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above

      data: story,
      success() {
        // no need for response data
        // reload index page when done
        wx.reLaunch({
          url: '/pages/index/index',
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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