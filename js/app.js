$(document).ready(function() {
    $("#current-date").html(moment().format("MMMM Do YYYY"))
    if (isItFriday() === true && isItTheThirteen() === true) {
        $("#result").html("YES")
    }
    else {
        $("#result").html("NO")
    }
})

function isItFriday() {
    return moment().weekday()==5
}

function isItTheThirteen() {
    return moment().date()==13
}