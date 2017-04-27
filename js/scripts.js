$(function() {
  var height = parseInt(prompt("Enter your height in inches:"));
  $(".rides").hide();

  if (height >= 52) {
    $('.rides').show()
    $('.adultRides').addClass("yellow-background")

  } else {
    $('.rides').show()
    $('.kidRides').addClass("yellow-background")
  };

});
