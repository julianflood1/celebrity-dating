$(document).ready(function() {

  $("form#values").submit(function(event) {
    event.preventDefault();

    var ageInput = parseInt($('#age').val());
    var genreInput = parseInt($('#genre').val());
    var foodInput = parseInt($('#food').val());
    var bedtimeInput = parseInt($('#bedtime').val());
    var finalValue = parseInt(ageInput + genreInput + foodInput + bedtimeInput);

    if ((finalValue < 8) && (finalValue >= 4)) {
      $('#kim').show();
    } else if (finalValue >= 8 && finalValue < 10) {
      $('#jennifer').show();
    } else if (finalValue >= 10 && finalValue < 12) {
      $('#james').show();
    } else if (finalValue >= 12 && finalValue <= 16) {
      $('#bruce').show();
    } else {
      alert("Please completely fill forms out");
    }


  });



});
