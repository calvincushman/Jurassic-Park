$(function() {
  var height = parseInt(prompt("Enter your height in inches:"));

  if (height >= 52) {
    $('.adultRides').show();

  } else {
    $('.kidRides').show();
  }

});
