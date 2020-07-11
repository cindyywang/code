// TODO: React to a click on the button!
const button = document.querySelector("#clickme")
const disabledAndChangeText = () =>{
  button.disabled = true
  button.innerText = "Bingo!"
}
button.addEventListener("click", disabledAndChangeText)
