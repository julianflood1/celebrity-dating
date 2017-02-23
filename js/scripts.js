$(document).ready(function() {

  $("form#values").submit(function(event) {
    event.preventDefault();

    var ageInput = parseInt($('#age').val());
    var genreInput = parseInt($('#genre').val());
    var foodInput = parseInt($('#food').val());
    var bedtimeInput = parseInt($('#bedtime').val());
    var finalValue = parseInt(ageInput + genreInput + foodInput + bedtimeInput);
    var sexInput = $('#sex').val();

    if ((finalValue <= 8) && (finalValue >= 4) && (sexInput === "male")) {
      $('#kim').show();
    } else if ((finalValue >= 9) && (finalValue <= 16) && (sexInput === "male")) {
      $('#jennifer').show();
    } else if ((finalValue <= 8) && (finalValue >= 4) && (sexInput === "female")) {
      $('#james').show();
    } else if ((finalValue >= 9) && (finalValue <= 16) && (sexInput === "female")) {
      $('#bruce').show();
    } else {
      alert("Please completely fill forms out");
    }


  });



});
