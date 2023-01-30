// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const dateElement= document.getElementById('showDate')
var now = new Date();
var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();

function fourdigits(number)  {
	return (number < 1000) ? number + 1900 : number;
								}
  dateElement.innerText =  days[now.getDay()] + ", " +
         months[now.getMonth()] + " " +
         date + ", " +
         (fourdigits(now.getYear())) ;

const timeElement = document.getElementById('showTime');
      setInterval(function () {
        const currentDate = new Date();
        timeElement.innerText = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
      }, 1000);


const currentHour= 99

const buttonList =  document.querySelectorAll(".btn")
buttonList.forEach(element => element.addEventListener("click",saveData))

function saveData(){
  var id =  this.getAttribute("id").split("-")[1]

  var getData= document.getElementById('textarea-'+id).value
  console.log(getData,id);
  localStorage.setItem(id,getData)  //Key / value
}

for(let i=9;i<=17;i++)
{
  var id = "textarea-"+i
  var data = localStorage.getItem(i)
  console.log(id,data)
  document.getElementById(id).value = data
}
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
//   document.getElementById("btn-1").addEventListener("click", function (){
//     var user= document.getElementById("inputtag").value
//     localStorage.setItem("quiz", JSON.stringify({user:user,score:(scoreCount+timerCounter)}))

// })


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


});
