
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