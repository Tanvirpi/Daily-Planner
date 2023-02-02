const dateElement = document.getElementById('showDate')
var now = new Date();
var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var date = ((now.getDate() < 10) ? "0" : "") + now.getDate();

function fourdigits(number) {
  return (number < 1000) ? number + 1900 : number;
}
dateElement.innerText = days[now.getDay()] + ", " +
  months[now.getMonth()] + " " +
  date + ", " +
  (fourdigits(now.getYear()));

const timeElement = document.getElementById('showTime');
setInterval(function () {
  const currentDate = new Date();
  timeElement.innerText = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}, 1000);


$(function () {

$(".btn").on("click",function(){
   var id =  $(this).attr("id").split("-")[1]

   var value = $("#textarea-"+id).val()
   localStorage.setItem(id,value)
})
var currentHour = dayjs().hour()
for (let i = 9; i <= 17; i++) {
    var id = "#textarea-" + i
    var data = localStorage.getItem(i)
    console.log(id, data)
    $(id).val(data)
    if (i < currentHour) {
      $(id).addClass('past')
    } else if (i === currentHour) {
        $(id).addClass('present')
    } else {
        $(id).addClass('future')
    }
  
  }
  
})