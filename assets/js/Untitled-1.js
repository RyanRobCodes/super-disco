$(document).ready(function() {

    $('.saveBtn').on('click' ,function(){
        var time = $(this).parent().attr("id");
        var value = $(this).siblings(".addTask").val();
        localStorage.setItem(time, value);
    });

    $("#hour-9 .addTask").val(localStorage.getItem("hour-9"));
    $("#hour-10 .addTask").val(localStorage.getItem("hour-10"));
    $("#hour-11 .addTask").val(localStorage.getItem("hour-11"));
    $("#hour-12 .addTask").val(localStorage.getItem("hour-12"));
    $("#hour-13 .addTask").val(localStorage.getItem("hour-13"));
    $("#hour-14 .addTask").val(localStorage.getItem("hour-14"));
    $("#hour-15 .addTask").val(localStorage.getItem("hour-15"));
    $("#hour-16 .addTask").val(localStorage.getItem("hour-16"));
    $("#hour-17 .addTask").val(localStorage.getItem("hour-17"));


    function updateHours(){
        let currentHour = moment().hour();

        $(".time-block").each(function () {
            var nonCurrentHour = parseInt($(this).attr("id").split("hour")[1]);

            if (nonCurrentHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }

            else if (nonCurrentHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }

            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }

        })

    }
    updateHours();

    var interval = setInterval(updateHours, 15000);

   $("hour-9 .addTask").val(localStorage.getItem("hour-9"));
   
$('#currentDay').text(moment().format("dddd,MMMM Do"));

});





