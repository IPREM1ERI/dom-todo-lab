//// 1.create chache references for id, button, ul
const inputEl = document.querySelector("#input")
const btnEl = document.querySelector("#submit-button")
const ulEl = document.querySelector("#todo-list")
let controller;
////. add an event listener to the button that listens for click events
btnEl.addEventListener("click",function(evt) {
if (inputEl.value === "") {
  console.log('No user input')
  controller.abort()
}
////. When clicked, create new li element 
const liEl = document.createElement("li")
//// Set li element to the text that the user has entered into the input element
liEl.textContent = inputEl.value
//// Add the new li element to the page, inside the ul element
inputEl.value = ""
//// Reset the text in the input to an empty string
document.querySelector('ul').appendChild(liEl)
})