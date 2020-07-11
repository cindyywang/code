const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  // random generated num between [0,1) <= 0.2 is evaluated to true
  return Math.random() <= 0.2
};

const newMessage = async () => {
  let data =  await fetch("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/johncalvinroberts/03-Wagon-Race/master/stories.json")
  const jsonData = data.json()
  return jsonData   // This will return a **Promise** object
};

// const newMessage = () => {
//   // TODO: return a random message as an object with two keys, subject and sender
//   let senderStr = Math.random().toString(36).substring(7)
//   let subjectStr = Math.random().toString(36).substring(7)
//   const newEmail = {
//     sender: senderStr,
//     subject: subjectStr
//   }
//   return newEmail
// };

// message is an object with subject and sender keys as parameters
const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  const unreadClass = document.querySelector("#inbox")
  unreadClass.querySelector(".unread").insertAdjacentHTML("beforeBegin", `
    <div class = "row message unread">
      <div class = "col-3"> ${message.name} </div>
      <div class = "col-9"> ${message.text} </div>
    </div>`)
};

// const refresh = () => {
//   // TODO: Implement the global refresh logic. If there is a new message,
//   //       append it to the DOM. Update the unread counter in title as well.
//   let counter = document.querySelector("#count")
//   if(hasNewMessage()){
//     counterInt = parseInt(counter.innerText[1])
//     counterInt += 1
//     counter.innerText = `(${counterInt})`
//     appendMessageToDom(newMessage())
//   }
// };

const refresh = async () => {
  const msgs = await newMessage() //msgs should contain 4 data now
  // use msgs here...
  console.log(msgs)
  msgs.forEach((msg) => {
    appendMessageToDom(msg)

  })
  let counter = document.querySelector("#count")
  // counterInt = parseInt(counter.innerText[1])
  counterInt = parseInt(counter.innerText.replace(/[()]/g, ''))
  counterInt += msgs.length
  counter.innerText = `(${counterInt})`
  appendMessageToDom(newMessage())

}




















// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

