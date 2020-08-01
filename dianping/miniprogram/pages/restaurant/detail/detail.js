// miniprogram/pages/restaurant/detail/detail.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    restaurant: {},
    comments: [],
    rating: 'None',
    ratings: [1, 2, 3, 4, 5],
    currentUser: {},
    meals: [],

  },
  createOrder: function(e){
    console.log("e in creatOder", e)
    let currentUser = this.data.currentUser
    const mealId = e.currentTarget.dataset.id
    let Orders = new wx.BaaS.TableObject('orders')
    let Meals = new wx.BaaS.TableObject('meals')
    console.log("this.data.meals", this.data.meals)
    const meal = this.data.meals.find(element => element.id === mealId)
    console.log("meal",meal)
    console.log("meal.points",meal.points)
    // too slow to go back to the table
    // Meals.get(mealId).then((res) => { 
    //   // res here has correct points
    //   console.log('res in Meals get mealID', res)
    //   this.setData({
    //     points: res.data.points
    //   })
    // })
    // console.log("this.data in createOder", this.data)
    let newOrder = Orders.create()

    const orderData = {
      quantity: 1,
      meal_id: mealId,
      points: meal.points
    }

    newOrder.set(orderData)

    newOrder.save().then((res) =>{
      wx.showToast({
        title: 'Order Sent!',
        icon: 'success',
        duration: 2000,
        mask: true,
      })
      // let points = res.data.points
      console.log("res.data.points inside newOrder save", res.data.points)
      // console.log("this.data.points", this.data.points)
      // to set and get need to be wrapped by getCurrentUser or the currentUser is null
      // the second user has already been the JSON
      // the first user is the super user
      wx.BaaS.auth.getCurrentUser().then(user => {
        let currentPoints = user.get("points")
        if (meal.points + currentPoints < 0) {
          wx.showModal({
            title: 'Uh oh',
            content: 'Order meals to get more points!',
          })
        } else { 
          user.set("points", currentPoints + res.data.points).update().then((user) => {
          console.log("res in currentUser set", user)
          wx.reLaunch({
            url: '/pages/profile/index/index' // show list of orders in user dashboard
          })
          app.globalData.userInfo = user.data
        })
        }
      })
  })
},

createReviewOld: function() {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({id: 3, name: 'Stefan'});
    }, 10000);
  })
  console.log('starting promise');

  const showPromise = promise.then((res) => {
    console.log('the promise is done!', res);
  })

  console.log('showPromise', showPromise);
},

createReview: function(e){
  console.log('create review', e)
  const content = e.detail.value.comment

  let Reviews = new wx.BaaS.TableObject('comments')
  // create an object
  let newReview = Reviews.create()
  console.log("newReview", newReview)
  // refer to the page
  console.log('this', this)
  console.log('this.data', this.data)
  const data = {
    restaurant_id: this.data.restaurant.id,
    rating: this.data.rating,
    comment: content
  }

  newReview.set(data)
  console.log("newReview after set(data)", newReview)
  // save returns promise, because it's slow
  // like an object
  // that gives signal 
  // res/ err after promise
  // then go into then
  newReview.save().then((res) => {
    console.log('save res', res)
    const newReviews = this.data.comments
    newReviews.push(res.data)
    this.setData({
      comments: newReviews
    })
  }, (err) => {
  });
},
onRate: function(e) {
  console.log('change rating', e)
  const index = e.detail.value
  // modify the rating in the data
  this.setData({
    rating: this.data.ratings[index]
  })
},
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let app = getApp()
    this.setData({
      currentUser: app.globalData.userInfo,
    })
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
    let Meals = new wx.BaaS.TableObject('meals')
    // No need to get another query
    Meals.setQuery(query).find().then((res) => {
      console.log("res in Meals setQuery", res)
      this.setData({
        meals: res.data.objects,
      })
      let mealsSans = this.data.meals.filter(meal => - meal.points <= this.data.currentUser.points)
      this.setData({
        meals: mealsSans
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